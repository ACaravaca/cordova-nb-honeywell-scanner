var cordova = require('cordova');
var exec = require('cordova/exec');

var nbAidc = function () {
	this.claim = function (success_cb, error_cb) {
		exec(success_cb, error_cb, "HoneywellAidc", "claim", []);
	};

	this.release = function (success_cb, error_cb) {
		exec(success_cb, error_cb, "HoneywellAidc", "release", []);
	};

	this.selectDevice = function (deviceName, success_cb, error_cb) {
		exec(success_cb, error_cb, "HoneywellAidc", "selectDevice", [deviceName]);
	};

	this.register = function (callback) {
		exec(callback, null, "HoneywellAidc", "register", []);
	};

	this.unregister = function () {
		exec(null, null, "HoneywellAidc", "unregister", []);
	};

	this.enableTrigger = function (success_cb, error_cb) {
		exec(success_cb, error_cb, "HoneywellAidc", "enableTrigger", []);
	};

	this.disableTrigger = function (success_cb, error_cb) {
		exec(success_cb, error_cb, "HoneywellAidc", "disableTrigger", []);
	};

	this.listConnectedBarcodeDevices = function (success_cb, error_cb) {
		exec(success_cb, error_cb, "HoneywellAidc", "listConnectedBarcodeDevices", []);
	}
};

nbAidc.prototype._success = function (barcode) {
	console.info('nbAidc._success');

	cordova.fireWindowEvent('barcode', {
		barcode: barcode
	});
};

nbAidc.prototype._error = function () {
	console.info('nbAidc._error');
};

console.info("Loaded Honeywell Aidc JavaScript");

var nbReader = new nbAidc();
module.exports = nbReader;