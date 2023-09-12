const secp = require("ethereum-cryptography/secp256k1");
const hashMessage = require('./hashMessage');

const PRIVATE_KEY = "<private_key>";


async function signMessage(msg) {
    const msgHash = hashMessage(msg);
    return secp.sign(msgHash, PRIVATE_KEY, { recovered: true });    
    
}

module.exports = signMessage;
