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
    const plaintext = JSON.stringify(data);
    const url = process.env.GCP_ENCRYPT_FUNC;
    log(url, key, key_type, plaintext);
    const response = await axios.post(url, {
        key, key_type, plaintext
    }, data);
    log(response)
    return response.data;
}

async function decryptJson(data, key, key_type) {
    const url = process.env.GCP_DECRYPT_FUNC;
    log(url);
    const response = await axios.post(url, { data, key, key_type });
    log(response)
    const payload = JSON.parse(response.data.plaintext);
    return payload;
}

module.exports = {
    generateKeyPair,
    encryptJson,
    decryptJson
}