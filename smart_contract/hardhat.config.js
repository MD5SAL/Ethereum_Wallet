// https://eth-goerli.g.alchemy.com/v2/FDXohKTXk2eFFOXG62EuRE52Ejplezhf

require('@nomiclabs/hardhat-waffle');
module.exports = {
  solidity: '0.8.0',
  networks:{
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/FDXohKTXk2eFFOXG62EuRE52Ejplezhf',
      accounts: ['fa8c50668a462414f4e3293484934db72d5d9e3fb5a399923bc570b0526ef07f']
      
    }
  }
}