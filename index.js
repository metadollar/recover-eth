var keythereum = require("keythereum");
var datadir = "/home/super/.ethereum/geth";
var address = "0xc8096d713000002c77e4eb62f0000ead5f105a7e";
const password = "mypass";

var keyObject = keythereum.importFromFile(address, datadir);
var privateKey = keythereum.recover(password, keyObject);
console.log(privateKey.toString('hex'));