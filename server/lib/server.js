const express = require('express');

const router = express.Router();
const log = require('debug')('pxc:server');

const { encryptJson, decryptJson } = require('./gcp-func');
const db = require('./db');
const hedera = require('./hedera')

router
    .get('/test', (req, res, next) => {
        log('here');
        res.sendStatus(200);
    })
    .post('/healthRecord', async (req, res, next) => {
        try {
            log(req.body)
            const patientId = req.body.patient;
            const doctor = req.body.doctor;
            const rec = req.body.record;

            const patient = await db.getPatient(patientId);

            const encrypedFile = await encryptJson(rec, patient.publicKey, 'public')
            log(encrypedFile);
            const fileId = await hedera.upload(encrypedFile);

            const record = {
                patientId,
                doctor,
                fileId: fileId.toString(),
                created: new Date()
            };

            const result = await db.createHealthRecord(record);
            if (result && result.ops[0])
                return res.send(result.ops[0]);
            else {
                return res.send(result);
            }
        } catch (error) {
            log(error);
            next(error);
        }

    })
    .get('/healthRecord/:fileId', async (req, res, next) => {
        try {
            const fileId = req.params.fileId;
            log(fileId)
            const record = await db.findHealthRecord(fileId);
            if (!record) throw new Error('Cant find health record');
            log(record);

            const encryptedFile = await hedera.download(fileId);
            log(encryptedFile);


            const patient = await db.getPatient(record.patientId);
            if (!patient) throw new Error('Cant find patient');
            const decryptedFile = await decryptJson(encryptedFile, patient.publicKey, 'public');
            log(encryptedFile);
            res.send(decryptedFile);
        } catch (error) {
            log(error);
            next(error);
        }
    })
    .post('/prescription', async (req, res, next) => {
        try {
            log(req.body)
            const patientId = req.body.patient;
            const doctor = req.body.doctor;
            const prescription = req.body.prescription;

            const patient = await db.getPatient(patientId);

            const encrypedFile = await encryptJson(prescription, patient.publicKey, 'public')
            log(encrypedFile);
            const fileId = await hedera.upload(encrypedFile);

            const record = {
                patientId,
                doctor,
                fileId: fileId.toString(),
                created: new Date()
            };

            const result = await db.createPrescription(record);
            if (result && result.ops[0])
                return res.send(result.ops[0]);
            else {
                return res.send(result);
            }
        } catch (error) {
            log(error);
            next(error);
        }

    })
    .get('/prescription/:fileId', async (req, res, next) => {
        try {
            const fileId = req.params.fileId;
            log(fileId)
            const prescription = await db.findPrescription(fileId);
            if (!prescription) throw new Error('Cant find prescription');
            log(prescription);

            const encryptedFile = await hedera.download(fileId);
            log(encryptedFile);


            const patient = await db.getPatient(prescription.patientId);
            if (!patient) throw new Error('Cant find patient');
            const decryptedFile = await decryptJson(encryptedFile, patient.publicKey, 'public');
            log(encryptedFile);
            res.send(decryptedFile);
        } catch (error) {
            log(error);
            next(error);
        }
    })
    .get('/patient/:patientId', async (req, res, next) => {
        try {
            const patientId = req.params.patientId;
            const patient = await db.getPatient(patientId);
            patient.privateKey = undefined;
            res.send(patient);
        } catch (error) {
            log(error);
            next(error);
        }
    })
    .get('/doctor/:doctorId', async (req, res, next) => {
        try {
            const doctorId = req.params.doctorId;
            const doctor = await db.getDoctor(doctorId);
            doctor.privateKey = undefined;
            log(doctor);
            res.send(doctor);
        } catch (error) {
            log(error);
            next(error);
        }
    })


// {
//     drug: "string"
//     dosage: "string"
//     refil: "string"
//     refilRount: "string"
// }

module.exports = {
    router
}