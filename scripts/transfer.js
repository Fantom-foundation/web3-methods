var Web3 = require('web3');
const ethers = require('ethers');

const { MAINNET_RPC, TESTNET_RPC } = require('../constants');

var web3 = new Web3(MAINNET_RPC);

const transfer = async () => {
  let address = process.env.FROM_ADDRESS;
  let balance = await web3.eth.getBalance(address);

  console.log(`Get balance of ${address} in Wei: `, balance);

  console.log(
    `Get balance of ${address} in Ether: `,
    web3.utils.fromWei(balance, 'ether')
  );

  const gasPrice = await web3.eth.getGasPrice();

  const transaction = {
    to: process.env.TO_ADDRESS,
    value: 100000000000000000,
    gas: 21000,
    gasPrice
  };

  const signedTx = await web3.eth.accounts.signTransaction(
    transaction,
    process.env.PRIVATE_KEY
  );

  web3.eth.sendSignedTransaction(
    signedTx.rawTransaction,
    function (error, hash) {
      if (!error) {
        console.log(`🎉 The hash of your transaction is: https://ftmscan.com/tx/${hash}`);
      } else {
        console.log(
          '❗Something went wrong while submitting your transaction:',
          error
        );
      }
    }
  );
};

const transferWithParams = async (mainnet) => {
  const { FROM_ADDRESS: address, TO_ADDRESS, PRIVATE_KEY } = process.env;
  let RPC, chainId;
  let URL;

  if (mainnet) {
    RPC = MAINNET_RPC;
    chainId = 250;
    URL = 'https://ftmscan.com/tx/';
  } else {
    RPC = TESTNET_RPC;
    chainId = 4002;
    URL = 'https://testnet.ftmscan.com/tx/';
  }

  var testWeb3 = new Web3(RPC);

  var nonceVal = await testWeb3.eth.getTransactionCount(address);

  // Change maxFeePerGas and maxPriorityFeePerGas as per the current gas prices
  var transaction = {
    to: TO_ADDRESS,
    from: address,
    nonce: nonceVal,
    value: testWeb3.utils.toHex(testWeb3.utils.toWei('0.1', 'ether')),
    gas: testWeb3.utils.toHex(21000),
    maxFeePerGas: '0x174876E800', // 100 Gwei 
    maxPriorityFeePerGas: '0xBA43B7400', // 50 Gwei
    chainId
  };

  const signedTx = await testWeb3.eth.accounts.signTransaction(
    transaction,
    PRIVATE_KEY
  );

  testWeb3.eth.sendSignedTransaction(
    signedTx.rawTransaction,
    function (error, hash) {
      if (!error) {
        console.log(`🎉 The hash of your transaction is: ${URL}${hash}`);
      } else {
        console.log(
          '❗Something went wrong while submitting your transaction:',
          error
        );
      }
    }
  );
};

module.exports = { transfer, transferWithParams };
