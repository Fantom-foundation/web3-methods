var Web3 = require('web3');
const EthUtil = require('ethereumjs-util');
const Tx = require('ethereumjs-tx').Transaction;
const Common = require('ethereumjs-common').default;

const { RPC, TXHASH, ABI, CONTRACT_ADDRESS, TOPIC0 } = require('../constants');

var web3 = new Web3(RPC);

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
};

const batchRequest = async () => {
  var myContract = new web3.eth.Contract(ABI, CONTRACT_ADDRESS);
  var batch = await new web3.BatchRequest();
  batch.add(
    web3.eth.getBalance.request(
      process.env.FROM_ADDRESS,
      'latest',
      (error, result) => {
        if (error) console.error(error);
        else console.log('Result: ', web3.utils.fromWei(result, 'ether'));
      }
    )
  );
  batch.add(
    myContract.methods
      .greet()
      .call.request({ from: process.env.FROM_ADDRESS }, (error, result) => {
        if (error) console.error(error);
        else console.log('Result: ', result);
      })
  );
  batch.execute();
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

module.exports = { basic, batchRequest, getPastLogs };
