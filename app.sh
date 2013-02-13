#!/bin/sh

BASE_DIR=`dirname "$0"`

export LOG4JS_CONFIG=`pwd`/config/log4js.json
echo "LOG4JS_CONFIG: "$LOG4JS_CONFIG

export NODE_PATH=`pwd`/node_modules
echo "NODE_PATH: $NODE_PATH"

$BASE_DIR/bin/node --harmony $BASE_DIR/index.js & wait
