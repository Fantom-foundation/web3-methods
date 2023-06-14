# Web3-methods

This repository contains examples of web3 methods that can be used on Fantom.
Fantom is an EVM-compatible chain secured by the Lachesis consensus algorithm.

The methods can be categorised into:
* ABI
* Accounts
* Common Methods
* Contract
* IBAN
* Subscribe
* Utils

#### ABI
The web3.eth.abi functions let you encode and decode parameters to ABI.

#### Accounts
The web3.eth.accounts package contains functions to generate wallet accounts and sign transactions and data

### Common Methods
The main package web3.eth contains simple API references that can help get certain information about the connected blockchain.

#### Contract
The web3.eth.contract package makes it easy to interact with smart contracts on the blockchain. When you create a new contract object you give it the json interface of the respective smart contract and web3 will auto convert all calls into low level ABI calls over RPC for you. This allows you to interact with smart contracts as if they were JavaScript objects.

#### IBAN
The web3.eth.Iban function converts wallet addresses from and to IBAN and BBAN.

#### Subscribe
The web3.eth.subscribe function lets you subscribe to specific events in the blockchain.

#### Utils
This package provides utility functions for Blockchain dapps and other web3.js packages.


## Build

### Add .env file
```
FROM_ADDRESS=
PRIVATE_KEY = 
TO_ADDRESS=
IBAN=
```

```shell
npm install
```

## Run
```
node app.js
```
