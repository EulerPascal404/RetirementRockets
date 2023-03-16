import numpy as np
import matplotlib.pyplot as plt

from flask import Flask, send_from_directory
from flask_restful import Api, reqparse
from flask_cors import CORS #comment this on deployment
from HelloApiHandler import HelloApiHandler

app = Flask(__name__, static_url_path='/app.js', static_folder='../')
CORS(app) #comment this on deployment
api = Api(app)

@app.route("/", defaults={'path':''})
def serve(path):
    return send_from_directory(app.static_folder,'app.js')

api.add_resource(HelloApiHandler, '/flask/hello')