const axios = require('axios').default;
const log = require('debug')('pxc:funcs');

async function generateKeyPair(seed) {
    const url = process.env.GCP_KEYGEN_FUNC;
    log(url);
    const response = await axios.post(url, { seed });
    log(response)
    return response.data;
}

async function encryptJson(data, key, key_type) {
    log('data: ', data);
    log('key: ', key);
    log('key_type: ', key_type);
    const plaintext = JSON.stringify(data);
    const url = process.env.GCP_ENCRYPT_FUNC;
    log('plaintext:', plaintext);
    const response = await axios.post(url, {
        key, key_type, plaintext
    }, data);
    return response.data.ciphertext;
}

async function decryptJson(ciphertext, key, key_type) {
    const url = process.env.GCP_DECRYPT_FUNC;
    log(url);
    log('ciphertext: ', ciphertext);
    log('key: ', key);
    log('key_type: ', key_type);
    const response = await axios.post(url, { ciphertext, key, key_type });
    const payload = JSON.parse(response.data.plaintext);
    return payload;
}

module.exports = {
    generateKeyPair,
    encryptJson,
    decryptJson
}