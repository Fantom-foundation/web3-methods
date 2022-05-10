require('dotenv').config();

const { basic, batchRequest, getPastLogs } = require('./scripts/web3.eth');
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
