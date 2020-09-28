'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var matrixNumber = require('@foba/matrix-number');
var matrixString = require('@foba/matrix-string');



Object.defineProperty(exports, 'NumberMatrixCollection', {
	enumerable: true,
	get: function () {
		return matrixNumber.MatrixCollection;
	}
});
Object.defineProperty(exports, 'StringMatrixCollection', {
	enumerable: true,
	get: function () {
		return matrixString.MatrixCollection;
	}
});
