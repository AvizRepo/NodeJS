const os = require('os'); //it is a constant which is preferable for os module
var os1 = require('os'); //now var is used so value is changeable
console.log(os1.networkInterfaces());
console.log(os1.arch()); //gives the os config type whether x64 or not