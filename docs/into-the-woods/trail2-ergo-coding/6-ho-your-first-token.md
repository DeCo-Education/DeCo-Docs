---
id: ho-your-first-token
title: Lesson 4. Hands-On - Your First Token
sidebar_position: 5
---

# Lesson 4: Hands-On - Your First Token

Before we show you the tutorial. Please try writing out some code on your own with the example from previous article. Once you've tried it. Come back to this article, and we will go through it step by step.

## Alright, Let's mint our first token!

This is purely a token, and not an NFT. NFT will be in the next chapter.

So let's start, here's the general steps that were taken from the previous article.

1. Create the ErgoClient
2. Create the BlockchainContext
3. Retrieve the transaction Input Boxes
4. Create the Transaction Builder
5. Create the Token
6. Create the transaction Output Boxes
7. Create the Prover
8. Create the Unsigned Transaction
9. Sign the transaction and retrieve the transaction id

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

    // 5. Create the Token
    val tokenName: String = "HelloWorld"
    val tokenDesc: String = "Test Test"
    val decimals: Long = 0
    val tokenToMint: ErgoToken = new Eip4Token(
            spendingBoxes.get(0).getId.toString,
            1,
            tokenName,
            tokenDesc,
            decimals
        )

    // 6. Create the OutBox
    val outBox: OutBox = txB
      .outBoxBuilder()
      // Declare value of the OutBox
      .value(ErgCommons.MinBoxFee)
      // Mint token in OutBox
      .mintToken(eip4Token(tokenToMint))
      // Send back to your address
      .contract(ContractUtils.sendToPK(yourAddress))
      .build()


    // 7. Create the Prover
	val prover: ErgoProver = ctx.newProverBuilder()
		.withMnemonic(
			SecretString.create(BuyerMnemonic),
			SecretString.empty()
		)
		.build();

	// 8. Create the unsigned transaction
	val unsignedMintTokenTx: UnsignedTransaction = txBuilder.boxesToSpend(spendingBoxes)
		.outputs(outBox)
		.fee(Parameters.MinFee)
		.sendChangeTo(yourAddress.getErgoAddress)
		.build();

	// 9. Sign the transaction and retrieve the tx id
	val signedTx: SignedTransaction = prover.sign(unsignedMintTokenTx)
	val txId: String = ctx.sendTransaction(signedTx)
})
```
