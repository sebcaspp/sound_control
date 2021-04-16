from flask import Flask,request
from control.server import controller

app = Flask(__name__)

@app.route('/volum/increment',methods=['PUT','POST'])
def increment():
    result = controller.increment_volume()
    return result

@app.route('/volum/decrement',methods=['PUT','POST'])
def decrement():
    result = controller.decrement_volume()
    return result

@app.route('/volum/set',methods=['PUT','POST'])
def volumSet():
    value  = request.args.get('value')
    result = controller.set_volume(int(value))
    return result

@app.after_request
def apply_caching(response):
    response.headers["Access-Control-Allow-Origin"] = "*"
    response.headers["Access-Control-Allow-Methods"] = "*"
    return response