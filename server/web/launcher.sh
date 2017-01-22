#!/bin/bash

PYTHON=`which python`

case "$1" in
"start")
	FLASK_CONFIG_FILE=config/develop.cfg $PYTHON main.py
esac