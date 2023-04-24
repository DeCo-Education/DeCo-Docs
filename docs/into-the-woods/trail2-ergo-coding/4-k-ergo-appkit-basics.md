---
id: k-ergo-appkit-basics
title: Lesson 2. Knowledge - Ergo Appkit Basics
sidebar_position: 3
---

# Lesson 2: Knowledge - Ergo Appkit Basics

Ergo-Appkit is a software development kit (SDK) created by the Ergo Platform team to make it easier for developers to build decentralized applications (dApps) on the Ergo blockchain. It provides a set of libraries and tools that simplify the process of creating and interacting with smart contracts and transactions on the Ergo blockchain.

Ergo-Appkit includes several key features and components that developers can use to build dApps, such as:

- A high-level smart contract API that simplifies the process of writing and deploying smart contracts on the Ergo blockchain.
- A set of transaction building tools that make it easy to create complex transactions, including multi-stage transactions and transactions that involve multiple parties.
- A set of data structures and utilities that enable developers to work with Ergo's UTXO model and other key features of the blockchain.
- An integrated development environment (IDE) that streamlines the process of writing, testing, and deploying Ergo dApps.
- A set of example applications and templates that developers can use as a starting point for their own projects.

Ergo-Appkit is designed to make it easier for developers to build high-quality dApps on the Ergo blockchain by providing a range of useful tools and resources. Whether you're a seasoned blockchain developer or just getting started with decentralized applications, Ergo-Appkit is a valuable resource that can help you build powerful, secure, and efficient dApps on the Ergo blockchain.

## Steps to building a Txs with Ergo

To build a tx on Ergo requires a few steps. Apps like Nautilus wallet has removed the intricacies of these parts to provide a better User Interface (UI) and User Experience (UX) to improve adoptability. In this article, we will break down these steps to understand what lies behind the red curtains.

To steps to creating a tx are:

1. Instantiate an Address or Smart Contract
2. Retrieve and Create the respective Boxes
3. Compose the Tx
4. Prove and Sign the Tx
5. Send the Tx to the Blockchain

Sounds simple, but let's dive a little deeper.

### 1. Instantiate an Address or Smart Contract

A tx consists of sender(s) and receiver(s). As these are all represented by boxes at addresses, we would have to instantiate the address(es) for each sender(s) and the address(es) for each receiver(s).

Though the humanistic term is to use sender(s) and receiver(s). In the developer language, we tend to call it:

- Sender(s) -> InputBox(es)
- Receiver(s) -> OutBox(es)

NOTE: OutBoxes are called OutBox not OutputBox

As mentioned in [GuardScripts Article](../trail1-eutxo-n-nfts/2-k-registers-guardscripts-ergoscript.md), guard scripts can be hashed into an address. Therefore, we can compose guard scripts and get the address representation of it to

1. Get the "sender" box
2. Compose the "receiver" box

In this part, the Classes from AppKit that are utilized are:

1. [Address](https://github.com/ergoplatform/ergo-appkit/blob/458c21bf6abed9602f446de8d93349da9f3be8b6/common/src/main/java/org/ergoplatform/appkit/Address.java#L27)
2. [ErgoContract](https://github.com/ergoplatform/ergo-appkit/blob/7203ab040fc104bcce571dd91a873d8915b7e42b/common/src/main/java/org/ergoplatform/appkit/ErgoContract.java#L11)

Example:

```
val spenderAddress: Address = Address.create("{Spender's Address}")

// OR

val spenderContract: ErgoContract
```

### 2. Retrieve and Create the respective Boxes

After getting the required address, we will have to retrieve the InputBox(es) that exists on the blockchain so that we can compose the tx.

Using these InputBox(es) and the data it holds, we can compose the ncecessary OutBox(es) for the txs.

To retrieve these InputBox(es), we utilize what we call a [BlockchainDataSource](https://github.com/ergoplatform/ergo-appkit/blob/0ab249364b3694a4167b059f5acfb32d41c45d24/lib-api/src/main/java/org/ergoplatform/appkit/BlockchainDataSource.java#L9) from a [BlockchainContext](https://github.com/ergoplatform/ergo-appkit/blob/85f65e616765ff229745939f1e369642f4f54200/lib-api/src/main/java/org/ergoplatform/appkit/BlockchainContext.java#L16). By calling the function [getUnspentBoxesFor(Address address, int offset, int limit)](https://github.com/ergoplatform/ergo-appkit/blob/0ab249364b3694a4167b059f5acfb32d41c45d24/lib-api/src/main/java/org/ergoplatform/appkit/BlockchainDataSource.java#L58), we are able to retrieve the unspent boxes at the address that we specified on the previous step.

Example:

```
val client: ErgoClient
client.execute { ctx: BlockchainContext => {
    val spenderBoxes: List[InputBox] = ctx.getDataSource.getUnspentBoxesFor(spenderAddress, 0, 100)
}}
```

and to compose OutBox(es), a class called [OutBoxBuilder](https://github.com/ergoplatform/ergo-appkit/blob/e7f49e16fc33c90ab535e8ab3e2dca2751d177c7/lib-api/src/main/java/org/ergoplatform/appkit/OutBoxBuilder.java#L14) to build the OutBox. This class is in [UnsignedTransactionBuilder](https://github.com/ergoplatform/ergo-appkit/blob/bad1163c1776fa223719013e6939d6e82c07d30f/lib-api/src/main/java/org/ergoplatform/appkit/UnsignedTransactionBuilder.java#L18) of the BlockchainContext. It can be called this way.

Example:

```
client.execute { ctx: BlockchainContext => {
    val txB: UnsignedTransactionBuilder = ctx.newTxBuilder()
    // Create a box of 1 Erg at receiverAddress
    val outBoxBuilder: OutBoxBuilder = txB.outBoxBuilder().contract(receiverAddress).value(Parameters.OneErg)
    val outBox: OutBox = outBoxBuilder.build()
}}
```

### 3. Compose the Tx

After retrieving the InputBox(es) and composing the OutBox(es), we can use these to compose the Unsigned Tx by utilizing the UnsignedTransactionBuilder.

Example:

```
    val unsignedTx: UnsignedTransaction = txB
        .addInputs(spenderBoxes)
        .addOutputs(outBox)
        .sendChangeTo(spenderAddress)
        .build()
```

### 4. Prove and Sign the Tx

For a tx to succeed, each of the InputBox(es) has to be spendable. This means that the condition of the guard script for each boxes has to result to true. For non-user smart contracts, it usually depends on the conditions of the Tx. However, InputBox(es) from a wallet can only be spent if the wallet signs the tx.

This is where a [ErgoProver](https://github.com/ergoplatform/ergo-appkit/blob/0a769dccc4e6abdbd4b4f7f6023de6059a7198e8/lib-api/src/main/java/org/ergoplatform/appkit/ErgoProver.java#L15) comes in. An ErgoProver is a class that is derived from the wallet's private key. This allows it to sign the tx that contains the InputBox(es) from its address and allow the Tx to succeed by successfully spending the InputBox(es) that belongs to that address.

NOTE: If the box contains guard script that will result to true without a private key signing it, any provers can sign it.

Example:

```
    val prover: ErgoProver = ctx.newProverBuilder
        .withMnemonic(
            SecretString.create("{Wallet Mnemonic}"),
            SecretString.create("")
        )
        // Index of the address, in int
        .withEip3Secret({addressIndex})
        .build()

    val signedTx: SignedTransaction = prover.sign(unsignedTx)
```

### 5. Send the Tx to the Blockchain

And finally, once we signed the Tx, we can send it to the blockchain with the BlockchainContext.

Example:

```
    ctx.sendTransaction(signedTx)
```

After sending it to the blockchain, the nodes will mine it. If all goes well, the transaction succeeds and you sent your very first transaction.
