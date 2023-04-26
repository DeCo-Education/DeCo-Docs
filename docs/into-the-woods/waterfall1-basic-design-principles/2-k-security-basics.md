---
id: k-security-basics
title: Chill n Learn 2. Knowledge - Security Basics
sidebar_position: 1
---

# Chill n Learn 2: Knowledge - Security Basics

Imagine you put all your money into a bank. And the next day, it got robbed and you lose all your money. As crypto is tightly tied to a person's wellbeing. You wouldn't want to put your coins in a faulty dApp protocol. That being said, you don't want to build a faulty dApp protocol filled with security issues and lose the confidence of your customers.

This can be prevented by ensuring the security of your dApp is top notch.

The easiest and best way to ensure that your smart contracts are resilient is to ensure that it's pathways towards the next txs are strictly defined.

What does this mean?

It means that you should compose your smart contracts so that if tx can be spent in conditions A, B and C. It should never be able to be spent by an unknown condition D!

The best advice is to be meticulous in composing your smart contract, and think of all the edge cases that you can possibly think of.

Or you can test your contracts.

The best way to test your contracts is to create the mock transaction, and sign the transaction. If the box with the contract is not spendable, the transaction should fail. If it does not fail, you found a security bug.

These transactions are easier to compose by utilizing Chained Transactions.

Create the boxes with the contracts, and then use the function .getOutputsToSpend and use those newly built input boxes to test your protocol.

Happy Debugging.
