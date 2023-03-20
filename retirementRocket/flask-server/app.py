import numpy as np
import matplotlib.pyplot as plt

from datetime import datetime
from flask import Flask, jsonify

#https://github.com/jake9725/Simple-react-native-app-python-flask/blob/master/App.js
def timeNow():
    return datetime.now().strftime('%Y-%m-%d %H:%M:%S').split(" ")[1]

app = Flask(__name__)
@app.route('/time') # http://127.0.0.1/time
def serve():
    return jsonify({"time": timeNow()})

app.run(host="0.0.0.0", port = 80)