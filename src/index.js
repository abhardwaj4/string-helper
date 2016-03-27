function createString(obj) {
	if (obj == null) return '';
	return '' + obj;
} 

function trimString(obj) {
	if (!String.prototype.trim) {
		String.prototype.trim = function() {
			return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
		}
	}

	return obj.trim();
}
module.exports = {
	createString: createString(obj),
	trim: trimString(obj)
};