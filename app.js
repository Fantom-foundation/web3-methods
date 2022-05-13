require('dotenv').config();

const { basic, batchRequest, getPastLogs } = require('./scripts/web3.eth');
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
  updateProperties
} = require('./scripts/web3.eth.contract');
const { web3Iban } = require('./scripts/web3.eth.iban');
const { web3Utils } = require('./scripts/web3.eth.utils');

// * Web3.eth functions
basic();
batchRequest();
getPastLogs();

// * Web3.eth.contract functions
deploy();
updateProperties();
getEvents();

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
