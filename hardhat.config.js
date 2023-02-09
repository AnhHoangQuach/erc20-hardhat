require('@nomicfoundation/hardhat-toolbox')
/** @type import('hardhat/config').HardhatUserConfig */
require('dotenv').config()
module.exports = {
  solidity: '0.8.17',
  networks: {
    bsctest: {
      url: 'https://data-seed-prebsc-2-s2.binance.org:8545',
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: process.env.API_KEY,
  },
}
