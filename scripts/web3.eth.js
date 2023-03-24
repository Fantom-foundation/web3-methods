var Web3 = require('web3');
const EthUtil = require('ethereumjs-util');
const Tx = require('ethereumjs-tx').Transaction;
const Common = require('ethereumjs-common').default;
const ethers = require('ethers');

const {
  TESTNET_RPC,
  TXHASH,
  CONTRACT_ADDRESS,
  TOPIC0
} = require('../constants');

var web3 = new Web3(TESTNET_RPC);

const basic = async () => {
  let address = process.env.FROM_ADDRESS;

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

  let balance = await web3.eth.getBalance(address);

  console.log(`Get balance of ${address} in Wei: `, balance);

  console.log(
    `Get balance of ${address} in Ether: `,
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

  console.log('Get chainId: ', await web3.eth.getChainId());

  console.log('Get block header timeout: ', web3.eth.blockHeaderTimeout);

  console.log(
    'Get transactionPollingTimeout: ',
    web3.eth.transactionPollingTimeout
  );

  console.log(
    'Get transactionPollingInterval: ',
    web3.eth.transactionPollingInterval
  );

  const provider = new ethers.providers.JsonRpcProvider(TESTNET_RPC);

  const blockData = await provider.getBlock(
    '0x0000483c00001c179537efc3f26a1f6c9111831b8cf8c30a13d9cec80bdbab55',
    false
  );
  console.log(blockData);
};

const getPastLogs = async () => {
  web3.eth
    .getPastLogs({
      fromBlock: 8958578,
      address: CONTRACT_ADDRESS,
      topics: [TOPIC0]
    })
    .then(console.log);
};

module.exports = { basic, getPastLogs };
