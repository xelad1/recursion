var stringifyJSON = function(obj) {
    var shifted = obj.shift();
    if(typeof obj !== "function") {
	 	if (typeof shifted === "string") {	
			return shifted.replace(/"/, "") + ", " + stringifyJSON(obj);
	 	} else if(shifted instanceof Array) {
	 		return "[" + shifted + "]" + ", " + stringifyJSON(obj);
	 	} else if(typeof shifted === "boolean") {
	 		return shifted += "" + ", " + stringifyJSON(obj);
	 	} else if(typeof shifted === "object"){
	 		//stringify object

	 	}

	 	if(obj.length === 0) {
	 	return "finished";
 	}
 	
 } else {
 	throw new Error("Passed non stringifiable object.");
 }


};
