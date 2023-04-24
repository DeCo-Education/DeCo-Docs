"use strict";(self.webpackChunkde_co_docs=self.webpackChunkde_co_docs||[]).push([[4655],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return h}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),h=r,g=u["".concat(l,".").concat(h)]||u[h]||d[h]||o;return a?n.createElement(g,i(i({ref:t},c),{},{components:a})):n.createElement(g,i({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4538:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],s={id:"k-ergo-appkit-basics",title:"Lesson 2. Knowledge - Ergo Appkit Basics",sidebar_position:3},l="Lesson 2: Knowledge - Ergo Appkit Basics",p={unversionedId:"into-the-woods/trail2-ergo-coding/k-ergo-appkit-basics",id:"into-the-woods/trail2-ergo-coding/k-ergo-appkit-basics",title:"Lesson 2. Knowledge - Ergo Appkit Basics",description:"Ergo-Appkit is a software development kit (SDK) created by the Ergo Platform team to make it easier for developers to build decentralized applications (dApps) on the Ergo blockchain. It provides a set of libraries and tools that simplify the process of creating and interacting with smart contracts and transactions on the Ergo blockchain.",source:"@site/docs/into-the-woods/trail2-ergo-coding/4-k-ergo-appkit-basics.md",sourceDirName:"into-the-woods/trail2-ergo-coding",slug:"/into-the-woods/trail2-ergo-coding/k-ergo-appkit-basics",permalink:"/deco-docs/docs/into-the-woods/trail2-ergo-coding/k-ergo-appkit-basics",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"k-ergo-appkit-basics",title:"Lesson 2. Knowledge - Ergo Appkit Basics",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"WIP Lesson 1.1. Knowledge - Development Env Set Up (JavaScript)",permalink:"/deco-docs/docs/into-the-woods/trail2-ergo-coding/k-development-env-set-up-js"},next:{title:"Lesson 3. Hands-On - Creating Tx via App Kit",permalink:"/deco-docs/docs/into-the-woods/trail2-ergo-coding/ho-creating-tx-via-app-kit"}},c={},d=[{value:"Steps to building a Txs with Ergo",id:"steps-to-building-a-txs-with-ergo",level:2},{value:"1. Instantiate an Address or Smart Contract",id:"1-instantiate-an-address-or-smart-contract",level:3},{value:"2. Retrieve and Create the respective Boxes",id:"2-retrieve-and-create-the-respective-boxes",level:3},{value:"3. Compose the Tx",id:"3-compose-the-tx",level:3},{value:"4. Prove and Sign the Tx",id:"4-prove-and-sign-the-tx",level:3},{value:"5. Send the Tx to the Blockchain",id:"5-send-the-tx-to-the-blockchain",level:3}],u={toc:d};function h(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"lesson-2-knowledge---ergo-appkit-basics"},"Lesson 2: Knowledge - Ergo Appkit Basics"),(0,o.kt)("p",null,"Ergo-Appkit is a software development kit (SDK) created by the Ergo Platform team to make it easier for developers to build decentralized applications (dApps) on the Ergo blockchain. It provides a set of libraries and tools that simplify the process of creating and interacting with smart contracts and transactions on the Ergo blockchain."),(0,o.kt)("p",null,"Ergo-Appkit includes several key features and components that developers can use to build dApps, such as:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A high-level smart contract API that simplifies the process of writing and deploying smart contracts on the Ergo blockchain."),(0,o.kt)("li",{parentName:"ul"},"A set of transaction building tools that make it easy to create complex transactions, including multi-stage transactions and transactions that involve multiple parties."),(0,o.kt)("li",{parentName:"ul"},"A set of data structures and utilities that enable developers to work with Ergo's UTXO model and other key features of the blockchain."),(0,o.kt)("li",{parentName:"ul"},"An integrated development environment (IDE) that streamlines the process of writing, testing, and deploying Ergo dApps."),(0,o.kt)("li",{parentName:"ul"},"A set of example applications and templates that developers can use as a starting point for their own projects.")),(0,o.kt)("p",null,"Ergo-Appkit is designed to make it easier for developers to build high-quality dApps on the Ergo blockchain by providing a range of useful tools and resources. Whether you're a seasoned blockchain developer or just getting started with decentralized applications, Ergo-Appkit is a valuable resource that can help you build powerful, secure, and efficient dApps on the Ergo blockchain."),(0,o.kt)("h2",{id:"steps-to-building-a-txs-with-ergo"},"Steps to building a Txs with Ergo"),(0,o.kt)("p",null,"To build a tx on Ergo requires a few steps. Apps like Nautilus wallet has removed the intricacies of these parts to provide a better User Interface (UI) and User Experience (UX) to improve adoptability. In this article, we will break down these steps to understand what lies behind the red curtains."),(0,o.kt)("p",null,"To steps to creating a tx are:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Instantiate an Address or Smart Contract"),(0,o.kt)("li",{parentName:"ol"},"Retrieve and Create the respective Boxes"),(0,o.kt)("li",{parentName:"ol"},"Compose the Tx"),(0,o.kt)("li",{parentName:"ol"},"Prove and Sign the Tx"),(0,o.kt)("li",{parentName:"ol"},"Send the Tx to the Blockchain")),(0,o.kt)("p",null,"Sounds simple, but let's dive a little deeper."),(0,o.kt)("h3",{id:"1-instantiate-an-address-or-smart-contract"},"1. Instantiate an Address or Smart Contract"),(0,o.kt)("p",null,"A tx consists of sender(s) and receiver(s). As these are all represented by boxes at addresses, we would have to instantiate the address(es) for each sender(s) and the address(es) for each receiver(s)."),(0,o.kt)("p",null,"Though the humanistic term is to use sender(s) and receiver(s). In the developer language, we tend to call it:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Sender(s) -> InputBox(es)"),(0,o.kt)("li",{parentName:"ul"},"Receiver(s) -> OutBox(es)")),(0,o.kt)("p",null,"NOTE: OutBoxes are called OutBox not OutputBox"),(0,o.kt)("p",null,"As mentioned in ",(0,o.kt)("a",{parentName:"p",href:"/deco-docs/docs/into-the-woods/trail1-eutxo-n-nfts/registers-guardscripts-ergoscript"},"GuardScripts Article"),", guard scripts can be hashed into an address. Therefore, we can compose guard scripts and get the address representation of it to"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'Get the "sender" box'),(0,o.kt)("li",{parentName:"ol"},'Compose the "receiver" box')),(0,o.kt)("p",null,"In this part, the Classes from AppKit that are utilized are:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/ergoplatform/ergo-appkit/blob/458c21bf6abed9602f446de8d93349da9f3be8b6/common/src/main/java/org/ergoplatform/appkit/Address.java#L27"},"Address")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/ergoplatform/ergo-appkit/blob/7203ab040fc104bcce571dd91a873d8915b7e42b/common/src/main/java/org/ergoplatform/appkit/ErgoContract.java#L11"},"ErgoContract"))),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'val spenderAddress: Address = Address.create("{Spender\'s Address}")\n\n// OR\n\nval spenderContract: ErgoContract\n')),(0,o.kt)("h3",{id:"2-retrieve-and-create-the-respective-boxes"},"2. Retrieve and Create the respective Boxes"),(0,o.kt)("p",null,"After getting the required address, we will have to retrieve the InputBox(es) that exists on the blockchain so that we can compose the tx."),(0,o.kt)("p",null,"Using these InputBox(es) and the data it holds, we can compose the ncecessary OutBox(es) for the txs."),(0,o.kt)("p",null,"To retrieve these InputBox(es), we utilize what we call a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ergoplatform/ergo-appkit/blob/0ab249364b3694a4167b059f5acfb32d41c45d24/lib-api/src/main/java/org/ergoplatform/appkit/BlockchainDataSource.java#L9"},"BlockchainDataSource")," from a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ergoplatform/ergo-appkit/blob/85f65e616765ff229745939f1e369642f4f54200/lib-api/src/main/java/org/ergoplatform/appkit/BlockchainContext.java#L16"},"BlockchainContext"),". By calling the function ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ergoplatform/ergo-appkit/blob/0ab249364b3694a4167b059f5acfb32d41c45d24/lib-api/src/main/java/org/ergoplatform/appkit/BlockchainDataSource.java#L58"},"getUnspentBoxesFor(Address address, int offset, int limit)"),", we are able to retrieve the unspent boxes at the address that we specified on the previous step."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"val client: ErgoClient\nclient.execute { ctx: BlockchainContext => {\n    val spenderBoxes: List[InputBox] = ctx.getDataSource.getUnspentBoxesFor(spenderAddress, 0, 100)\n}}\n")),(0,o.kt)("p",null,"and to compose OutBox(es), a class called ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ergoplatform/ergo-appkit/blob/e7f49e16fc33c90ab535e8ab3e2dca2751d177c7/lib-api/src/main/java/org/ergoplatform/appkit/OutBoxBuilder.java#L14"},"OutBoxBuilder")," to build the OutBox. This class is in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ergoplatform/ergo-appkit/blob/bad1163c1776fa223719013e6939d6e82c07d30f/lib-api/src/main/java/org/ergoplatform/appkit/UnsignedTransactionBuilder.java#L18"},"UnsignedTransactionBuilder")," of the BlockchainContext. It can be called this way."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"client.execute { ctx: BlockchainContext => {\n    val txB: UnsignedTransactionBuilder = ctx.newTxBuilder()\n    // Create a box of 1 Erg at receiverAddress\n    val outBoxBuilder: OutBoxBuilder = txB.outBoxBuilder().contract(receiverAddress).value(Parameters.OneErg)\n    val outBox: OutBox = outBoxBuilder.build()\n}}\n")),(0,o.kt)("h3",{id:"3-compose-the-tx"},"3. Compose the Tx"),(0,o.kt)("p",null,"After retrieving the InputBox(es) and composing the OutBox(es), we can use these to compose the Unsigned Tx by utilizing the UnsignedTransactionBuilder."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    val unsignedTx: UnsignedTransaction = txB\n        .addInputs(spenderBoxes)\n        .addOutputs(outBox)\n        .sendChangeTo(spenderAddress)\n        .build()\n")),(0,o.kt)("h3",{id:"4-prove-and-sign-the-tx"},"4. Prove and Sign the Tx"),(0,o.kt)("p",null,"For a tx to succeed, each of the InputBox(es) has to be spendable. This means that the condition of the guard script for each boxes has to result to true. For non-user smart contracts, it usually depends on the conditions of the Tx. However, InputBox(es) from a wallet can only be spent if the wallet signs the tx."),(0,o.kt)("p",null,"This is where a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ergoplatform/ergo-appkit/blob/0a769dccc4e6abdbd4b4f7f6023de6059a7198e8/lib-api/src/main/java/org/ergoplatform/appkit/ErgoProver.java#L15"},"ErgoProver")," comes in. An ErgoProver is a class that is derived from the wallet's private key. This allows it to sign the tx that contains the InputBox(es) from its address and allow the Tx to succeed by successfully spending the InputBox(es) that belongs to that address."),(0,o.kt)("p",null,"NOTE: If the box contains guard script that will result to true without a private key signing it, any provers can sign it."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'    val prover: ErgoProver = ctx.newProverBuilder\n        .withMnemonic(\n            SecretString.create("{Wallet Mnemonic}"),\n            SecretString.create("")\n        )\n        // Index of the address, in int\n        .withEip3Secret({addressIndex})\n        .build()\n\n    val signedTx: SignedTransaction = prover.sign(unsignedTx)\n')),(0,o.kt)("h3",{id:"5-send-the-tx-to-the-blockchain"},"5. Send the Tx to the Blockchain"),(0,o.kt)("p",null,"And finally, once we signed the Tx, we can send it to the blockchain with the BlockchainContext."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    ctx.sendTransaction(signedTx)\n")),(0,o.kt)("p",null,"After sending it to the blockchain, the nodes will mine it. If all goes well, the transaction succeeds and you sent your very first transaction."))}h.isMDXComponent=!0}}]);