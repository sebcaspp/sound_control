from flask import Flask,request
app = Flask(__name__)

@app.route('/volum/increment',methods=['PUT','POST'])

def increment():
    value=request.args.get('value')
    print("increment"+value)
    return ''
@app.route('/volum/decrement',methods=['PUT','POST'])
def decrement():
    Value =request.args.get('decrement')
    print("decrement:"+value)
@app.route('/volum/set',methods=['PUT','POST'])
def volumSet():
    Value =request.args.get('set')
    print("ser:"+value)
@app.after_request
def apply_caching(response):
    response.headers["Access-Control-Allow-Origin"] = "*"
    response.headers["Access-Control-Allow-Methods"] = "*"
    return response
