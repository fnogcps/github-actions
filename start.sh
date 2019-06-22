#!/bin/sh

npm i
./node_modules/.bin/eslint . --fix
mocha --recursive JavaScript/*
