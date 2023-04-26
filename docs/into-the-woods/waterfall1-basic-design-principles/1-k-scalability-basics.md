---
id: k-scalability-basics
title: Chill n Learn 1. Knowledge - Scalability Basics
sidebar_position: 0
---

# Chill n Learn 1: Knowledge - Scalability Basics

Imagine using an application, and you are forced to wait for 1 hour before you can proceed to use the main function of it. That is bad service and bad user experience.

The same exists for dApps. This happens when the dApp is not able to scale its services to accomodate its users.

## What does it mean to Scale?

To scale is to allow a system to handle a big load of requests in a short amount of time. In traditional software engineering, these are discussed in terms of vertical scaling and horizontal scaling.

Vertical scaling is done by improving the efficiency of the code and maximizing the throughput of a single server.

Horizontal scaling is done by increasing the amount of servers to handle the load and throughput.

Both comes with its own complexity and difficulties to implement.

## How does it relate to the blockchain?

The biggest bottleneck of a blockchain is the requirement to wait for a tx to complete before it can carry out the subsequent Txs.

## How to scale on Ergo?

The easiest way to scale on Ergo is by utilizing Chained Tx as discussed in [Trail 2. Article 8](../trail2-ergo-coding/7-ho-your-first-nft.md).

The flaw to this is that we would still have to wait for the 2 minute blocktime to finish.

The good news is that there are new solutions that are coming up (Layer-2 protocols). And this will address the blocktime issue by submitting the tx to the layer 2 chain.

For now? Master chained tx ;)

Have more thoughts and opinions regarding this? Submit a PR :)
