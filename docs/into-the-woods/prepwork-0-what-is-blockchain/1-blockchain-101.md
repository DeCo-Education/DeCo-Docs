---
id: blockchain-101
title: Blockchain 101
sidebar_position: 0
---

# Blockchain 101

```text title="Completion Status"
Version: 1st Version
Question from Kii: I think this is an interesting part of development. Because it is generic yet it is somehow important. The question we should ask ourselves is not if we're actually have the right information for what Blockchain is, because there are other resources out there that can provide way better information as compared to what we can provide. The question to ourselves is, what information should be put into this article that can really benefit the students who are here to learn about Ergo dApp development.
```

### What is a Blockchain?

A blockchain can be seen as an immutable ledger that has the history of all transactions that ever existed on that blockchain. These transactions are completed in **Blocks**.

Depending on the blockchain, they can store Value (Bitcoin network) or Value and data that allows it to conduct smart transactions (Ergo, Ethereum, Cardano), whereby smart transactions are transactions that are given rules and therefore can only be executed in certain manners.

It can be viewed as a decentralized ledger where all the information that is stored on it, are immutables, meaning that all information, once confirmed by the protocol, becomes unchangeable.

---

### Where comes the Security?

The security of a blockchain is created by the sum of the __Miners/Validators__ of the same network.

There are many _types/consensus_ of Blockchains, and each one has his own features, for example:

- __Proof-of-Work__
  - Bitcoin, Ergo,...
  - The block validation and token issuances are created by the __Miners__.
- __Proof-of-Stake__
  -  Cardano, ...
  - The block validation and token issuances are created by the __Node Validators__.
-  __Pure Proof-of-Stake__
    - Algorand, ...
- The block validation and token issuances are created by the __Holders Validators__.
- __Proof-Of-History__
  - Solana, ...
- The block validation and token issuances are created by the __Time Validators__.
- __Proof-Of-Space__
  - Chia, ...
- The block validation and token issuances are created by the __Storage Validators__.
- and many more...

Given Proof-of-Work(PoW) as example, the more Miners a network has, the more secure it is because if bad actors want to take advantage
 of the network (to be able to cancelled others transactions, double-spending tokens...), they have to had more than 51% to be able to attack it.

---
### Blocks

We defined Blockchain as being a _Collection_ of _Blocks_, so lets find out what's inside a block.

Blocks have many characteristics for example:

-  __Value__ - Native Token (BTC, ERG, ADA, ...)
- __Data__ - timestamp, block height,...
- __Smart Contracts__ - NFT's for example
    - only if the blockchain allows it. 
    - The Bitcoin for example does not support natively Smart Contracts)
- and so on...

---

### Quiz
<details> 
<summary> <strong>Pop Quiz: &nbsp;Can Ergo be considered a decentralized legder? </strong> </summary>
&emsp;<underline>Yes!</underline> <br>
&emsp;Ergo is based on Blockchain technology which inherits all characteristics like decentralized ledger.<br>

</details>

---

In the next topic we will discuss more about __What is Ergo?__