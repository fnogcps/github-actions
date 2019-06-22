#!/bin/sh

npm i
./node_modules/.bin/eslint . --fix
./node_modules/mocha/bin/_mocha --recursive JavaScript/*

