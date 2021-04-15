#!/bin/bash
echo "starting service"

#pipenv shell
pip install -r requirements.txt
python3 -m control

