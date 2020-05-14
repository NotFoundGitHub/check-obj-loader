let property = 'age'
const person = {
	student: {
		age:18,
		name:'Mac',
		info:{
			addr:{
				province:'zhejiang',
				city:'hz'
			},
		}
	},
	程序员: {
		age:40,
		name:'chengxuyuan',
		info:{
			hobby:{
				book:{
					name:'java',
					info:{
						price:'$23',
						author:'jack ma'
					}
				}
			}
		}

	}

}
Object.prototype.hasProperty =  function(property){
	if(typeof property === "string"){
		property = property.split('.')
	}
	let context = this;
	for (var i = 0; i < property.length; i++) {
		let now = context[property[i]]
		if(!now){
			return false
		}
		context = now;
	}
	return context;
}
function checkPropExist(object,props){
	return object.hasProperty(props)||'';
}

// console.log("+++",person.hasProperty("engineer.info"))
console.log(checkPropExist(person,"程序员.name"))
// 