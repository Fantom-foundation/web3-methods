require('dotenv').config();

const { web3Eth, batchRequest, getPastLogs } = require('./scripts/web3.eth');
const {
  deploy,
  getEvents,
  updateProperties
} = require('./scripts/web3.eth.contract');

// *  Web3.eth functions
web3Eth();
batchRequest();
getPastLogs();

// *  Web3.eth.contract functions
deploy();
updateProperties();
getEvents();
