---
id: ho-designing-an-nft-creator-proxy-contract
title: Lesson 6. Hands-On - Designing an NFT Creator Proxy Contract
sidebar_position: 5
---

# Lesson 6: Hands-On - Designing an NFT Creator Proxy Contract

## What is a Proxy Contract?

A proxy contract is what its name means. A proxy. To be more specific, it is a proxy that exists as a smart contract. This proxy contract can be used as an intermediary to ensure that data and txs are correctly devised in the way the user wants it to be.

There is a [whole article]() explaining what it is. However, we won't get into that detail. Just see it as a proxy.

### How is it useful

Proxy contracts are mainly use for intermediaries. It is a way to ensure that the following outputs are created in the way that the user decides it to be.

For example, we want to create an NFT and would like to use an online minter rather than mint it ourselves. However, there are no way for us to ensure that the box created after creating the Issuer box will create the OutBox with the right output to have the desired token details.

This is where a proxy contract comes into hand. A proxy contract can be written to ensure that the data that is created is exactly what the smart contract tells it to,else it will not be created at all.

### Where would a Proxy Contract exists in the system when you're the one who's going to create it?

Let's think about this together.

What is the start, and what is the end?

#### The Start

is your address, where you send funds.

#### The End

of the system is the NFT being created and sent to your address.

**Now** that we know where the start and the end is, we can better understand how to design this system.

So let's say, we start from your address. We will have to create a tx to create an issuer box. Remember, an issuer box is the first step to minting the NFT.

Since we're starting from your address, it means the issuer box can only be created if your wallet signs the tx. Therefore you have full control of what the data in the issuer box is.

It's also in this step where we agreed that we'd like to send this to another protocol to handle this. So the next step will not be your address.

Let's use a table to depict this process.

| Checkpoint   | Address      |
| ------------ | ------------ |
| Start        | Your Address |
| Issuer Box   | Undecided    |
| Issuance Box | Your Address |

After laying it out, it becomes obvious that the address that is empty for the issuer box is where the proxy contract should lie!

#### But it says address, not smart contract!

Well, sounds like you have to refer to the [Guard Script](./2-k-registers-guardscripts-ergoscript.md) article to reclarify your understanding ;)

From this, we can conclude that we need to write out a proxy contract to ensure that **The NFT is minted with the right data, and sent back to Your Address**.

#### But, why didn't we just mint it to our own address?

We can. But this is a lesson to learn about proxy contracts. Good question though ;)

## Composing the NFT Creator Proxy Contract

We won't be going too deep into composing a full-on smart contract in this session. However, we'll go through enough that its more than a sneak peek and enought to keep you on your feet.

Let's first understand what are the conditions for the smart contract.

1. The token has to be sent to Your address
2. The Issuance Box (OutBox(0)) has to have these registers
   a. R4 - Your decided Token Name
   b. R5 - Your decided Token Description
   c. R6 - Your decided # of Decimals
   d. R7 - Your decided NFT Type
   e. R8 - Your decided SHA256 Hash of File
   f. R9 - Your decided Link to Artwork

Now that we have our conditions written down, we're ready to write our script. However, to encourage self learning, I'll start off with explanation of some components in an ErgoScript.

An empty script starts off with this:

```
{
}
```

Just brackets. This does not work though. So let's start with a "True" script.

```
{
    sigmaProp(true)
}
```

Makes much more sense.
SigmaProp is what we use to say **"Evaluate this script to see if this box is spendable or not."** Remember, an unspendable box means that the tx will fail.

Next, we declare parameters in the box. These are normally done when the smart contracts are created. It is injected into the smart contract, not declared in it.

```
Injected Parameters
"_helloWorld" -> "HelloWorld"

{
    val isHelloWorld: Boolean = _helloWorld == "NotHelloWorld"

    sigmaProp(isHelloWorld)
}
```

After injecting \_helloWorld with the value "HelloWorld", we are able to use the value of \_helloWorld as a parameter to carry out condition checkings in the smart contract.

However, this contract will fail. This is because the argument isHelloWorld does not result to true as the Strings "HelloWorld" and "NotHelloWorld" are not equal.

#### Are we required to put \_ before the parameter?

No you aren't, but its a good practise to differentiate parameters that are injected and variables that are not.

### Getting your hands dirty

This part we will be revealing the answer to the proxy contract for the issuer box. However spend a few minutes composing the proxy contract with all the new knowledge you have learn to practise.

1

2

3

4

5 minutes.

Aight times up.
Let's go through this together.

The first condition is to ensure that the issuance box is sent to the address. From the previous article, we learned that Issuer box has the address in R5.

So let's compose the script to send it back to the artist.

```
{
    val outBoxIsArtistAddress: Boolean = OUTPUTS(0).propositionBytes == INPUTS(0).R5[Coll[Byte]].get

    sigmaProp(outBoxIsArtistAddress)
}
```

We compare the address (propositionBytes) of the first OutBox (issuance box) to the R5 of the first InputBox (issuer box).

Next we have to ensure that all the registers of the issuance box are filled up correctly.

```
Injected Parameters
"_tokenName" -> "DeCo Test Token"
"_tokenDesc" -> "Random NFT for test"
"_numOfDecimals" -> 0
"_nftType" -> 1 (1 represents audio?)
"_sha256HashOfFile" -> "{SHA OF FILE}"
"_linkToArtwork" -> "https://lalala.co/lalala.png"

{
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
}
```

And there you have it. Your very own NFT creator proxy contract.
