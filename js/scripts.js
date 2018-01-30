var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
console.log(femaleNames);

var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
console.log(maleNames);

var allNames = [];
var allNames = allNames.concat(femaleNames,maleNames);
console.log(allNames);

var newName = 'Marian';

if (allNames.indexOf(newName) === -1) {
	console.log('no errors');
	allNames.push(newName);
	console.log('after push:');
	console.log(allNames);

}	else {
	console.log('error, name already exists');
}
