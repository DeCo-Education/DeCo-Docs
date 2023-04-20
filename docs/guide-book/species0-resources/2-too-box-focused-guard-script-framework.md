---
id: too-box-focused-guard-script-framework
title: Box Focused Guard Script Framework
sidebar_position: 1
---

# Box Focused Guard Script Framework

Guard scripts determines whether a box is spendable in a transaction. This design focuses on the component within a box and allow the components written down to guide the ErgoScript implementation of the Guard Script.

1. List out
   1. Value
   2. Tokens
   3. Registers
   4. Actions

## Framework + Example

**Value**: 0.1 Ergs

**Token List:**

1. Sample NFT Name
   1. Identification NFT - 1

**Registers**:

**R4** → Personal Details

1. DataType - Coll[Coll[Byte]]
2. Data List
   1. First Name
   2. Last Name
   3. Address

**R5** → Age, HOB and Grades

1. DataType - Coll[Long]
2. Data List
   1. Age
   2. HOB (Height of Birth)
   3. Math Score

**R6** → Joined DeCo

1. DataType - Boolean
   1. Took DeCo Layman Course

**R7** → Records

1. Last Recorded Height

**Actions List:**

1. Grows Older Every Year

   INPUTS Position: 0

   Trigger Condition:

   1. When all other conditions fail (an else condition)

   Contract Conditions:

   1. Condition 1: Everything stays the same other than the age
   2. Condition 2: Can only increment by _n_, where n = ((Current Height - HOB)/(Height in a year)) - Age
   3. Condition 3: Self reproducing box in OUTPUTS(0)

2. Math Score changed after tests

   INPUTS Position: 0

   Trigger Condition:

   1. Test Score Identification Token in INPUTS (1)

   Contract Conditions:

   1. Condition 1: Everything stays the same other than the Math Score
   2. Condition 2: Math score is from Test Score Box R4[Long]
   3. Condition 3: Self reproducing box in OUTPUTS(0)

3. Decided to take DeCo Layman Course

   INPUTS Position: 0

   Trigger Condition:

   1. If DeCo award NFT is in INPUTS(1)

   Contract Conditions:

   1. Condition 1: Math Score >= 98
   2. Condition 3: Self reproducing box in OUTPUTS(0)

**Box Conditions:**

Persisted data

1. Identification Token
2. Personal details

Other Conditions:

1. Records updated for every Tx

## Building the ErgoScript

After forming the framework. Take the actions and refer to its components to design the ErgoScript for the Guard Script.

**1st**, Fulfill the Box Conditions

```scala
{
	val persistIdentificationToken = allOf(Coll(
		// ._1 == Id, ._2 == quantity
		SELF._tokens(0)._1 == OUTPUTS(0)._tokens(0)._1,
		SELF._tokens(0)._2 == OUTPUTS(0)._tokens(0)._2
	))

	val persistPersonalDetails =
		SELF.R4[Coll[Coll[Byte]] == OUTPUTS(0).R4[Coll[Coll[Byte]]

	val recordsUpdated =
		OUTPUTS(0).R7 == HEIGHT

	val boxConditionsCheck = allOf(Coll(
		persistIdentificationToken,
		persistPersonalDetails,
		recordsUpdated))

	val ageNHOBCheck = allOf(Coll(
		SELF.R5[Coll[Long]].get(0) == OUTPUTS(0).R5[Coll[Long]].get(0),
		SELF.R5[Coll[Long]].get(1) == OUTPUTS(0).R5[Coll[Long]].get(1)
	))

	val mathScoreCheck =
		SELF.R5[Coll[Long]].get(2) == OUTPUTS(0).R5[Coll[Long]].get(2)

	val deCoAwardCheck =
		SELF.R6[Boolean].get == OUTPUTS(0).R5[Boolean].get

	if (INPUTS(1)._tokens(0)._1 == deCoNFTAwardToken) {
		sigmaProp(allOf(Coll(
			boxConditionsCheck,
			ageNHOBCheck,
			SELF.R5[Coll[Long]].get(2) >= 98
		)))
	} else if (INPUTS(1)._tokens(0)._1 ==  testScoreIdentification) {
		sigmaProp(allOf(Coll(
			boxConditionCheck,
			ageNHOBCheck,
			OUTPUTS(0).R5[Coll[Long]].get(2) == INPUTS(1).R4[Long].get
		))
	} else {
		val maxAge = (HEIGHT - SELF.R5[Coll[Long]].get(1))/(heightInAYear)
		val ageNotExceedMaxAge = OUTPUTS(0).R5[Coll[Long]].get(0) <= maxAge

		sigmaProp(allOf(Coll(
			boxConditionsCheck,
			deCoAwardCheck,
			mathScoreCheck,
			ageNotExceedMaxAge
		))
	}
}
```

## Blank Guard Script Framework

**Value**: {insert} Ergs

**Token List:**

1. Sample NFT Name
   1. Identification NFT - 1

**Registers**:

**R4** →

1. DataType -
2. Data List
   1.

**R5** →

1. DataType -
2. Data List
   1.

**R6** →

1. DataType -
   1.

**R7** →

1. DataType -

**Actions List:**

1. {Action}

   _INPUTS Position_:

   _OUTPUTS Position_:

   _Trigger Condition_:

   1.

   _Contract Conditions_:

   1. Condition 1:

2. {Action}

   _INPUTS Position_:

   _OUTPUTS Position_:

   _Trigger Condition_:

   1.

   _Contract Conditions_:

   1. Condition 1:

3. {Action}

   _INPUTS Position_:

   _OUTPUTS Position_:

   _Trigger Condition_:

   1.

   _Contract Conditions_:

   1. Condition 1:

**Box Conditions:**

_Persisted data_

1.
2.

_Other Conditions_

## PinLock Contract Guard Script Framework

**Value**: X (Depends on what the user put in) Ergs

**Registers**:

**R4** → Pin of the box (Hashed)

1. DataType - Coll[Byte]

**R5** → TimeFrame for Pin to be changed (If block height is Larger than this height, then pin cannot be changed)

1. DataType - Long

**Actions List:**

1. **Box can be spent only if the Output box pin is the same as the current box**

   _INPUTS Position_: 0

   Trigger Conditions:

   1. Proposition Byte is not the same → Pin Lock is being spent to become a user box
      1. Therefore, the propositionBytes is not the same

   _Contract Conditions_:

   1. Condition 1: R4 of self (Hashed Pin) == Hashed R4 of OUTPUTS(0)

2. **Pin of the box can be changed within a certain height (timeframe)**

   _INPUTS Position_: 0

   Triggering Condition:

   Anything else other than 1

   _Contract Conditions_:

   1. Condition 1: Block Height cannot be larger than R5’s Height
      1. Code: _HEIGHT < SELF.R5[Long].get_
   2. Condition 2: Pin has to be different
      1. Comparing against OUTPUTS(0) → Newly Generated PinLock Box
      2. Code: _SELF.R4[Coll[Byte]].get ≠ OUTPUTS(0).R4[Coll[Byte]].get_

**Box Conditions:**

_Persisted data_

Pin Change Expiry Height cannot be changed

1. Comparing against OUTPUTS(0) → Newly Generated PinLock Box
2. Code: SELF.R5[Long].get == OUTPUTS(0).R5[Long].get

```scala
{

		// Triggering condition for Scenario 1
		val isPinLockBoxRedeemed = SELF.propositionBytes != OUTPUTS(0).propositionBytes

		if (isPinLockBoxRedeemed) {
			// Redeem PinLock Box
			val isPinCorrect = SELF.R4[Coll[Byte]].get == black2b256(OUTPUTS(0).R4[Coll[Byte]].get)
			sigmaProp(isPinCorrect)
		} else {
			// Change Pin
			val isExpiryHeightSame = SELF.R5[Long].get == OUTPUTS(0).R5[Long].get
			val isExpiryTimePassed = HEIGHT < SELF.R5[Long.get
			val isPinDifferent = SELF.R4[Coll[Byte]].get != OUTPUTS(0).R4[Coll[Byte]].get

			sigmaProp(allOf(Coll(
				isExpiryHeightSame,
				isExpiryTimePassed,
				isPinDifferent)))
		}
}
```
