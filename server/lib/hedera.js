const log = require('debug')('pxc:hedera');
const { Client, FileCreateTransaction, Ed25519PrivateKey, Hbar, FileContentsQuery } = require("@hashgraph/sdk");
// Grab your account ID and private key from the .env file
const operatorAccount = process.env.HEDERA_ACCOUNT_ID;
const operatorPrivateKey = Ed25519PrivateKey.fromString(process.env.HEDERA_PRIVATE_KEY);

async function upload(data) {
    log('uploading...')
    const operatorPublicKey = operatorPrivateKey.publicKey;

    if (operatorPrivateKey == null || operatorAccount == null) {
        throw new Error("environment variables OPERATOR_KEY and OPERATOR_ID must be present");
    }

    const client = Client.forTestnet();
    client.setOperator(operatorAccount, operatorPrivateKey);

    const transactionId = await new FileCreateTransaction()
        .setContents(data)
        .addKey(operatorPublicKey) // Defines the "admin" of this file
        .setMaxTransactionFee(new Hbar(15))
        .execute(client);

    const receipt = await transactionId.getReceipt(client);
    const fileId = receipt.getFileId();
    log("new file id =", fileId);
    return fileId;
}

async function download(fileId) {
    if (operatorPrivateKey == null || operatorAccount == null) {
        throw new Error("environment variables OPERATOR_KEY and OPERATOR_ID must be present");
    }

    const client = Client.forTestnet();
    client.setOperator(operatorAccount, operatorPrivateKey);

    const resp = await new FileContentsQuery()
        .setFileId(fileId)
        .execute(client);

    log(resp);
    return resp;
}

module.exports = {
    upload,
    download
}