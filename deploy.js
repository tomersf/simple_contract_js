const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
require("dotenv").config();

const { abi, evm } = require("./compile");

const provider = new HDWalletProvider({
  mnemonic: process.env.MNEMONIC_PHRASE,
  providerOrUrl:
    "https://rinkeby.infura.io/v3/bd0b3073b498437eb037caa55bc91e08",
});

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log("Attemping to deploy from account", accounts[0]);

  const result = await new web3.eth.Contract(abi)
    .deploy({ data: evm.bytecode.object, arguments: ["Hello"] })
    .send({ gas: "1000000", from: accounts[0] });

  console.log("Contract deployed to", result.options.address);
  provider.engine.stop();
};
deploy();
