var Web3 = require('web3');

const { RPC } = require('../constants');

const web3 = new Web3(new Web3.providers.HttpProvider(RPC));

var BN = web3.utils.BN;

const web3Utils = () => {
  console.log('web3.utils.randomHex(32): ', web3.utils.randomHex(32));
  console.log('new BN(1234): ', new BN(1234).toString());

  var number = new BN(10);
  console.log('web3.utils.isBN(number): ', web3.utils.isBN(number));

  console.log('web3.utils.sha3(234): ', web3.utils.sha3('234'));
  console.log('web3.utils.soliditySha3(234): ', web3.utils.soliditySha3('234'));
  console.log('web3.utils.isHex(0xc1912): ', web3.utils.isHex('0xc1912'));

  console.log(
    'web3.utils.isAddress(0xc1912fee45d61c87cc5ea59dae31190fffff232d): ',
    web3.utils.isAddress('0xc1912fee45d61c87cc5ea59dae31190fffff232d')
  );

  console.log(
    'web3.utils.toChecksumAddress(0xc1912fee45d61c87cc5ea59dae31190fffff232d): ',
    web3.utils.toChecksumAddress('0xc1912fee45d61c87cc5ea59dae31190fffff232d')
  );
  console.log(
    'web3.utils.checkAddressChecksum(0xc1912fEE45d61C87Cc5EA59DaE31190FFFFf232d): ',
    web3.utils.checkAddressChecksum(
      '0xc1912fEE45d61C87Cc5EA59DaE31190FFFFf232d'
    )
  );

  console.log('web3.utils.toBN(1234): ', web3.utils.toBN(1234).toString());
  console.log(
    'web3.utils.hexToNumberString(0xea): ',
    web3.utils.hexToNumberString('0xea')
  );
  console.log('web3.utils.numberToHex(234): ', web3.utils.numberToHex('234'));
  console.log(
    'web3.utils.hexToAscii(0x4920686176652031303021): ',
    web3.utils.hexToAscii('0x4920686176652031303021')
  );

  console.log(
    'web3.utils.asciiToHex(I have 100!): ',
    web3.utils.asciiToHex('I have 100!')
  );

  console.log(
    'web3.utils.hexToBytes(0x000000ea)',
    web3.utils.hexToBytes('0x000000ea')
  );
  console.log(
    'web3.utils.bytesToHex([ 0, 0, 0, 234 ]): ',
    web3.utils.bytesToHex([0, 0, 0, 234])
  );
  console.log('web3.utils.toWei(1, ether): ', web3.utils.toWei('1', 'ether'));
  console.log(
    'web3.utils.fromWei(1, ether): ',
    web3.utils.fromWei('1', 'ether')
  );
  console.log(
    'web3.utils.padLeft(0x3456ff, 20): ',
    web3.utils.padLeft('0x3456ff', 20)
  );
};

module.exports = { web3Utils };
