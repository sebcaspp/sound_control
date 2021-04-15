#!/bin/bash
cd raspberry_control/
pipenv lock -r > requirements.txt
cd ..
zip -r raspberry_control raspberry_control/control raspberry_control/requirements.txt raspberry_control/run.sh
rm raspberry_control/requirements.txt
