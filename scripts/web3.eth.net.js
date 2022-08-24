var Web3 = require('web3');
const { RPC } = require('../constants');

const web3 = new Web3(RPC);

const web3NetGetId = async () => {
    console.log('The id: :', await web3.eth.net.getId());
};

module.exports = { web3NetGetId };
