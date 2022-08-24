var Web3 = require('web3');

const { RPC2, CONTRACT_ADDRESS, TOPIC0 } = require('../constants');

const localProvider = new Web3.providers.WebsocketProvider(RPC2);
const web3 = new Web3(localProvider);

let options = {
  address: CONTRACT_ADDRESS,
  topics: [TOPIC0]
};

const web3Subscribe = async () => {
  var subscription = web3.eth
    .subscribe('logs', options, function (error, result) {
      if (!error) console.log(result);
      else console.error(error);
    })
    .on('connected', function (subscriptionId) {
      console.log(subscriptionId);
    })
    .on('data', function (log) {
      console.log(log);
    })
    .on('changed', function (log) { });
};

web3Subscribe();
