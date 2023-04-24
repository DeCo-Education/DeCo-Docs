---
id: k-what-is-a-multi-stage-tx
title: WIP Lesson 1. Knowledge - What is a Multi Stage Tx
sidebar_position: 0
---

# Lesson 1: Knowledge - What is a Multi Stage Tx

A simple tx is the basic of all tx. A direct transaction between two parties. However, with the inclusion of Smart Contracts, we are able to create autonomous systems that facilitates complicated scenario in the real world and bring it onto the blockchain.

## What is a Multi Stage Tx

Multi-stage txs are essentially multiple txs being put together in scenarios. At the core, it is still made up of simple txs, an address sending something to another address, just that there's a lot more txs and includes boxes with more complicated guard scripts. Which takes multiple txs to complete the entire scenario.

The most basic of all multi-stage tx is the pin-lock contract. However, a contract can be as simple or as complicated as the features that it provides. At the end of the day, the complexity of the smart contracts depends on the feature and security that the scenario/dapp provide.

## Real World Txs to Blockchain Txs

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
