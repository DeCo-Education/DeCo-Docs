---
id: simple-txs-vs-real-world-txs
title: Lesson 3. Knowledge - Ergo Blockchain Txs vs Real World Txs
sidebar_position: 2
---

# Lesson 3: Knowledge - Ergo Blockchain Txs vs Real World Txs

## What is a Transaction (Tx) on Ergo Blockchain

In the Ergo blockchain, a transaction is a collection of inputs and outputs. Each input and output is represented by a box, which contains a certain amount of Ergo cryptocurrency as well as any additional data or assets that are associated with the box.

When a transaction is created, it includes one or more inputs that reference existing boxes on the blockchain. The transaction also includes one or more outputs that specify new boxes to be created and the amount of Ergo cryptocurrency to be associated with each new box. The outputs also include ErgoScript scripts that define the conditions under which the box can be spent in the future.

To spend an input box, a transaction must include a proof that satisfies the guard script associated with the box. This proof can take the form of a digital signature, a time-based lock, or a combination of other conditions specified by the script.

Once a transaction is created and broadcast to the Ergo network, it is added to a pool of unconfirmed transactions. Miners on the network then compete to validate the transactions in the pool by solving a cryptographic puzzle. Once a miner solves the puzzle, they add the validated transactions to a block, which is added to the blockchain.

When a block is added to the blockchain, the inputs referenced in the transactions within the block are marked as spent and cannot be spent again. The outputs from the transactions within the block become new boxes on the blockchain, with their own associated ErgoScript scripts that define the conditions for spending them.

## What are Real World Transactions (Txs)

Real world transactions (transaction that happens in reality between human beings) are very similar to blockchain txs in a way where there can be multiple transactions that happens in a scenario for a scenario to be completed successfully.

# Simple Transactions

The most basic of all transactions is the transaction between two human beings. When we give another person X amount of funds. That is considered the most basic of transactions.

```
Real world Tx - Bob gave Amy X dollars.
Ergo Tx - Bob send Amy X Ergs.
```

Though simple, it is really important to anchor ourselves to this simple concept, on what a tx essentially is. This removes the fear of the increasing complexity of the system as we develop our skills and build more complicated multi-staged transactions.

So remember, tx essentially boils down to sending something, that'd be Ergs, money, tokens, nfts, from one party (address) to another party (address).
