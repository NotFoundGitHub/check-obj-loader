const parser = require("@babel/parser")
const traverse = require("@babel/traverse").default
const t = require("@babel/types")
const fs = require('fs')
const core = require("@babel/core");

module.exports = function(source){
		let code = checkObj(source)
		code=code.replace(/ % /img, '.')
		console.log(code)
		return code;
}

function writeFile(filename,file){
	fs.writeFile(filename,file,(err)=>{
		if(err){
			console.log("error")
		}
	})
}
function deepFind(now){
    let stack = [];
	stack.unshift(now.property.name)
	if(!t.isMemberExpression(now.object) && t.isIdentifier(now.object)){
		stack.unshift(now.object.name)
	}else{
  		stack.unshift(...deepFind(now.object))
	}
	return stack;
}
function combArr (arr){
	let str = arr[0]
	for (let i = 1; i < arr.length; i++) {
		str+=('&&'+arr.slice(0,i+1).join('%'))		
	}
	return str;
}
function checkObj(source) {
    let ast = parser.parse(source)
    writeFile("ast.json",JSON.stringify(ast))
    traverse(ast, {
        MemberExpression(path) {
        	while (t.isMemberExpression(path.parentPath.node)) {
        		path = path.parentPath
        	}
        	let stack = deepFind(path.node);
        	if(!t.isLogicalExpression(path.node) && (path.node == path.parentPath.node.right)){
    			path.replaceWithSourceString(combArr(stack).toString()); 
        	}
    		return;
        }
    });
	return core.transformFromAstSync(ast, null, {
	    configFile: false 
	}).code;
}

