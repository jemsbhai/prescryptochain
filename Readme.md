# Prescryptochain
- secure, authenticated tamper proof prescriptions and electronic medical records on the hedera blockchain

Created for [HackTheChain2020](https://hackthechain.devpost.com)

# Prescryptochain API

API build on NodeJS Express, MongoDB, Google Cloud Functions  

Features:

* Mongodb database for user records and keeping track of prescription id
* Hedera File Service to store encrypted prescription created by doctor 

![output](https://github.com/jemsbhai/prescryptochain/raw/master/server/Output.png)

## API docs

### GET /patient/:patientId

Retrieves a Doctor record 

Example
```
GET /patient/5ec04ed9f80f9328703088b1

Response:
{
    "_id": "5ec04ed9f80f9328703088b1",
    "name": "Chris Woodle",
    "publicKey": "-----BEGIN PUBLIC KEY-----\\\\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA28wmD9b8jaKqhWqYH8NG\\\\nZVFD/776txuQsLYNl/+KhBWxEGUzr/lzHSRyH2+0ykT7eEMvK2fIfZN2uiuY8231\\\\n439uTOVix/yIGxyJVv+JOiohqKj9yscqzJ67xMz3EGeKrFRzEXc542ZFGbX+WeaB\\\\nAdZQaGvfE8JXRahhL2QmENqXKmVGGY8yFMrtZrs3Hg58mtTysYcQKQGA0BdZqWo/\\\\nI7vuoUjzZei46xFFby+GAosRZmGoePJEDoREzLhST1CwvAqEutqPkNET9zeT91Al\\\\nI8Ij/5rfNMnpVxOE6FpM8s2xQLcCTBJJH2D1HynvyPLo+H3+RhfOQzSP03vmL71o\\\\nCQIDAQAB\\\\n-----END PUBLIC KEY-----\\\\n"
}
```

![doctor](https://github.com/jemsbhai/prescryptochain/raw/master/server/ExampleDoctorRecord.png)

### GET /doctor/doctorId

Retrieves a Doctor record 

Example
```
GET /doctor/5ec04ec9f80f9328703088b0
{
    "_id": "5ec04ec9f80f9328703088b0",
    "name": "Dr. Mario",
    "publicKey": "-----BEGIN PUBLIC KEY-----\\\\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA3LsdTx6LR7B0c1Bj8Ldz\\\\nAWJMIGkXo7u4seZGFQ9Ab356TXK5Xi8Kz+Vbke/tqGATbeoeELJstELTdWQZsLBi\\\\n7bhGok7DSihUEbjB4eAPWYY/odpk0Imgapc4F1/1kIeLvYPxI36BdRqgV8xrek7u\\\\n3qSMbpGUJhnUVOE5o+kTuDFMEd5pcjGEg1CKtdcq8BNBnrPs4G8cm7hj/sxWtKCf\\\\nG2/yeg+JIHPUXSxeIlwKKrrzgel4PcKomidB517DlWOZv95lO3Vo5i5qjeaQsN4E\\\\nxp+HlxBRMwN8LwAFgq68Fyl/HEhHNHfngxP0dWqatjgPZ7sjQpXWiusSl+mFiMKo\\\\njwIDAQAB\\\\n-----END PUBLIC KEY-----\\\\n"
}
```

### POST /prescription

Create a prescription

Example
```
POST /prescription

Request:
{
	"doctor": "5ec04ec9f80f9328703088b0",
	"patient" : "5ec04ed9f80f9328703088b1",
	"prescription": 
    {
    	"drug": "Health Potion",
    	"dosage": "1 Potion",
    	"refil": "weekly",
    	"refilRount": 2
	}
}

Response:
{
    "patientId": "5ec04ed9f80f9328703088b1",
    "doctor": "5ec04ec9f80f9328703088b0",
    "fileId": "0.0.47046",
    "created": "2020-05-17T06:48:29.229Z",
    "_id": "5ec0de3d70b78220081db3a9"
}
```


### GET /prescription/:fileId

Gets decrypted prescription using the Hedera FileId

Example:
```
GET /prescription/0.0.47046

Response: 
{
    "drug": "Health Potion",
    "dosage": "1 Potion",
    "refil": "weekly",
    "refilRount": 2
}
```

![prescriptions](https://github.com/jemsbhai/prescryptochain/raw/master/server/ExamplePrescriptionRecords.png)