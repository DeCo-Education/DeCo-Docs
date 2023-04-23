---
id: registers-guardscripts-ergoscript
title: Lesson 2. Knowledge - Registers, GuardScripts, Ergoscript
sidebar_position: 1
---

# Lesson 2: Knowledge - Registers, GuardScripts, Ergoscript

```text title="Completion Status"
Version: 1st Version
```

## What are Registers

A register is a storage slot associated with a box (also known as an unspent transaction output or UTXO). Each box can have up to 9 registers, which are used to store additional information or metadata about the box.

Registers can hold various types of information, such as tokens, metadata, and other data relevant to the use case of the box. However, the first 4 registers are set to hold specific information regarding the boxes.

Below is a table showing what each registers hold. Similar to computer science rules, we start counting from 0 rather than 1.

| Register | Value                             |
| -------- | --------------------------------- |
| R0       | Value (in nanoErgs)               |
| R1       | Guard script (aka Smart Contract) |
| R2       | Assets (tokens)                   |
| R3       | Creation Info                     |
| R4       | Available                         |
| R5       | Available                         |
| R6       | Available                         |
| R7       | Available                         |
| R8       | Available                         |
| R9       | Available                         |

The available registers starting from R4 can be used to store additional data or metadata about the box. For example, a box might have a string stored in one of its registers indicating the purpose or intended use of the box.

Registers in the Ergo blockchain are designed to be flexible and extensible. They can be used to store a wide variety of information, depending on the specific needs of the application or use case. And because they are associated with individual boxes, they can be used to store information in a decentralized and trustless way.

### What kind of data can be stored in Registers?

Here's a list of values that can be stored in registers of boxes.

1. Boolean
2. Integer
3. Long
4. Byte
5. Short
6. BigInt
7. Coll[Type]

Coll is a special a data structure that is similar to an array. It allows you to store a collection of types, for example, Coll[Byte]. Not only that, it also allows you to store Coll's of Colls, thus allowing the power to store Coll[Coll[Byte]], which are equivalent to a collection of strings.

### Limitations of Registers and Boxes

At the end of the day, these boxes are stored as data. Similar to data in every computer, these data are converted to bytes. The limitation of a box in terms of data store is the size of storage it has. Each box can only have a maximum of 4KB in it. And there is a minimum value of Erg that the box has to have to be able to store that small but large amount of data.

The minimum for each box is for it to have 1,000,000 NanoErgs (Note that this is NanoErgs, not ergs. 1 Erg is 1,000,000,000 NanoErgs).

Whereas the minimum cost for the maximum data to be stored (4KB) is based on the formula:

```text title="Maximum Box Cost"
minValuePerByte = 360
4KB = 4 * 1024
Maximum Box Cost = (4KB) * minValuePerByte = 1,474,560
```

## Guard Scripts

A guard script is a type of scripting language that is executed by the Ergo Virtual Machine (EVM) when a transaction attempts to spend the box associated with the script. The guard script specifies the conditions under which the transaction can be executed, and if those conditions are not met, the transaction will be rejected by the EVM.

As shown in the table above, these scripts are stored as bytes in R1 of a box. They are written in a language called ErgoScripts and it compiles down to an address which determines the boxes of the address.

What this means is that for a scripts that has the exact same logic for proving its spending condition, it will have the exact same address. For example:

```text title="Adam script"
{
    sigmaProp(adamsPK)
}
```

```text title="Excessive Adam Script"
{
    val onePlusOne = 1 + 1
    sigmaProp(adamsPK)
}
```

In the two code above, it will compile to the same address, which is Adam's address. The reason being, though there are extra lines in "Excessive Adam's Script", that line is not evaluated at the end (Evaluation is done within sigmaProp). The only evaluation that is done is adamsPK, therefore both scripts results into the same address value.

This specific guard script that is presented above states that the box can only be spent by Adam (or to be exact, the person with Adam's Private Key that signs it).

There are many kind of guard scripts that can be written, and the complexities are based on the complexity of the logic within the script it self. However, some quick examples of some common guard scripts are:

1. PK (Public Key) Scripts - These scripts require the signature of a specific public key to spend the contents of the box. This is a basic form of security that ensures that only the owner of the private key associated with the public key can spend the box.

2. Threshold Scripts - These scripts require a certain number of signatures from a group of specified public keys to spend the contents of the box. This allows for more complex security arrangements, such as requiring multiple people to sign off on a transaction.

3. Time Lock Scripts - These scripts enforce a time-based lock on the box, requiring that a certain amount of time pass before the box can be spent. This can be useful for applications such as escrow services, where funds are held in a box until a certain condition is met or a certain amount of time has passed.

4. Multisig Scripts - These scripts combine the security features of PK and threshold scripts, allowing for multiple signatures from a group of specified public keys to spend the contents of the box.

## What is ErgoScript?

ErgoScript is a programming language that is used to create smart contracts on the Ergo blockchain. It is a Turing-complete language, meaning that it can express any computation that can be computed by a universal Turing machine.

ErgoScript is a highly expressive language that allows for the creation of complex smart contracts with a wide range of functionality. It supports a variety of data types, including integers, booleans, and strings, as well as more advanced types such as lists and maps.

In this article, we will not go too deep into ErgoScript. However, the article [Trail 2 - Ergo Syntax](../trail2-ergo-coding/1-t-ergo-syntax.md) will dive a lot deeper into the details of ErgoScript. But here's a quick example:

```text title="Height 945678"
{
    val isHeight945678 = CONTEXT.HEIGHT == 945678
    sigmaProp(isHeight945678)
}
```

### A great article to facilitate understanding:

1. [Ergo Box Modeling](https://medium.com/@keitodot/ergo-box-m-f58f444e00d5)
2. [ErgoValue Type Test](https://github.com/ergoplatform/ergo-appkit/blob/develop/appkit/src/test/scala/org/ergoplatform/appkit/ErgoValueTest.java)
