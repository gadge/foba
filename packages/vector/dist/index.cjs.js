'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vectorString = require('@foba/vector-string');
var vectorNumber = require('@foba/vector-number');



Object.defineProperty(exports, 'FobaStr', {
	enumerable: true,
	get: function () {
		return vectorString.Foba;
	}
});
Object.defineProperty(exports, 'FobaNum', {
	enumerable: true,
	get: function () {
		return vectorNumber.Foba;
	}
});
