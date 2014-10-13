// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

//Crockford's "Walk the DOM".  Recursively goes through the entire tree of nodes
function walkTheDOM(node, func) {

	func(node);
	node = node.firstChild;
	while(node) {
		walkTheDOM(node, func);
		node = node.nextSibling;
	}
}

//implemented using Crockford's "Walk the DOM" method.
var getElementsByClassName = function (className) {
	var res = [];

	walkTheDOM(document.body, function (node) {
		var oldNode = node.className;

		if(oldNode) {
		var newNode = oldNode.split(' ');
		for(var i = 0; i < newNode.length; i ++) {
			if(newNode[i] === className) {
				res.push(node);
				break;
			}
		}
	}
	});

	return res;
};


