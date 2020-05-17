from cryptography.hazmat.backends import default_backend
from cryptography.hazmat.primitives.asymmetric import rsa
from cryptography.hazmat.primitives import serialization
import json

def enc (request):
    """Responds to any HTTP request.
    Args:
        request (flask.Request): HTTP request object.
    Returns:
        The response text or any set of values that can be turned into a
        Response object using
        `make_response <http://flask.pocoo.org/docs/1.0/api/#flask.Flask.make_response>`.
    """
    request_json = request.get_json()

    if request_json:
        ciphertext = ""
        keydata = request_json["key"]
        keydata = keydata.decode()
        ciphertext = request_json["ciphertext"]
        ciphertext = ciphertext.decode()
        
        if request_json["key_type"] == 'public':
            key = serialization.load_pem_public_key(
            keydata, backend=default_backend())

        if request_json["key_type"] == 'private':
            key = serialization.load_pem_private_key(
            keydata, password=None, backend=default_backend())
        

        plaintext = key.encrypt(plaintext, padding.OAEP(mgf=padding.MGF1(algorithm=hashes.SHA256()),algorithm=hashes.SHA256(),label=None ))
        plaintext = plaintext.encode()
        result = {}
        result["plaintext"] = str(plaintext)
        return json.dumps(result)

    if request.args and 'message' in request.args:
        return request.args.get('message')
    elif request_json and 'message' in request_json:
        return request_json['message']
    else:
        return f'Hello World!'
