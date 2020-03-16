'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vectorNumber = require('@foba/vector-number');
var vectorString = require('@foba/vector-string');



Object.defineProperty(exports, 'FobaNum', {
	enumerable: true,
	get: function () {
		return vectorNumber.Foba;
	}
});
Object.defineProperty(exports, 'NumberVectorCollection', {
	enumerable: true,
	get: function () {
		return vectorNumber.VectorCollection;
	}
});
Object.defineProperty(exports, 'FobaStr', {
	enumerable: true,
	get: function () {
		return vectorString.Foba;
	}
});
Object.defineProperty(exports, 'StringVectorCollection', {
	enumerable: true,
	get: function () {
		return vectorString.VectorCollection;
	}
});
