const path = require("path");
const fs = require("fs");
const solc = require("solc");

const inboxContractPath = path.resolve(__dirname, "contracts", "Inbox.sol");
const inboxSourceContent = fs.readFileSync(inboxContractPath, "utf-8");

module.exports = solc.compile(inboxSourceContent, 1).contracts[":Inbox"];
