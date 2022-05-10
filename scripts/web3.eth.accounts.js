var Web3 = require('web3');

const { RPC } = require('../constants');

const web3 = new Web3(new Web3.providers.HttpProvider(RPC));

let privateKey = process.env.PRIVATE_KEY;
let password = 'xyz1234!!!';

const createAccounts = () => {
  console.log('Create an account: ', web3.eth.accounts.create());
  console.log(
    'Create an account with entropy',
    web3.eth.accounts.create(
      '2435@#@#@±±±±!!!!678543213456764321§34567543213456785432134567'
    )
  );

  console.log(
    'Create an account with a Private key: ',
    web3.eth.accounts.privateKeyToAccount(privateKey)
  );
};

const signAndRecoverMessage = () => {
  let signedMessage = web3.eth.accounts.sign('Text', privateKey);
  console.log('Sign a message: ', signedMessage);

  let recoveredMessage = web3.eth.accounts.recover(signedMessage);

  console.log('Get address using Recover method: ', recoveredMessage);
};

const encryptAndDecrypt = () => {
  let encryptedKey = web3.eth.accounts.encrypt(privateKey, password);
  console.log('Encrypted Key: ', encryptedKey);

  let decryptedKey = web3.eth.accounts.decrypt(encryptedKey, password);
  console.log('Decrypted Key: ', decryptedKey);
};

const wallets = () => {
  console.log(
    'Creating a wallet with 1 account: ',
    web3.eth.accounts.wallet.create(1)
  );

  console.log(
    'Adding another account using private key: ',
    web3.eth.accounts.wallet.add(privateKey)
  );

  console.log(
    'Removing an account from wallet: ',
    web3.eth.accounts.wallet.remove(process.env.FROM_ADDRESS)
  );

  let encryptedWallet = web3.eth.accounts.wallet.encrypt(password);

  console.log('Encrypted Wallet: ', encryptedWallet);

  let decryptedWallet = web3.eth.accounts.wallet.decrypt(
    encryptedWallet,
    password
  );

  console.log('Decrypted Wallet: ', decryptedWallet);

  console.log('Clearing the wallet: ', web3.eth.accounts.wallet.clear());
};

module.exports = {
  createAccounts,
  signAndRecoverMessage,
  encryptAndDecrypt,
  wallets
};
