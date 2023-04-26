---
id: k-organization-basics
title: Chill n Learn 3. Knowledge - Modular Guard Scripts
sidebar_position: 2
---

# Chill n Learn 3: Knowledge - Modular Guard Scripts

Imagine if you have a remote control. Wouldnt it be cool if it can be utilized to control multiple things? Like changing the radio channel to channel one, or changing the tv channel to channel ten. All using the same remote control.

Boxes can be composed in the same way. The essence of a box is that it carries a set of data. If the data can be persisted or modify in a way where it is useful in an ecosystem, then you wouldn't need to build 10 different remote controls (boxes) for parts of the protocol that can utilize it.

This is what we call **Modular Guard Scripts**.

These guard scripts are attached to boxes and allow it to be modular in ways where you can build a whole new system and utilize these same boxes.

This can be done by writing guard scripts that have pre-defined pathways, but pathways that are flexible enough for it to be reusable.

A quick example is Exle's SLTLendBox. SLTLendBox takes a single lender and notes down the loan detail for the lender and borrower.

However, since a single lender equates to a single address. The Exle team composed the smart contract so that it does not limit to only PK addresses, but any guard script addresses too.

This allows them to build a CrowdFund system which allows many users to fund the same loan (with methods of redeeming the token after), without altering the SLTLendBox guard script.

## Pros and Cons

The pro for this system is that a well-designed modular system does not need extra maintenance of an older system when a newer system is introduced. It's a plug and play system, and you don't need to rework everything from scratch.

However, the biggest issue with this type of guard scripts is that it can get complex really quickly. And not only that, more features means that it will introduce more security bugs.

Therefore, if you ever go with this approach, make sure you evaluate the pros and cons before going with it.
