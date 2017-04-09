// function getPromise (location) {
// 	return new Promise(function (resolve, reject) {
		
// 			resolve(70);
// reject('city not found');

		

// 	});
// }
// getPromise().then(function (temp){
// 	console.log('success', temp);
// }, function (err) {
// console.log('fails', err);
// })

// function addPromise (a,b) {
// 	return new Promise (function (resolve, reject) {
// 		if(typeof a == 'number' && typeof b == 'number')
// 		{
// 			resolve(a+b);
// 		}
// 		else
// 		{
// 			reject('A and B must be a number');
// 		}
// 	});
// }



// addPromise(7,'a').then(function (sum){
// 	console.log('this must not be printed');
// },function(err){
// console.log('err', err);
// })


var names = ['Adhi', 'Andrew', 'jones'];

// names.forEach(function (name) {
// console.log('forEach', name);
// });
//normal function which doesn't use arrow function
// names.forEach((name) => {
// console.log('arrow', name);
// });
//arrow function must be in the use where anonymous function must be done

//add statement 
// var numbers = (a, b) => {
// 	return a+b;
// }
// console.log(numbers(7,7));

//add expression
var expression = (a, b) => a+b;
console.log(expression(2,2));

// var person = {
// 	name: 'Adhithya',
// 	sample: function() {
// 		names.forEach((name) => {
// 			console.log(this.name +'says hi to'+ name);
// 		});
		
// 	}
// }
// person.sample();
