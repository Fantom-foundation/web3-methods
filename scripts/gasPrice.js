var Web3 = require('web3');

const { MAINNET_RPC } = require('../constants');

var web3 = new Web3(MAINNET_RPC);

const historicalBlocks = 4;

const hexToDecimal = (hex) => parseInt(hex, 16);
const weiToGwei = (price) => {
  if (typeof price != String) {
    price = String(price);
  }

  return parseFloat(web3.utils.fromWei(price, 'gwei'));
};
function avg(arr) {
  const sum = arr.reduce((a, v) => a + v);
  return Math.round(sum / arr.length);
}

const gasPrices = async () => {
  web3.eth.getGasPrice().then((gasPrice) => {
    console.log('Gas Price (using web3 API): ', weiToGwei(gasPrice));
  });

  web3.eth
    .getFeeHistory(historicalBlocks, 'pending', [1, 50, 99])
    .then((feeHistory) => {
      const blocks = formatFeeHistory(feeHistory, false);

      console.log('Blocks: ', blocks); //Use this to get the complete output

      const slow = avg(blocks.map((b) => b.priorityFeePerGas[0]));
      const average = avg(blocks.map((b) => b.priorityFeePerGas[1]));
      const fast = avg(blocks.map((b) => b.priorityFeePerGas[2]));

      web3.eth.getBlock('pending').then((block) => {
        const baseFeePerGas = Number(block.baseFeePerGas);
        console.log('Manual estimate:', {
          slow: weiToGwei(slow + baseFeePerGas),
          average: weiToGwei(average + baseFeePerGas),
          fast: weiToGwei(fast + baseFeePerGas)
        });
      });
    });
};

function formatFeeHistory(result, includePending) {
  let blockNum = hexToDecimal(result.oldestBlock);
  let index = 0;
  const blocks = [];
  while (
    blockNum < result.oldestBlock + historicalBlocks &&
    index < historicalBlocks
  ) {
    blocks.push({
      block: blockNum,
      baseFeePerGas: Number(result.baseFeePerGas[index]),
      gasUsedRatio: result.gasUsedRatio[index],
      priorityFeePerGas: result.reward[index].map((x) => Number(x))
    });
    blockNum += 1;
    index += 1;
  }
  if (includePending) {
    blocks.push({
      number: 'pending',
      baseFeePerGas: Number(result.baseFeePerGas[historicalBlocks]),
      gasUsedRatio: NaN,
      priorityFeePerGas: []
    });
  }
  return blocks;
}

module.exports = { gasPrices };
