const fs = require('fs');
const path = require('path');

const privateKeyPath = process.env.JWT_PRIVATE_KEY_PATH || path.join(__dirname, '../keys/private.key');
const publicKeyPath = process.env.JWT_PUBLIC_KEY_PATH || path.join(__dirname, '../keys/public.key');

function getPrivateKey() {
  return fs.readFileSync(privateKeyPath, 'utf8');
}

function getPublicKey() {
  return fs.readFileSync(publicKeyPath, 'utf8');
}

module.exports = {
  getPrivateKey,
  getPublicKey
};