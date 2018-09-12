var MagicHomeDiscovery = require('magic-home').Discovery;
var MagicHomeControl = require('magic-home').Control;
var light = {};

var discovery = new MagicHomeDiscovery();
discovery.scan(500, function(err, devices) {
	if (devices.length > 0) {
    light = new MagicHomeControl(devices[0].address);
    light.turnOn(function(err, success) {
      light.queryState(function(err, status) {
        // light.setColorWithBrightness(process.argv[2], process.argv[3], process.argv[4], process.argv[5], () => {});
        var patterns = ['seven_color_cross_fade',
          'red_gradual_change',
          'green_gradual_change',
          'blue_gradual_change',
          'yellow_gradual_change',
          'cyan_gradual_change',
          'purple_gradual_change',
          'white_gradual_change',
          'red_green_cross_fade',
          'red_blue_cross_fade',
          'green_blue_cross_fade',
          'seven_color_strobe_flash',
          'red_strobe_flash',
          'green_strobe_flash',
          'blue_stobe_flash',
          'yellow_strobe_flash',
          'cyan_strobe_flash',
          'purple_strobe_flash',
          'white_strobe_flash',
          'seven_color_jumping'];
        light.setPattern(patterns[process.argv[2]], process.argv[3], () => {});
      });
    });
  } else {
    console.log('No device found.');
  }
});