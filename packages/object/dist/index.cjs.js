'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var objectNumber = require('@foba/object-number');
var objectString = require('@foba/object-string');



Object.defineProperty(exports, 'FobaNum', {
	enumerable: true,
	get: function () {
		return objectNumber.Foba;
	}
});
Object.defineProperty(exports, 'FobaStr', {
	enumerable: true,
	get: function () {
		return objectString.Foba;
	}
});
