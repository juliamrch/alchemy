// Declare libraries
const { keccak256 } = require("ethereum-cryptography/keccak");
const { utf8ToBytes } = require("ethereum-cryptography/utils");


function hashMessage(message) {

    // Take string message and and it into an array of UTF-8 bytes
    const bytes = utf8ToBytes(message);
    
    // Return hashed bytes
    return keccak256(bytes);
    
}

module.exports = hashMessage;