
//Question 1
//difference between mutating and non-mutating arrays

// Mutating array methods modify the original array.Mutating
// examples: push, pop, shift, unshift, splice, and sort.
//  Non-mutating array methods do not modify the original array.
// Examples:  map, filter, reduce, forEach and slice.


// question 2
// 2(a) Add ‘Kotlin’ to the end of the array

let languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python']

languages.push('Kotlin');
console.log(languages)

// 2(b) Add ‘Java’ after ‘Ruby’

languages.splice(3, 0, "Java")
console.log(languages)

// 2(c) Remove the first item in the array

languages.shift();
console.log(languages)

//  2(d) Add ’Scala’ and ‘Swift’ to the beginning of the array
languages.unshift('Scala', 'Swift');
console.log(languages)

//  2(e )Replace ‘PHP’ with ‘Go’ and ‘Rust’
languages.splice(5, 1, "Go", "Rust")
console.log(languages)


//question 3
//value of fruit after calling the function changeFruit
let fruit = ['apple', 'mango', 'banana'];
		function changeFruit( fruit ) {
    			fruit[2] = "orange";
    			return fruit;
		}
        console.log(changeFruit(fruit))

        //the value of fruit will be [ 'apple', 'mango', 'orange' ]

		//question 4
		//Write a function that accepts an array of numbers as an argument. Return the maximum value in the array.
		function maxValue(arr) {
			let max = arr[0];
			for (let i = 1; i < arr.length; i++) {
			  if (arr[i] > max) {
				max = arr[i];
			  }
			}
			return max;
		  }

		  let value = [ 1, 2,3,4]
		  let result2 =maxValue(value)
		  console.log(result2)


        //question 5
		//Write a function called valTimesIndex which accepts an array of numbers and returns 
		//a new array with each value multiplied by the index it is at in the array:
		// function valTimesIndex(arr) {
		// 	let newArr = [];
		// 	for (let i = 0; i < arr.length; i++) {
		// 	  newArr.push(arr[i] * i);
		// 	}
		// 	return newArr;
		//   }
		//   console.log(newArr(1,2,3,4))

		function valTimesIndex (nums){
			return nums.map((val, index) => val * index);
		}
		let arrayOfNums =[1, 2, 3];
		let result = valTimesIndex(arrayOfNums);

		console.log(result)