const mongodb = require('mongodb');

const log = require('debug')('pxc:db');

const client = new mongodb.MongoClient(process.env.MONGODB_CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true });
let db;

async function connect() {
    log(`Connecting...`);
    return new Promise((resolve, reject) => {
        client.connect((err) => {
            if (err) return reject(err);
            log('Connected successfully to mongodb');
            db = client.db('prescrypto');
            return resolve();
        });
    });
}

async function getDoctor(doctorId) {
    const _id = new mongodb.ObjectId(doctorId);
    return db.collection('doctors').findOne({ _id });
}

async function getPatient(patientId) {
    const _id = new mongodb.ObjectId(patientId);
    return db.collection('patients').findOne({ _id });
}

async function createPrescription(record) {
    return db.collection('prescriptions').insertOne(record);
}

async function createHealthRecord(record) {
    return db.collection('healthRecords').insertOne(record);
}

async function findHealthRecord(fileId) {
    return db.collection('healthRecords').findOne({ fileId })
}

async function findPrescription(fileId) {
    return db.collection('prescriptions').findOne({ fileId })
}

module.exports = {
    connect,
    getDoctor,
    getPatient,
    createPrescription,
    findPrescription,
    createHealthRecord,
    findHealthRecord
}