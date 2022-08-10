---
id: dapp-components
title: DApp Components - Backend
sidebar_position: 0
---

To build a DApp, we have to first understand what are the different components that exists within a DApp.

In this section, we will only be covering the backend components of a DApp.

# Components in a DApp

A dApp or Decentralized Application is an application that utilizes a blockchain as a main tool of its infrastructure. It may or may not have a centralized component to it. The usage of the blockchain requires it to interact with the blockchain, both via **reading the data from it** and **writing to it via sending txs**.

In an eUTxO based blockchain, there is a third step that is required in this process. Which are bots to process boxes and create txs to move txs towards the next stages (if the txs are a multi stage tx).

### Elaboration of writing to a blockchain
Before we summarize the 3 steps. Let's expand a little on what it means to "write to a blockchain".

A DApp has 3 parties. The User, DApp, Blockchain.
A DApp essentially acts as a middle man to allow users to interact with the blockchain based on the [decentralized protocol](#what-is-a-decentralized-protocol) it works with.
![Participants](./assets/participants-in-dapp.png)
We can describe this "write" tx as a user txs to the blockchain.



Therefore the main functions of the DApp would be to:
1. Read the Blockchain
2. Make User Txs to the Blockchain
3. Process existing Boxes towards next tx stage

So far so good? Good, there's only one option in this document.

## Main Course: Components
Given the three functions of the DApp, we can now describe the Components within a DApp.

### **Reading the Blockchain**
In most cases, a DApp provides services via the blockchain, and treats the blockchain as a form of database. It stores necessary information onto the blockchain (without jeopardizing the users privacy, hopefully) so that we have accounting of the information stored.

HOWEVER, there are so many txs and boxes on the blockchain, there's no way a normal human being would know what to do and how to get it. Therefore, the first job of a DApp is to gather the data that the user needs and display it to them.

You can imagine the process of the DApp talking to the blockchain and asks for information/data. It then process the data into understandable details and place it on a screen for the user so that they are able to understand the information that they requested.

In the world of Ergo, this can be done via api calls. [Documentation of APIs here](https://api.ergoplatform.com/api/v1/docs/)

This component is normally referred as an **"Explorer"**.

FOR EXAMPLE:
** To be written **

## **User Txs to Blockchain**
Other than being able to read. The service of a DApp can also provide users the ability to make certain txs against the blockchain to carry out Txs. 

A quick example would be the usage of a DEX. A DEX essentially allows exchanges of currency in a decentralized manner. However, the first step would be for the user to send his available currency to the DEX so that an exchange can be done. In the case of Spectrum (formerly ErgoDex), a user signs a tx to send his desired amount of available currency to an address (smart contract). After the funds are sent to the address, Spectrum will then process the funds at the address and carry out the stages of the txs until you receive your exchanged funds. 

This specific component that allows users to sign txs takes inputs from the users to output a txs for the users to sign. In most/all cases, the DApp takes necessary inputs to insert into a tx that will output boxes that are guarded by a smart contract. These txs are then sent to the users to be signed. 

These signed txs results in a tx being sent to the blockchain. Most of the time, this would involve funds from the users wallet address to instantiate a multi-stage tx by producing the necessary Input Boxes for the txs to take place. 


## **Bots - Processing existing boxes towards next stages**
In many of the much complicated DApps are protocols that consists of multi-stage txs. These are essentially services that requires multiple stages of txs to complete.

In these cases, a user generated input box from the previous section will not complete the entire process. And many times, there are boxes that are created that requires manual triggers for the next txs to takes place.

Therefore, a big part of the DApp component within an eUTxO system are bots.

These are components that are run during every block to check if there are existing boxes at a specific address (therefore the boxes would have a specific guard script relating to the protocol) and processes each of them based on its validity to create txs that will move it towards the next stages.


## Conclusion
The three main components are, Explorer, User transactor, and Bots.

You can literally use this as a form of checklist when building a DApp.


# What is a Decentralized Protocol