var MagicHomeDiscovery = require('magic-home').Discovery;

var discovery = new MagicHomeDiscovery();
discovery.scan(500, function(err, devices) {
	if (devices.length > 0) {
    console.log(JSON.stringify(devices));
  } else {
    console.log('No device found.');
  }
});