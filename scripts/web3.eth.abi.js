var Web3 = require('web3');

const { RPC } = require('../constants');

const web3 = new Web3(new Web3.providers.HttpProvider(RPC));

const web3ABI = async () => {
  console.log(
    'Encoding a method (setGreeting): ',
    web3.eth.abi.encodeFunctionSignature('setGreeting(string)')
  );

  console.log(
    'Encoding an event (UpdateGreeting): ',
    web3.eth.abi.encodeEventSignature('UpdateGreeting(string)')
  );

  console.log(
    'Encoding a string parameter: ',
    web3.eth.abi.encodeParameter('string', 'Hello')
  );

  console.log(
    'Decoding a string parameter: ',
    web3.eth.abi.decodeParameter(
      'string',
      '0x0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000548656c6c6f000000000000000000000000000000000000000000000000000000'
    )
  );

  console.log(
    'Encoding multiple parameters: ',
    web3.eth.abi.encodeParameters(
      ['uint256', 'string'],
      ['2345675643', 'Hello!']
    )
  );
};

module.exports = { web3ABI };
