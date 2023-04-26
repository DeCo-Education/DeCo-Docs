---
id: ho-your-first-nft
title: WIP Lesson 5. Hands-On - Your first NFT
sidebar_position: 6
---

# Lesson 5: Hands-On - Your First NFT & Chained Txs

Aight, we've made big progress. Let's write some code to mint your first token. To make it a little more challenging, we will be using the NFT Creator Proxy Contract in [Lesson 6 of trail one](../trail1-eutxo-n-nfts/6-ho-designing-an-nft-creator-proxy-contract.md) to make it a tad bit more fun.

Let's first pull up the contract that we have created in Lesson 6.

```
Injected Parameters
"_tokenName" -> "DeCo Test Token"
"_tokenDesc" -> "Random NFT for test"
"_numOfDecimals" -> 0
"_nftType" -> 1 (1 represents audio?)
"_sha256HashOfFile" -> "{SHA OF FILE}"
"_linkToArtwork" -> "https://lalala.co/lalala.png"

val createNFTProxyContractScript: String = """{
    val issuanceBox: Box = OUTPUTS(0)
    val issuerBox: Box = INPUTS(0)
    val outBoxIsArtistAddress: Boolean = issuanceBox.propositionBytes == issuerBox.R5[Coll[Byte]].get

    val isRegistersDesiredValue: Boolean = {
        allOf(Coll(
            issuanceBox.R4[Coll[Byte]] == _tokenName,
            issuanceBox.R5[Coll[Byte]] == _tokenDesc,
            issuanceBox.R6[Long] == _numOfDecimals,
            issuanceBox.R7[Long] == _nftType,
            issuanceBox.R8[Coll[Byte]] == _sha256HashOfFile,
            issuanceBox.R9[Coll[Byte]] == _linkToArtwork,
        ))
    }

    sigmaProp(
        outBoxIsArtistAddress &&
        isRegistersDesiredValue)
}"""
```

What a beautiful masterpiece we have created. And the states.

| Checkpoint   | Address      |
| ------------ | ------------ |
| Start        | Your Address |
| Issuer Box   | Undecided    |
| Issuance Box | Your Address |

So a quick refresh. We have to first create the issuer box that has the proxy contract attached. Send the box to the blockchain. Then use that box to create the NFT.

In this example, we will introduce something called a chained transaction.

## What is a Chained Tx?

In the world of Ergo Blockchain. A block is mined every 2 minutes. This can be a waste of time if we engineered a [multi-stage tx](../trail3-multi-stage-txs-n-contracts/1-k-what-is-a-multi-stage-tx.md). However, Ergo blockchain consist of a feature called chained tx that allows transaction to be chained from one to the other and all sent in one block. This allows transactions to scale parallelly. (As long as all the transaction succeeds)

**Here's an example:**
Imagine, we have two transactions, TxA and TxB. Assuming these txs are more than just simple txs, but rather txs with smart contracts and conditions.

TxB is reliant on boxes in TxA. Meaning, if TxA is not executed, TxB cannot proceed, as there are no boxes that can be used as InputBoxes in TxB.

In other blockchain, you would have to submit TxA, wait for the block to mine, then process and submit TxB.

However, in Ergo, we can process and submit TxA. Retrieve the OutBoxes from TxA, compose TxB with the OutBoxes from TxA as InputBoxes, and then submit TxB to the blockchain. All in the same block.

Let's see it in action with our exercise.

First off, lets plan out our steps:

1. Create the ErgoClient
2. Create the BlockchainContext
3. Retrieve the transaction Input Boxes
4. Create the Transaction Builder
5. Compile Proxy Contract
6. Create the IssuerBox with Proxy Contract
7. Create the Prover
8. Create Unsigned Transaction A
9. Sign Transaction A and send to Blockchain
10. Retrieve the OutBox from Transaction A
11. Create IssuanceBox that is sent to User
12. Mint Token
13. Create the transaction with IssuanceBox
14. Create Unsigned Transaction B
15. Sign Transaction B and send to Blockchain

```scala
// 0. Create address
val yourAddress: Address = Address.create("{Your wallet address}")

// 1. Create the ErgoClient
val ergoClient: ErgoClient = RestApiErgoClient.create(nodeApiUrl, networkType, nodeApiKey, explorerURL)

// 2. Create the BlockchainContext
ergoClient.execute(ctx: BlockchainContext => {
    // 3. Retrieve the transaction input box
    // This input box will be your address.
    // Therefore we have to pull boxes from your address.
    val spendingBoxes: List[InputBox] = ctx.getDataSource.getUnspentBoxesFor(yourAddress, 0, 100)

    // 4. Create the TransactionBuilder
    val txB: UnsignedTransactionBuilder = ctx.newTxBuilder()

    // 5. Compile Proxy Contract
    val tokenName: String = "DeCo Test Token"
    val tokenDesc: String = "Random NFT for test"
    val numOfDecimals: Long = 0
    val nftType = 1
    val sha256OfFile = "{SHA of FILE}"
    val linkToArtwork = "{Link to Artwork}"
    val constants: List[(String, Any)] = List(
        ("_tokenName", tokenName),
        ("_tokenDesc", tokenDesc),
        ("_numOfDecimals", numOfDecimals),
        ("_nftType", nftType),
        ("_sha256HashOfFile", sha256OfFile),
        ("_linkToArtwork", linkToArtwork)
    )
    val builder: ConstantsBuilder = new ConstantsBuilder
    val ergoConstants: Constants = {
        constants.foreach(c => builder.item(c._1, c._2))
        builder.build()
    }
    val nftCreatorProxyContract: ErgoContract = ctx.compileContract(
        ergoConstants,
        // This is the string from above
        createNFTProxyContractScript
    )

    // 6. Create the IssuerBox with ProxyContract
    val issuerBox: OutBox = txB
      .outBoxBuilder()
      // Declare value of the OutBox
      // We need 2*MinFee because the
      // proxy contract needs enough
      // funds to be processed
      .value(2*ErgCommons.MinBoxFee)
      // Send back to your address
      .contract(nftCreatorProxyContract)
      .build()


    // 7. Create the Prover
	val prover: ErgoProver = ctx.newProverBuilder()
		.withMnemonic(
			SecretString.create(BuyerMnemonic),
			SecretString.empty()
		)
		.build();

	// 8. Create the unsigned transaction
	val unsignedIssuerBoxTx: UnsignedTransaction = txBuilder.boxesToSpend(spendingBoxes)
		.outputs(issuerBox)
		.fee(Parameters.MinFee)
		.sendChangeTo(yourAddress.getErgoAddress)
		.build();

	// 9. Sign and Send TxA
	val signedTxA: SignedTransaction = prover.sign(unsignedIssuerBoxTx)
	val txIdA: String = ctx.sendTransaction(signedTxA)

    // 10. Retrieve the OutBox from Transaction A
    val outputsToSpend: List[InputBox] = signedTxA.getOutputsToSpend

    val issuerBoxAsInputBox: InputBox = outputsToSpend.get(0)

    // 11. Create IssuanceBox that is sent to User
    val issuanceBox: OutBox = txB
      .outBoxBuilder()
      // Declare value of the OutBox
      .value(ErgCommons.MinBoxFee)
      // Mint token in OutBox
      .mintToken(eip4Token(tokenToMint))
      // Send back to your address
      .contract(yourAddress)
      .build()

    // 12. Mint Token
    val tokenToMint: ErgoToken = new Eip4Token(
            issuerBoxAsInputBox.getId.toString,
            1,
            tokenName,
            tokenDesc,
            numOfDecimals,
            ErgoValue.of(nftType),
            ErgoValue.of(sha256OfFile),
            ErgoValue.of(linkToArtwork)
        )

    // 14. Create Unsigned Transaction B
	val unsignedIssuanceTx: UnsignedTransaction = txBuilder.boxesToSpend(issuerBoxAsInputBox)
		.outputs(issuanceBox)
		.fee(Parameters.MinFee)
		.sendChangeTo(yourAddress.getErgoAddress)
		.build();

    // 15. Sign Transaction B and send to Blockchain
	val signedTxB: SignedTransaction = prover.sign(unsignedIssuanceTx)
	val txIdB: String = ctx.sendTransaction(signedTxB)
})
```
