from control.facade import app
from control.server import host

def main():
    print("iniciando app")
    app.run(host = host)