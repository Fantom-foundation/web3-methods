require('dotenv').config();

const { basic, getPastLogs } = require('./scripts/web3.eth');
const { gasPrices } = require('./scripts/gasPrice');
const { transfer } = require('./scripts/transfer');
const { web3ABI } = require('./scripts/web3.eth.abi');
const {
  createAccounts,
  signAndRecoverMessage,
  encryptAndDecrypt,
  wallets
} = require('./scripts/web3.eth.accounts');
const {
  deploy,
  getEvents,
  updateProperties,
  batchRequest
} = require('./scripts/web3.eth.contract');
const { web3Iban } = require('./scripts/web3.eth.iban');
const { web3Utils } = require('./scripts/web3.eth.utils');
const { web3NetGetId } = require('./scripts/web3.eth.net');

// ! Use one function at a time

// * Gas Price Data
gasPrices();
/*
// * Transfer
transfer();

// * Web3.eth functions
basic();
getPastLogs();

// * Web3.eth.contract functions
deploy();
updateProperties();
getEvents();
batchRequest();

// * Web3.eth.account functions
createAccounts();
signAndRecoverMessage();
encryptAndDecrypt();
wallets();

// * Web3.eth.personal functions
web3Iban();

// * Web3.eth.abi functions
web3ABI();

// * Web3.eth.util functions
web3Utils();

// *Web3.eth.net functions
web3NetGetId();
*/