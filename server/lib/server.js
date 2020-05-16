const express = require('express');

const router = express.Router();
const log = require('debug')('pxc:server');


router
    .get('/test', (req, res, next) => {
        log('here');
        res.sendStatus(200);
    })
    .post('/prescription', (req, res, next) => {

        log(req.body)
        const patient = req.body.patient;
        const doctor = req.body.doctor;
        const prescription = req.body.prescription;
        
    })

module.exports = {
    router
}