#!/usr/bin/env node

var kluid = require('../lib/index.js');
var arg;

if (process.argv.length > 2) {
  arg = process.argv[2];
}

switch (arg) {
  case "--empty":
    kluid.emptyUUID();
    break;
  default:
    kluid.newUUID();
    break;
}
