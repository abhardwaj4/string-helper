var createStr = function createString(obj) {
	if (obj == null) return '';
	return '' + obj;
} 

var trimStr = function trimString(obj) {
	if (!String.prototype.trim) {
		String.prototype.trim = function() {
			return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
		}
	}

	return obj.trim();
}

var startsWith = function(str, prefix, caseInSensitive) {
	if (str == null || prefix == null) {
		return str == null && prefix == null;
	}
	if (prefix.length > str.length) {
		return false;
	}
	if (convertToBoolean(caseInSensitive) == true) {
		return str.toLowerCase().startsWith(prefix.toLowerCase());
	} else {
		return str.startsWith(prefix);
	}
}

function convertToBoolean(str) {
	var type = typeof str;

	if (type == 'string') {
		return str == 'true';
	} else if (type == 'boolean') {
		return str;
	} else if (type == 'number') {
		return str == 1;
	}
	return false;
}


module.exports = {
	createString: createStr,
	trim: trimStr,
	startsWith: startsWith
};