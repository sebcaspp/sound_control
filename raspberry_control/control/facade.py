from flask import Flask,request
from control.infrastructure.volum_control import VolumeControl

app = Flask(__name__)

volum_control = VolumeControl(0)

@app.route('/volum/increment',methods=['PUT','POST'])
def increment():
    value=request.args.get('value')
    print("increment"+value)
    volum_control.increase_volume()
    return ''

@app.route('/volum/decrement',methods=['PUT','POST'])
def decrement():
    value = request.args.get('decrement')
    print("decrement:"+value)
    volum_control.decrease_volume()


@app.route('/volum/set',methods=['PUT','POST'])
def volumSet():
    value = request.args.get('set')
    print("set:"+value)
    volum_control.set_volume(int(value))

@app.after_request
def apply_caching(response):
    response.headers["Access-Control-Allow-Origin"] = "*"
    response.headers["Access-Control-Allow-Methods"] = "*"
    return response