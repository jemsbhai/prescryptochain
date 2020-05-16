const axios = require('axios').default;

async function generateKeyPair() {
    const url = process.env.GCP_KEYGEN_FUNC;
    log(url);
    const response = await axios.post(url, {});
    log(response)
    return response.data;
}

async function encryptJson(data, key) {
    const url = process.env.GCP_KEYGEN_FUNC;
    log(url);
    const response = await axios.post(url, {});
    log(response)
    return response.data;
}

module.exports = {
    generateKeyPair,
    encryptFile
}