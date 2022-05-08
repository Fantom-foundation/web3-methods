var Web3 = require('web3');
const { RPC, ABI, CONTRACT_ADDRESS } = require('../constants');

const web3 = new Web3(new Web3.providers.HttpProvider(RPC));

var myContract = new web3.eth.Contract(ABI, CONTRACT_ADDRESS);

const firstMessage = 'Hello, Hardhat!';
let messageToUpdate = 'Hello, Hardhat again!';

const web3Contract = async (privateKey, address) => {
  let message = await myContract.methods.greet().call();
  console.log('Using method.call() to get value: ', message);

  messageToUpdate =
    message === firstMessage ? 'Hello, Hardhat again!' : firstMessage;

  console.log('Using method.send() to update the message');

  const tx = await myContract.methods.setGreeting(messageToUpdate);
  const gas = await tx.estimateGas({ from: address });
  const gasPrice = await web3.eth.getGasPrice();
  const data = tx.encodeABI();
  const nonce = await web3.eth.getTransactionCount(address);

  const signedTx = await web3.eth.accounts.signTransaction(
    {
      to: myContract.options.address,
      data,
      gas,
      gasPrice,
      nonce,
      chainId: 4002
    },
    privateKey
  );

  const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
  console.log(`Transaction hash: ${receipt.transactionHash}`);
  console.log(`New data value: ${await myContract.methods.greet().call()}`);
};

module.exports = { web3Contract };
