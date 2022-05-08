const RPC = 'https://rpc.testnet.fantom.network';
const TXHASH =
  '0x3595d3619ef3feef4ebdf25151dfbe8faf7f441d8b23c54c9639762b3dae9dd9';

const CONTRACT_ADDRESS = '0x73610d151447Ebf8f86A49Ff003c1e22c4d47c80';

const ABI = [
  {
    inputs: [
      {
        internalType: 'string',
        name: '_greeting',
        type: 'string'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'constructor'
  },
  {
    inputs: [],
    name: 'greet',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: '_greeting',
        type: 'string'
      }
    ],
    name: 'setGreeting',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  }
];

module.exports = { RPC, TXHASH, ABI, CONTRACT_ADDRESS };
