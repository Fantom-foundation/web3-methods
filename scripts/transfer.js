var Web3 = require('web3');

const { MAINNET_RPC } = require('../constants');

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
    value: 1000000000000000000,
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
        console.log('🎉 The hash of your transaction is: ', hash);
      } else {
        console.log(
          '❗Something went wrong while submitting your transaction:',
          error
        );
      }
    }
  );
};

module.exports = { transfer };
