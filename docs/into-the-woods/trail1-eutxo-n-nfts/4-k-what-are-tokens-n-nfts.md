---
id: what-are-tokens-n-nfts
title: Lesson 4. Knowledge - What are Tokens & NFTs
sidebar_position: 3
---

# Lesson 4: Knowledge - What are Tokens & NFTs

```text title="Completion Status"
Version: 1st Version
```

If you were at the hype of 2021 or if you're into art. You'll probably know what NFT's are. If you don't, there are a lot of articles out there that explains NFTs/tokens pretty well.

Like [here](https://www.investopedia.com/non-fungible-tokens-nft-5115211).

In our case, what we're interested in is understanding the technology behind NFTs.

First off,

## NFTs vs Tokens
NFTs and Tokens are all tokens. The only difference is, NFT is a unique token where the amount of token in existence is 1 piece. Whereas tokens, are the same thing but that it has **more than 1 piece**, so 2, or 2000, or 15,000,000. You get the picture.

Therefore when it comes to creating an NFT or tokens for IDO sales etc. All we have to remember is that we're creating the same thing. 

These tokens essentially are
1. Unique
2. Contains some details and information
3. Can't be made more ever again

The last point is what makes it unique. You can burn the token, but you can't make more of the same unique token/s once you made it.

## What makes tokens Unique?
When a token is first minted, it is given a unique token Id. This token Id will last throughout the lifetime of the token no matter where it goes. And this token Id can never be minted again. Therefore tokens are Unique. 

## What are tokens for then?
There are many use cases to tokens. The most mainstream usage is to identify the legitimacy of a digital art. However there are a lot more utility for tokens in the blockchain system. This includes but are not limited to:

1. Digital Art
2. Identifying Boxes in the Blockchain
3. Currency

### Digital Art

Tokens are heavily used in digital art to determine the legitimacy and uniqueness of an artpiece.

A link to a unique digital art is added to the details of the mechanism ***(this mechanism includes the box and token, we're not saying to the token because it's technically incorrect to say that, you'll understand why later)***. And with the minting address added to the mechanism, we can use that to identify if the art came from a legit source (the artist) and if its unique.

The standard for Digital Art is based on the [EIP-004](https://github.com/ergoplatform/eips/blob/master/eip-0004.md). So check if out if you're interested.

### Identifying Boxes in the Blockchain

Tokens are also heavily used as a tool in the blockchain. This is because tokens can be used to find boxes in the eUTxO blockchain. To understand this we have to understand the mechanics of tokens first. 

#### **Tokens in Blockchain**

In an eUTxO system. There only exists boxes at addresses. Boxes are the components that contain the information of the blockchain. These boxes are the ones that contain ERGs, Tokens, Data in registers.

Therefore, a token can only exist within a box. **If a box does not exist, a token cannot exist at the address**.

From this statement, we can deduce a few theory that helps us:
1. Token/s exists in a box.
2. Unique token/s can move through different addresses throughout its lifetime.

Due to the uniqueness of tokens, the system allows us to find boxes that have tokens with a certain token ID.

The API call is:
```
https://api.ergoplatform.com/api/v1/boxes/unspent/byTokenId/{$tokenId}
```

If you'd like to try it out, here is an example with Mi Goreng's token:
```
curl https://api.ergoplatform.com/api/v1/boxes/unspent/byTokenId/0779ec04f2fae64e87418a1ad917639d4668f78484f45df962b0dec14a2591d2
```

If the response don't time out and you go through the responses, you'll see a bunch of boxes at different addresses, that all contains at least 1 Mi Goreng token. These boxes may contain more than just a Mi Goreng token, but it definitely contain at least 1 Mi Goreng token. 


#### Continue of identifying boxes
As these tokens helps us identify boxes. We can create boxes with certain data that we want to always retrieve, and give it a token so that we can quickly retrieve these boxes when we need it. Essentially, it gives developers a tool to quickly retrieve certain boxes by giving the boxes a unique token in the box's inception.


### Currency
Lastly, a token can be used as a currency. When tokens are minted, the minter can declare the amount of tokens that will be created in existence. And the value can be really big. 

9,223,372,036,854,775,807 to be exact.

The minter can mint any amount within that range and start selling or distributing the currency.

## Conclusion
Tokens is one of the most important building blocks of the blockchain. 

It's features:
1. Unique token Id
2. Amount of tokens can go from 1 to 9,223,372,036,854,775,807 (not taking account decimals)
3. Used as an identification token for quick search

allows it to be used in many creative ways that spans across (but not limited to):
1. Digital Art
2. Currency
3. Shares (DAO)

and is an important component and tool in the building of a decentralized application.

```text title="Cabin Sessions"
Throughout this article, we discussed about the different usages of tokens. Ask each Cabin Members about
1. What they understand about Tokens
2. Describe tokens in their own words
3. Think of other applications that can be used with tokens that spans outside of what was discussed and see if people can come up with other use cases
4. What are some real world applications that can utilize tokens
```
Here is a great website with example NFT Use Cases: [NFT Use Cases Applications Examples](https://vitalflux.com/nft-use-cases-applications-examples/)

