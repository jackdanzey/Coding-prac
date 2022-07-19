// # Write a function that accepts an array of strings and returns a new array containing every other string from the original array. For example, if the input is ["a", "b", "c", "d", "e", "f"], the output should be ["a", "c", "e"].

// def select_even_items(strings)
//   result = []
//   index = 0
//   strings.each do |string|
//     if index % 2 == 0
//       result << string
//     end
//     index = index + 1
//   end
//   result
// end
// p select_even_items(["a", "b", "c", "d", "e", "f"])

// function selectEvenItems(strings) {
//   var result = [];
//   var i = 0;
//   ; {
//     if (i / 2 === 0) {
//       result.push(strings);
//     }
//     i += 1;
//   }
// }
// selectEvenItems(["a", "b", "c", "d", "e", "f"]);

// # Write a method that accepts one argument - an array of numbers. The method should return the greatest number. For example, if the input is [5, 4, 8, 1, 2], the output should be 8.

// def max(numbers)
//   current_max = numbers[0]
//   numbers.each do |number|
//     if number > current_max
//       current_max = number
//     end
//   end
//   current_max
// end
// p max([5, 4, 8, 1, 2])

// function max(numbers) {
//   var max = numbers[0];
//   var i = 0;
//   while (i < numbers.length) {
//     if (numbers[i] > max) {
//       max = numbers[i];
//       i += 1;
//     }
//     else {
//       i += 1;
//     }
//   }
//   console.log(max);
// }

// max([5, 4, 8, 1, 2]);

// # Write a method that accepts a number and returns its factorial. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

// def factorial(number)
//   result = 1
//   current_number = number
//   number.times do
//     result = result * current_number
//     current_number = current_number - 1
//   end
//   result
// end
// p factorial(5)

// function factorial(number) {
//   var result = 1;
//   var currentnum = number;
//   var x = 0;
//   while (x < number) {
//     result = result * currentnum;
//     currentnum = currentnum - 1;
//     x += 1;
//   }
//   console.log(result);

// }

// factorial(5);

// var first = [5, -2, 1, -9, -7, 2, 6];
// var second = [];
// var currentMax = first[0]
// for (let index = 0; index < first.length; index++) {
//   if (first[index] * first[index + 1] > currentMax) {
//     currentMax = first[index] * first[index + 1];    
//   }
// } 
// console.log(currentMax)

// var first = [2, 32, 80, 18, 12, 3];
// var second = [];
// for (let index = 0; index < first.length; index++) {
//   if (first[index] < 20) {
//     second.push(first[index]);
//   }
// }
// console.log(second)

// var first = ["winner", "winner", "chicken", "dinner"];
// var second = [];
// for (let index = 0; index < first.length; index++) {
//   if (first[index][0] === "w") {
//     second.push(first[index]);
//   }

// }
// console.log(second)

// var first = [2, 4, 5, 1, 8, 9, 7];
// var second = [];
// for (let index = 0; index < first.length; index++) {
//   if (first[index] % 2 !== 0) {
//     second.push(first[index])
//   }
// }
// console.log(second)

// var first = [2, 3, 5, 10];
// var second = [];
// for (let index = 0; index < first.length; index++) {
//   if (first[index] === 5) {
//     second.push(first[index])
//   }
// }
// console.log(second)

// setTimeout(function() {console.log('First task done!')})
// setTimeout(function() {
//   console.log('First task done!');
// }, 2000);

// setTimeout(function() {
//   console.log('Second task done!');
// }, 4000);

// setTimeout(function() {
//   console.log('Third task done!');
// }, 6000);

// function sum(numbers) {
//   var sum = 0;
//   for (let index = 0; index < numbers.length; index++) {
//     sum = sum + numbers[index];
//   }
//   return sum;
// }

// console.log(sum([2, 4, 7]));

// function smallest(array) {
//   var smallboi = array[0];
//   for (let index = 0; index < array.length; index++) {
//     if (array[index] < smallboi) {
//       smallboi = array[index];
//     }
//   }
//   console.log(smallboi);
// }

// smallest(["test", "testing", "testtesttest!", "t"]);

// function reverse(array) {
//   var reversed = [];
//   for (let index = array.length - 1; index >= 0; index--) {
//     reversed.push(array[index]);
//   }
//   console.log(reversed);
// }

// reverse([2, 7, 42]);

// function count(array) {
//   var numCount = 0;
//   for (let index = 0; index < array.length; index++) {
//     if (array[index][0] === "a") {
//       numCount += 1;
//     }
//   }
//   return numCount;
// }

// console.log(count(["apple", "orange", "apricot", "grapes"]));

// function join(array) {
//   var string = "";
//   for (let index = 0; index < array.length; index++) {
//     string = string + array[index] + ",";
//   }
//   console.log(string);
// }

// join(["test", "testing", "testtest"]);

// function multiply(array) {
//   var product = array[0];
//   for (var index = 0; index < array.length; index++) {
//     product = product * array[index];
//   }
//   console.log(product);
// }

// multiply([2, 4, 10]);

function twosmallbois(array) {
  var smallest_one = 100000;
  var smallest_two = 100000;
  for (var index = 0; index < array.length; index++) {
    if (array[index] < smallest_one) {
      smallest_one = array[index];
    }
  }
  for (index = 0; index < array.length; index++) {
    if (array[index] < smallest_two && array[index] !== smallest_one) {
      smallest_two = array[index];
    }
  }
  console.log(smallest_one);
  console.log(smallest_two);
}

twosmallbois([4, 22, 10, 5, 15]);