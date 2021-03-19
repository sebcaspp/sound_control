from flask import Flask,request
app = Flask(__name__)

@app.route('/volum/increment')

def holaMundo():
    valor=request.args.get('value')
    print(valor)
    return ''
@app.after_request
def apply_caching(response):
    response.headers["Access-Control-Allow-Origin"] = "*"
    return response
