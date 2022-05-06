var Web3 = require('web3');
const Tx = require('ethereumjs-tx').Transaction;
const { RPC, ADDRESS, TXHASH } = require('../constants');

var web3 = new Web3(RPC);

const web3Eth = async () => {
  let blockNumber = await web3.eth.getBlockNumber();
  console.log('Get latest block: ', blockNumber);

  console.log(
    'Get Transaction block timeout: ',
    web3.eth.transactionBlockTimeout
  );

  console.log(
    'Get Transaction confirmation blocks: ',
    web3.eth.transactionConfirmationBlocks
  );

  let balance = await web3.eth.getBalance(ADDRESS);

  console.log(`Get balance of ${ADDRESS} in Wei: `, balance);
  console.log(
    `Get balance of ${ADDRESS} in Ether: `,
    web3.utils.fromWei(balance, 'ether')
  );

  console.log(
    'Get Transaction details: ',
    await web3.eth.getTransaction(TXHASH)
  );
  console.log(
    'Get Transaction Receipt: ',
    await web3.eth.getTransactionReceipt(TXHASH)
  );
};

module.exports = { web3Eth };
