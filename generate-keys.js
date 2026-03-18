const fs = require('fs');
const path = require('path');
const { generateKeyPairSync } = require('crypto');

const { publicKey, privateKey } = generateKeyPairSync('rsa', {
    modulusLength: 2048,
    publicKeyEncoding: {
        type: 'spki',
        format: 'pem'
    },
    privateKeyEncoding: {
        type: 'pkcs8',
        format: 'pem'
    }
});

const dir = path.join(__dirname, 'keys');

if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
}

fs.writeFileSync(path.join(dir, 'private.key'), privateKey);
fs.writeFileSync(path.join(dir, 'public.key'), publicKey);

console.log('Generated RSA 2048 key pair successfully.');