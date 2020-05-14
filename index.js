const person = {
	student :{
		name:'jack',
		phone:'123456789',
		addr:{
			city:"beijing"
		}
	},
	family:{
		parent:{
			dad:{
				info:{
					age:40
				}
			}
		}
	}
}

const res = {person,msg:'success','status':500}

let name = person.student.name + "123"
per = res.persons
phone = person.student.phone
city = person.studens.addrs.city
age = person.family.parent.dad.info.age
r = res
person.family.parent.mom = {}
person.family.parent.mom.age = person.family.parent.dad.info.age

console.log("name",name)
console.log(per)
console.log("phone",phone)
console.log(city)
console.log("age",person.family.parent.mom.age)