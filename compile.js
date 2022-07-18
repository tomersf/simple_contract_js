const path = require("path");
const fs = require("fs");
const solc = require("solc");

const inboxContractPath = path.resolve(__dirname, "contracts", "Inbox.sol");
const inboxSourceContent = fs.readFileSync(inboxContractPath, "utf-8");

const input = {
  language: "Solidity",
  sources: {
    "Inbox.sol": {
      content: inboxSourceContent,
    },
  },
  settings: {
    outputSelection: {
      "*": {
        "*": ["*"],
      },
    },
  },
};

module.exports = JSON.parse(solc.compile(JSON.stringify(input))).contracts[
  "Inbox.sol"
].Inbox;
