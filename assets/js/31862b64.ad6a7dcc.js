"use strict";(self.webpackChunkde_co_docs=self.webpackChunkde_co_docs||[]).push([[2416],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return x}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(n),x=o,h=u["".concat(s,".").concat(x)]||u[x]||p[x]||r;return n?a.createElement(h,l(l({ref:t},d),{},{components:n})):a.createElement(h,l({ref:t},d))}));function x(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3123:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return x},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),l=["components"],i={id:"ho-creating-tx-via-app-kit",title:"Lesson 3. Hands-On - Creating Tx via App Kit",sidebar_position:4},s="Lesson 3: Hands-On - Creating Tx via App Kit",c={unversionedId:"into-the-woods/trail2-ergo-coding/ho-creating-tx-via-app-kit",id:"into-the-woods/trail2-ergo-coding/ho-creating-tx-via-app-kit",title:"Lesson 3. Hands-On - Creating Tx via App Kit",description:"We will use this proxy contract and Ergo AppKit to write the off-chain code for the transaction.",source:"@site/docs/into-the-woods/trail2-ergo-coding/5-ho-creating-tx-via-app-kit.md",sourceDirName:"into-the-woods/trail2-ergo-coding",slug:"/into-the-woods/trail2-ergo-coding/ho-creating-tx-via-app-kit",permalink:"/deco-docs/docs/into-the-woods/trail2-ergo-coding/ho-creating-tx-via-app-kit",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"ho-creating-tx-via-app-kit",title:"Lesson 3. Hands-On - Creating Tx via App Kit",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Lesson 2. Knowledge - Ergo Appkit Basics",permalink:"/deco-docs/docs/into-the-woods/trail2-ergo-coding/k-ergo-appkit-basics"},next:{title:"WIP Lesson 4. Hands-On - Your First Token",permalink:"/deco-docs/docs/into-the-woods/trail2-ergo-coding/ho-your-first-token"}},d={},p=[],u={toc:p};function x(e){var t=e.components,n=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"lesson-3-hands-on---creating-tx-via-app-kit"},"Lesson 3: Hands-On - Creating Tx via App Kit"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Completion Status"',title:'"Completion','Status"':!0},"Version: 1st Version\nWritten by: LGD\n")),(0,r.kt)("h1",{id:"recall-the-alcohol-sale-proxy-contract-from-lesson-1-in-ergo-syntax"},"Recall the Alcohol Sale Proxy Contract from Lesson 1 in Ergo Syntax"),(0,r.kt)("p",null,"We will use this proxy contract and Ergo AppKit to write the off-chain code for the transaction."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"{\n    // ====== Alcohol Sale Proxy Contract Example ====== //\n\n    // Hard-coded constants expected at compile time are written in UpperCamelCase.\n\n    // INPUTS:\n    // license          = INPUTS(0)\n    // buyerProxyInputs = INPUTS - INPUTS(0)\n    //\n    // OUTPUTS:\n    // storeBox              = OUTPUTS(0)\n    // provincialSalesTaxBox = OUTPUTS(1)\n    // federalSalesTaxBox    = OUTPUTS(2)\n    // buyerWalletBox        = OUTPUTS(3)\n    // minerFeeBox           = OUTPUTS(4)\n    //\n    // (*) Note:\n    //           1. Mining fee box is always the last box in the set of OUTPUTS of a transaction,\n    //              I am just showing this for clarity, but it will not be accessed in this contract.\n    //           2. If there is any that change remains in the proxy,\n    //                          it is sent back to the buyer wallet.\n\n    // Contract variables\n    val buyerPK: SigmaProp          = PK(buyerPKString)\n    val buyerProxyInputs: Coll[Box] = INPUTS.filter({ (input: Box) => input.propositionBytes == SELF.propositionBytes })\n    val buyerAmount: Long           = buyerProxyInputs.fold(0L)({ (input: Box, acc: Long) => acc + input.value })\n    val provincialSalesTax: Long    = (AlcoholSaleAmount * ProvincialSalesTaxNum) / ProvincialSalesTaxDenom\n    val federalSalesTax: Long       = (AlcoholSaleAmount * FederalSalesTaxNum) / FederalSalesTaxDenom\n    val totalCost: Long             = AlcoholSaleAmount + provincialSalesTax + federalSalesTax + MinerFee\n\n    // Variables associated with the buyer's license\n    val license = INPUTS(0)\n    val id      = license.R4[Coll[Byte]].get\n    val name    = license.R5[Coll[Byte]].get\n    val bDay    = license.R6[Coll[Byte]].get\n    val address = license.R7[Coll[Byte]].get\n    val expDate = license.R8[Coll[Byte]].get\n\n    // Context variables needed for the proxy contract, assuming they are provided correctly\n    val licenseTemplateContractBytes = getVar[Coll[Byte]](0).get\n\n    // Substitute the constants of the license template contract bytes\n    // and create the new contract bytes for the buyer's license\n    val newLicenseContractBytes = {\n\n        // New positions\n        val newPositions_SigmaProp: Coll[Int] = Coll(0)\n        val newPositions_Coll_Byte: Coll[Int] = Coll(1, 2, 3, 4, 5)\n\n        // New constants\n        val newConstants_SigmaProp: Coll[SigmaProp] = Coll(buyerPK)\n        val newConstants_Coll_Byte: Coll[Byte] = Coll(id, name, bDay, address, expDate)\n\n        // New contract bytes with substituted buyer PK\n        val newContractBytes_SigmaProp = substConstants(licenseTemplateContractBytes, newPositions_SigmaProp, newConstants_SigmaProp)\n\n        // New contract bytes with substituted buyer license information\n        val newContractBytes_Coll_Byte = substConstants(newContractBytes_SigmaProp, newPositions_Coll_Byte, newConstants_Coll_Byte)\n        val newContractBytes = newContractBytes_Coll_Byte\n\n        newContractBytes\n    }\n\n    // Check for a valid sale\n    val validSale = {\n\n        // Check for a valid license\n        val validLicense = {\n            allOf(Coll(\n                BuyerLicenseContractBytes == newLicenseContractBytes,\n                license.propositionBytes == newLicenseContractBytes\n            ))\n        }\n\n        // Check for a valid proxy amount\n    val validProxyAmount = {\n        buyerAmount >= totalAmount\n        }\n\n        // Check for a valid store\n        val validStore = {\n            val storeBox = OUTPUTS(0)\n            storeBox.propBytes == StoreBoxPropositionBytes\n        }\n\n        // Check for valid sales taxes\n        val validSalesTaxes = {\n\n            // Check for a valid provincial tax\n            val validProvincialSalesTax = {\n                val provincialSalesTaxBox = OUTPUTS(1)\n                allOf(Coll(\n                    (provincialSalesTaxBox.propositionBytes == ProvincialSalesTaxPK),\n                    (provincialSalesTaxBox.value >= provincialSalesTax)\n                ))\n            }\n\n            // Check for a valid federal tax\n            val validFederalSalesTax = {\n                val federalSalesTaxBox = OUTPUTS(2)\n                allOf(Coll(\n                    (federalSalesTaxBox.propositionBytes == FederalSalesTaxPK),\n                    (federalSalesTaxBox.value >= federalSalesTax)\n                ))\n            }\n\n      // Demand that both sales taxes are valid\n      allOf(Coll(\n        validProvincialSalesTax,\n        validFederalSalesTax\n      ))\n\n        }\n\n        // Check for a valid buyer wallet to return any change\n        val validBuyerWallet = {\n            if (buyerAmount > totalCost) {\n                val buyerWalletBox = OUTPUTS(3)\n                buyerWalletBox.propositionBytes == buyerPK.propBytes\n            } else {\n                true\n            }\n        }\n\n        // Demand that all the conditions are valid\n        allOf(Coll(\n            validLicense,\n            validProxyAmount,\n            validStore,\n            validSalesTaxes,\n            validBuyerWallet\n        ))\n\n    }\n\n    // Check for a valid refund\n    val validRefund = {\n        val refundWalletBox = OUTPUTS(0)\n        allOf(Coll(\n            (refundWalletBox.propositionBytes == buyerPK.propBytes),\n            (refundWalletBox.value >= buyerAmount - MinerFee)\n        ))\n    }\n\n    // Obtain the appropriate sigma proposition\n    sigmaProp(anyOf(Coll(\n        validSale,\n        validRefund\n    )))\n\n}\n")),(0,r.kt)("h1",{id:"assumptions"},"Assumptions"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"We know the PK and mnemonic of the buyer"),(0,r.kt)("li",{parentName:"ol"},"We know the proxy address"),(0,r.kt)("li",{parentName:"ol"},"We know the license address"),(0,r.kt)("li",{parentName:"ol"},"We know the PK of the store"),(0,r.kt)("li",{parentName:"ol"},"We know the provincial and federal government PKs")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Real-world solutions to the assumptions:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Using ErgoPay you could create an unsigned transaction with a QR code that requests as input the user\u2019s PK and outputs a proxy box, guarded at the above contract, and with the funds needed for the sale."),(0,r.kt)("li",{parentName:"ol"},"Again using ErgoPay, another unsigned transaction could be created to request the user for the proxy address and the pay-2-script address of the license box. Internally, you would search for both and verify the information within the license box."),(0,r.kt)("li",{parentName:"ol"},"Alternatively, you could avoid using a proxy contract with ErgoPay and just request the user for their PK and P2S address of the license box, and place the proxy contract logic directly within your ErgoPay backend."),(0,r.kt)("li",{parentName:"ol"},"With a digitial identity solution, instead of the P2S address, it could be some sort of ZK-Proof that the application uses to ensure the validity of the user\u2019s identity. As wallets enable dApp integration in the future, requiring payment with some sort of identity verification may become possible."),(0,r.kt)("li",{parentName:"ol"},"The store and government PKs would in reality be a P2S address proxy contract such that conditions could be placed in order to enforce who was able to spend the box. For example, one could imagine using a threshold signature scheme in these contracts.")),(0,r.kt)("h1",{id:"steps"},"Steps"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create the ErgoClient"),(0,r.kt)("li",{parentName:"ol"},"Create the BlockchainContext"),(0,r.kt)("li",{parentName:"ol"},"Retrieve the transaction Input Boxes",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Retrieve the license box"),(0,r.kt)("li",{parentName:"ol"},"Retrieve the proxy boxes and calculate the sale amount"))),(0,r.kt)("li",{parentName:"ol"},"Calculate the amount for the two sales taxes"),(0,r.kt)("li",{parentName:"ol"},"Create the Context Variables and Extended Inputs"),(0,r.kt)("li",{parentName:"ol"},"Create the Transaction Builder"),(0,r.kt)("li",{parentName:"ol"},"Create the transaction Output Boxes"),(0,r.kt)("li",{parentName:"ol"},"Create the Prover"),(0,r.kt)("li",{parentName:"ol"},"Create the Unsigned Transaction"),(0,r.kt)("li",{parentName:"ol"},"Sign the transaction and retrieve the transaction id")),(0,r.kt)("h1",{id:"alcohol-sale-transaction-appkit-code"},"Alcohol Sale Transaction AppKit Code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"// ====== Alcohol Sale Transaction AppKit Example ====== //\n\n// Constants that we assume to know beforehand are written in UpperCamelCase.\n\n// Imports\nimport org.ergoplatform.appkit._\nimport special.collection.Coll\nimport java.{util => ju}\nimport scala.collection.JavaConverters._\n\n// Step 1: Create the ErgoClient instance\nval ergoClient: ErgoClient = RestApiErgoClient.create(nodeApiUrl, networkType, nodeApiKey, explorerURL)\n\n// Step 2: Create the BlockchainContext instance\nval alcoholSalteTxId: String = ergoClient.execute( (ctx: BlockchainContext) => {\n\n    // Convert the base58 address strings to an Address type\n    val buyerPKAddress: Address             = Address.create(BuyerPKAddressString)\n    val saleProxyContractAddress: Address   = Address.create(SaleProxyContractAddressString)\n    val licenseAddress: Address             = Address.create(LicenseAddressString)\n    val storePKAddres: Addres               = Address.create(StorePKAddress)\n    val provincialSalesTaxPKAddres: Address = Address.create(ProvincialSalesTaxPKString)\n    val federalSalesTaxPKAddress: Address   = Address.create(FederalSalesTaxPKString)\n\n    // Step 3: Retrieve the license box\n    val licenseBox: InputBox = ctx.getUnspentBoxesFor(licenseAddress, 0, 1)(0)\n\n    // Step 4: Retrieve the proxy boxes - max of 5 at a time, could be set to more\n    val proxyBoxes: List[InputBox] = ctx.getUnspentBoxesFor(saleProxyContractAddress, 0, 5).asScala.toList\n    val buyerAmount: Long = proxyBoxes.foldLeft(OL)((acc: Long, proxyBox: Long) => acc + proxyBox.getValue())\n\n    // Step 5: Calculate the amount for the two sales taxes\n    val provincialSalesTaxAmount: Long = ProvincialSalesTaxNum * AlocholSaleAmount / ProvincialSaesTaxDenom\n    val federalSalesTaxAmount: Long = FederalSalesTaxNum * AlcoholSaleAmount / FederalSalesTaxDenom\n\n    // Step 6: Create the Context Variables and Extended Inputs\n    val licenseErgoTreeBytes: ErgoValue[Coll[Byte]] = ErgoValue.of(licenseBox.getErgoTree().bytes)\n    val cVar0_licensePropBytes: ContextVar = ContextVar.of(0.toByte, licenseErgoTreeBytes)\n    val extendedProxyInputBoxes: List[InputBox] = proxyBoxes.map(proxyBox => proxyBox.withContextVars(cVar0_licensePropBytes))\n    val extendedInputs: ju.List[InputBox] = seqAsJavaList(extendedProxyInputBoxes)\n\n    // Step 7: Create the tx builder\n    val txBuilder: UnsignedTransactionBuilder = ctx.newTxBuilder()\n\n    // Step 8: Create the tx output boxes\n    val storeBox: OutBox = txBuilder.outBoxBuilder()\n        .value(AlcoholSaleAmount)\n        .contract(ctx.newContract(storePKAddress.getErgoAddress().script\n        .build();\n\n    val provincialSalesTaxBox: OutBox = txBuilder.outBoxBuilder()\n        .value(provincialSalesTaxAmount)\n        .contract(ctx.newContract(provincialSalesTaxPKAddress.getErgoAddress().script)\n        .build();\n\n    val federalSalesTaxBox: OutBox = txBuilder.outBoxBuilder()\n        .value(federalSalesTaxAmount)\n        .contract(ctx.newContract(federalSalesTaxPKAddress.getErgoAddress))\n        .build();\n\n    // Step 9: Create the prover\n    val prover: ErgoProver = ctx.newProverBuilder()\n        .withMnemonic(\n            SecretString.create(BuyerMnemonic),\n            SecretString.empty()\n        )\n        .build();\n\n    // Step 10: Create the unsigned transaction\n    val unsignedAlcoholSaleTx: UnsignedTransaction = txBuilder.boxesToSpend(extendedInputs)\n        .outputs(storeBox, provincialSalesTaxBox, federalSalesTaxBox)\n        .fee(MinerFee)\n        .sendChangeTo(buyerPKAddress.getErgoAddress)\n        .build();\n\n    // Step 11: Sign the transaction and retrieve the tx id\n    val signedAlcoholSaleTx: SignedTransaction = prover.sign(unsignedAlcoholSaleTx)\n    val alcoholSaleTxId: String = ctx.sendTransaction(signedAlcoholSaleTx)\n    alcoholSaleTxId\n\n})\n")),(0,r.kt)("h1",{id:"refund-transaction"},"Refund Transaction"),(0,r.kt)("p",null,"The refund transaction follows the similar steps from the sale transaction, except a refund box is created as an output box, with the buyer\u2019s PK as the contract script."),(0,r.kt)("p",null,"A change address must also be provided, but this will just be the buyer\u2019s PK as well."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Cabin Sessions"',title:'"Cabin','Sessions"':!0},"We went through some examples on how to write the appkit code from looking at the ErgoScript for the Alcohol Sale Proxy Contract.\n\nWith your cabin crew, discuss and work on writing the code for the refund transaction.\n")))}x.isMDXComponent=!0}}]);