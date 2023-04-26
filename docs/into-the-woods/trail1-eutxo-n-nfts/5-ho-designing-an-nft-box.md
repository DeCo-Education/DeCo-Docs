---
id: ho-desiging-an-nft-box
title: WIP Lesson 5. Hands-On - Minting a Token
sidebar_position: 4
---

# Lesson 5. Hands-On - Minting a Token

```text title="Completion Status"
Version: Semi drafted (NOT DONE)
```

This is our first hands-on session. So let's get started. In this session, we will be working on designing an NFT box together.

First off, we have to understand what an NFT box is.

## What is an NFT Box

A box that contains an NFT (a single token) and registers that is filled with EIP-004 standards are considered an NFT Box.

This is a quick depiction of what an NFT box would look like.

![NFT Box](../../../static/img/nftbox.png)

and this is a real NFT on chain

```
Example NFT:
https://api.ergoplatform.com/api/v1/boxes/unspent/byTokenId/518f17f5dabd265e92af7dfced645b8d283a67c01970be4dc9c5e4688b54257f
```

The idea of an NFT is that the data is stored on-chain. There are no data that is stored on the token. The token just refers to the box id that created it. This means that the token id itself references the box in the transaction where it was spent to create the token itself. Therefore, all data that are related to the token is stored on that box itself.

Referring to the figure above, the data on each registers of the box determines the details of the token.

Therefore, when we're designing an NFT, we have to carefully fill up each registers of a box:

```
R4 -> Name of the Token
R5 -> Description of the Token
R6 -> Number of decimals (0 for NFT)
R7 -> NFT Type (Image, Audio, File)
R8 -> SHA256 Hash of the file
R9 -> Link to the Artwork
```

### Aren't these just random data on a box?

It is just data on a box. The beauty of blockchain is that it stores data that will exists forever. The beauty of humanity is that we're able to create systems and from abstractions of information.

NFT itself is a protocol. It's a contract(not to confuse with smart contract) that the community has come to agree on that it provides a certain meaning. And in the UTxO system of Ergo, this is how Ergonauts have come to agree on what an NFT constitutes of.

## Royalties

There's another concept in NFT's called royalties. This is the payout percentage of the NFT when the art gets sold off to another party on a marketplace.

WHAT DO YOU MEAN ON A MARKETPLACE? WHAT ABOUT P2P? DOES THE ARTIST MAKES MONEY?

In a P2P system, technically, the artist does not make any money. It depends on the system and the parties. Think about this, when you give your sister a shirt, does part of the money gets sent to the creator? When you send an NFT from one wallet to another, does some of the funds in your wallet automatically gets sent to the artist?

The royalty in the Ergo Blockchain, is implemented as a number in percentage that is a guide on how much royalty the artist should receive if the NFT is sold. It is largely implemented in marketplace and smart contracts to withhold that integrity. However, it is purely data, like the reference data of tokens.

The data regarding royalties are stored in the first input box of the tx that created the NFT box. It normally look like this.

| Registers | IssuerBox          | IssuanceBox         |
| --------- | ------------------ | ------------------- |
|           | InputBox(0)        | OutBox(0)           |
| R4        | Royalty Percentage | Token Verbose Name  |
| R5        | Artist Address     | Token Description   |
| R6        |                    | # of Decimals       |
| R7        |                    | NFT Type            |
| R8        |                    | SHA256 Hash of File |
| R9        |                    | Link to Artwork     |

```text title="Cabin Sessions"
In this article, we learned about what an NFT is and how to design a tx that will generate an NFT. Let's get our hands dirty and cement the idea by designing our own NFT!
1. Think of an NFT that you want to mint. What the idea is, what it would be, and what it is about.
2. Fill up each the issuer box and issuance box registers.
3. Think about how you would use this current protocol to create a whole NFT collection.
```
