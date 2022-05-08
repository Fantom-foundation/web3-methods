require('dotenv').config();

const { web3Eth, sendTransaction } = require('./scripts/web3.eth');
const { web3Contract } = require('./scripts/web3.eth.contract');

// Web3.eth functions
web3Eth(process.env.FROM_ADDRESS);

// sendTransaction(
//   process.env.PRIVATE_KEY,
//   process.env.FROM_ADDRESS,
//   process.env.TO_ADDRESS
// );

// Web3.eth.contract functions
web3Contract(process.env.PRIVATE_KEY, process.env.FROM_ADDRESS);
