var Web3 = require('web3');
const { RPC } = require('./constants');

const web3 = new Web3(new Web3.providers.HttpProvider(RPC));

const signTransaction = async (tx, myContract, contractGas = false) => {
  let account = process.env.FROM_ADDRESS;
  let privateKey = process.env.PRIVATE_KEY;

  const gas = await tx.estimateGas({ from: account });
  const gasPrice = await web3.eth.getGasPrice();
  const data = tx.encodeABI();
  const nonce = await web3.eth.getTransactionCount(account);

  var options = {
    data,
    gas,
    gasPrice,
    nonce,
    chainId: 4002
  };

  if (contractGas) {
    options.to = myContract.options.address;
  }

  const signedTx = await web3.eth.accounts.signTransaction(options, privateKey);
  const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
  console.log(`Transaction hash: ${receipt.transactionHash}`);
};

module.exports = { signTransaction };
