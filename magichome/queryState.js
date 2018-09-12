var MagicHomeControl = require('magic-home').Control;
var light = {};

light = new MagicHomeControl(process.argv[2]);
light.queryState((err, state) => {
  console.log(JSON.stringify(state));
});