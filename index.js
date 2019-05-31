 function suma (a, b) {
	return a + b
}
console.log(suma(2,3)) /// regresa 5


function suma (a, b) {
	a + b
}
console.log(suma(2,3)) //regresa undefined

const a = 1
function foo () {
const b = 2
console.log(a, b)
if ( true ) {
	const c = 3
	console.log(a, b, c)
}
// console.log(c)
}

foo()

console.log(a)
// console.log(b)

const a = 1
function foo () {
const a = 2
console.log(a)
if ( true ) {
	const a = 3
	console.log(a)
}
}

console.log(a)
