const RPC = 'https://rpc.testnet.fantom.network';
const TXHASH =
  '0x3595d3619ef3feef4ebdf25151dfbe8faf7f441d8b23c54c9639762b3dae9dd9';

const CONTRACT_ADDRESS = '0x753E6c49f263Cd34592664dE30F97Ac82DF770f0';

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
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'string',
        name: 'greeting',
        type: 'string'
      }
    ],
    name: 'UpdateGreeting',
    type: 'event'
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

const TOPIC0 =
  '0x616ea41f1d25108990ce3315d377a615ededd0a83e4cdd7fa4daafa31a71724b';

module.exports = { RPC, TXHASH, ABI, CONTRACT_ADDRESS, TOPIC0 };
