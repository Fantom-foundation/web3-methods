var Web3 = require('web3');
const { RPC } = require('../constants');

const web3 = new Web3(new Web3.providers.HttpProvider(RPC));

let IBAN = process.env.IBAN;

const web3Iban = async () => {
  let ibanAddress = web3.eth.Iban.toAddress(IBAN);
  console.log('Generating an address using IBAN: ', ibanAddress);

  console.log(
    'Converting an address to IBAN: ',
    web3.eth.Iban.toIban(ibanAddress)
  );

  let ibanInstance = new web3.eth.Iban(ibanAddress);
  console.log('Getting an IBAN Instance: ', ibanInstance);
};

module.exports = { web3Iban };
