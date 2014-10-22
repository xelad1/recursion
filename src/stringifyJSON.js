var stringifyJSON = function(obj) {
  	var typeofObj = typeof(obj);
	if (typeofObj != 'object' || obj === null) {
		if (typeofObj == 'string') {
			obj = '"'+obj+'"';
		}
		return String(obj);
	} else {
		var holder = [];
		var arrTest = (obj && obj.constructor === Array);
		if (arrTest) {
			for (var i = 0; i < obj.length; i++) {
				holder.push(typeof(obj[i]) != 'object' ? (typeof(obj[i]) === 'string' ? '"' + String(obj[i]) + '"' : String(obj[i])) : stringifyJSON(obj[i]));
			}
			return '[' + holder + ']';
		} else {
			for (var key in obj) {
				var value = obj[key];
				typeofObj = typeof(value);
				if (typeofObj === 'string') {
					value = '"' + value + '"';
				} else if (typeofObj === 'function') {
					var x = value();
					value = (x != 'object' ? x : stringifyJSON(x));
				} else if (typeofObj === 'object' && value !== null) {
					value = stringifyJSON(value);
				}

				if (value !== undefined) {
					holder.push('"' + key + '"' + ':' + value);
				} else if (value === null) {
					holder.push('"' + key + '"' + ':' + value);
				}
			}
			return ('{' + String(holder) + '}');
		}
	}
};
