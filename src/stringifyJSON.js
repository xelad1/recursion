var stringifyJSON = function(obj) {
    //var obj = obj.shift();

    if (typeof obj !== "function") {
	 	if (typeof obj === "string") {	
			return obj.replace(/"/, "") ;
	 	} else if (obj instanceof Array) {
	 		return "[" + obj + "]";
	 	} else if (typeof obj === "boolean" || typeof obj === "number") {
	 		return obj += "";
	 	} else if (typeof obj === "object"){
	 		var objKeys = Object.keys(obj);
    		var arr = new Array();
    			for (var i = 0; i < objKeys.length; i++) {
        			var str = '"' + objKeys[i] + '":';
        			var objValue = obj[objKeys[i]];
        			str = (typeof objValue == "string") ? 
            		str = str + '"' + objValue + '"' : 
            		str = str + stringifyJSON(objValue);
        			arr.push(str);
    			}
   					 return "{" + arr.join(",") + "}";

 		} else {
 			throw new Error("Passed non stringifiable object.");
	 }


	}
}



