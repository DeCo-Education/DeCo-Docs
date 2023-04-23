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

Let's take lending as a real world transaction. A scenario between 2 parties. One, the lender, and two, the borrower. In the scenario, a borrower requests from the lender a capital, and promises to return the funds back with a certain amount of interest rate.

This scenario can then be broken down into smaller steps. For example, we can break it down into:

1. Borrower makes a request of X amount with interest rate of Y% to Lender
2. Lender agrees to fund X amount and provides borrower with funding
3. Borrower receives funding and utilize it for his business
4. Borrower repays the funds to the lender at Y% interest rate every month till pays the total amount with interest
5. The borrow scenario transaction completes and ends

As you can see, a real world scenario can be broken down into smaller transactions too. This transactions can then in turn, be used as a way to translate it to transactions on the blockchain.

## Real World Txs to Blockchain Txs

Taking the real world transactions, we can translate the them to blockchain txs by understanding how boxes can be utilize to replicate the scenario.

| Real World                                                                                                          | Blockchain Tx                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1. Borrower makes a request of X amount with interest rate of Y% to Lender                                          | Borrower creates a box with the smart contract requesting X amount and pay back Y% from Lender and that the box (if funded) will send the funds to Borrower |
| 2. Lender agrees to fund X amount and provides borrower with funding                                                | Lender agrees by funding the box that was created with X amount                                                                                             |
| 3. Borrower receives funding and utilize it for his business                                                        | Borrower receives the funding from the funded box                                                                                                           |
| 4. Borrower repays the funds to the lender at Y% interest rate every month till pays the total amount with interest | Borrower sends back the funds at Y% interest rate every month till the total amount with interest is paid back                                              |
| 5. The borrow scenario transaction completes and ends                                                               | Transaction ends                                                                                                                                            |

We are able to emulate the lending scenario in the blockchain as similar as we could. This allows developers to build smart contracts on ergo blockchain that handles lending.

This is an effective way to bring the efficiencies of blockchain to the real world. Thus assisting people in a more globalized manner, while improving current systems.
