#credits: https://dev.to/kouul/frmp-stack-5g9
from flask import Flask, redirect, url_for
from pymongo import MongoClient
from flask_cors import CORS, cross_origin
import json

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

# PUT the connection string into an ENVIRONMENT VARIABLE
client = MongoClient('mongodb+srv://iris:qwerty1234@syntactic.onegdpy.mongodb.net/')
db = client.get_database('config_file')
col = db.get_collection('firebase_config')

@app.route('/getnames')
def get_names():
    names_json = []
    if col.find({}):
        for co in col.find({}):
            names_json.append({"apiKey": co["apiKey"], 
                               "authDomain": co['authDomain'],
                               "databaseURL": co["databaseURL"], 
                               "projectID": co["projectId"],
                               "storageBucket": co["storageBucket"],
                               "messagingSenderId": co["messagingSenderId"], 
                               "appId": co["appId"],
                               "measurementId": co["measurementId"]})
    return json.dumps(names_json)

if __name__ == '__main__':
    app.run(debug=True)

