---
id: k-off-chain-on-chain-appkit
title: Lesson 2. Knowledge - On-chain & Off-chain
sidebar_position: 2
---

### Lesson 3: Understanding On-Chain and Off-Chain Components in Ergo Blockchain Development

On-chain and off-chain are essential terms in Ergo Blockchain development, and understanding their differences is crucial to building effective decentralized applications (dApps). In this lesson, we will dive deeper into on-chain and off-chain components and their functions.

## What is On-Chain?

On-chain refers to the parts of a dApp that exist directly on the blockchain. This includes smart contracts that are attached to boxes and data stored in the registers of those boxes. When designing a dApp, it is common to start with creating the transactions, followed by the development of smart contracts to enable the decentralized operation of the dApp on the blockchain.

## What is Off-Chain?

Off-chain refers to parts of a dApp that do not exist on the blockchain. Many UTxOs require a system to process boxes and move them to the next stage, and this is where off-chain systems come into play. These systems usually involve REST endpoints and bots that perform several crucial functions, including:

Retrieving data from the blockchain
Composing transactions for users to sign
Processing transactions that are ready to move to the next stage of the dApp scenario

## Example: Transaction Bot

One example of an off-chain system is a transaction bot, which can help automate the process of composing and processing transactions. The Exle Tx Bot is a useful example of this kind of system. You can learn more about the Exle Tx Bot and its architecture by visiting their documentation: Exle Tx Bot

By understanding the differences between on-chain and off-chain components and their functions, developers can build more effective and efficient dApps on the Ergo Blockchain.
