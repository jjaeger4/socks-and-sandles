var MagicHomeControl = require('magic-home').Control;
var light = {};

light = new MagicHomeControl(process.argv[2]);
light.turnOn(function(err, success) {
  
});