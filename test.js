// var first = [2, 4, 5, 1, 8, 9, 7];
// var second = [];
// for (var index = 0; index < first.length; index++) {
//   if (first[index] % 2 !== 0) {
//     second.push(first[index]);
//   }

// }
// console.log(second);

// var first = [8, 23, 0, 44, 1980, 3];
// var second = [];
// for (var index = 0; index < first.length; index++) {
//   if (first[index] < 10) {
//     second.push(first[index]);
//   }
// }
// console.log(second);

// var first = [5, 10, 8, 3];
// var max = first[0];

// for (var index = 0; index < first.length; index++) {
//   if (first[index] > max) {
//     max = first[index];
//   }
// }

// console.log(max);

// var first = ["volleyball", "basketball", "badminton"];
// var string = "";

// for (var index = 0; index < first.length; index++) {
//   string = string + first[index] + "-";
// }

// console.log(string);

// var first = [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}];
// var sum = 0;

// for (var index = 0; index < first.length; index++) {
//   sum = sum + first[index]["price"];
// }

// console.log(sum);

// var first = ["volleyball", "basketball", "badminton"];
// var total = 0;

// for (var index = 0; index < first.length; index++) {
//   total = total + first[index].length;
// }
// console.log(total);

// var first = [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}];
// var second = first[0];

// for (var index = 0; index < first.length; index++) {
//   if (first[index]["price"] < second["price"]) {
//     second = first[index];
//   }
// }
// console.log(second);

// var first = [23, 44, 22, 12];
// var second = 0;
// for (var index = 0; index < first.length; index++) {
//   second = second + first[index];
// }
// console.log(second);

// var first = [[1, 3], [8, 9], [2, 16]];
// var second = {};
// for (var index = 0; index < first.length; index++) {
//   second[first[index][0]] = first[index][1];
// }

// console.log(second);

// var first = [{id: 1, color: "blue", price: 32}, {id: 2, color: "red", price: 12}];
// var second = {};

// for (var index = 0; index < first.length; index++) {
//   second[first[index]["id"]] = first[index];
// }

// console.log(second);

// var first = "bookkeeper";
// var second = {};

// for (var index = 0; index < first.length; index++) {
//   if (second[first[index]] === undefined) {
//     second[first[index]] = 1;
//   } else {
//     second[first[index]] += 1;
//   }
// }

// console.log(second);

// var first = {321: {name: "Alice", age: 31}, 322: {name: "Maria", age: 27}};
// var second = [];
// for (var index = 321; index < 323; index++); {
//   second.push({id: index, first[index]});
// // }
// second.push(first[321]["name"]);
// console.log(second);

// var first = ["do", "or", "do", "not"];
// var second = {};
// for (var index = 0; index < first.length; index++) {
//   if (second[first[index]] === undefined) {
//     second[first[index]] = 1;
//   } else {
//     second[first[index]] += 1;
//   }
// }
// console.log(second);

// var first = {"a": 1, "b": 2, "c": 3, "d": 4};
// var second = [];
// Object.entries(first).forEach(function ([key, value]) {
//   second.push(key);
//   second.push(value);
// });
// // second.push();
// console.log(second);

// var first = {"a": 1, "b": 2, "c": 3};
// var second = {};
// Object.entries(first).forEach(function ([key, value]) {
//   second[value] = key;
// });
// console.log(second);

// let first = [{author: "Jeff Smith", title: "Bone"}, {author: "George Orwell", title: "1984"}, {author: "Jeff Smith", title: "RASL"}];
// let second = {};
// for (let index = 0; index < first.length; index++) {
//   if (second[first[index]["author"]] === undefined) {
//     second[first[index]["author"]] = [first[index]["title"]];
//   } else {
//     second[first[index]["author"]].push(first[index]["title"]);
//   }
// }

// let first = [[1, 3], [8, 9], [2, 16]];
// let second = [];

// for (let index = 0; index < first.length; index++) {
//   for (let innerindex = 0; innerindex < first[index].length; innerindex++) {
//     second.push(first[index][innerindex]);
//   }
// }

// console.log(second);

// let first = ["a", "b", "c"];
// let second = ["d", "e", "f", "g"];
// let third = [];

// for (let index = 0; index < first.length; index++) {
//   for (let innerindex = 0; innerindex < second.length; innerindex++) {
//     third.push(first[index] + second[innerindex]);
//   }
// }

// console.log(third);

// let first = ["a", "b", "c", "d"];
// let second = [];

// for (let index = 0; index < first.length; index++) {
//   for (let innerindex = 0; innerindex < first.length; innerindex++) {
//     if (first[index] !== first[innerindex]) {
//       second.push(first[index] + first[innerindex]);
//     }
//   }
// }

// console.log(second);

// let first = [2, 8, 3];
// let second = [];

// for (let index = 0; index < first.length; index++) {
//   for (let innerindex = 0; innerindex < first.length; innerindex++) {
//     second.push(first[index] * first[innerindex]);
//   }
// }

// console.log(second);

// let first = [1, 8, 3, 10];
// let max = 0;

// for (let index = 0; index < first.length; index++) {
//   for (let innerindex = 0; innerindex < first.length; innerindex++) {
//     if (index !== innerindex && first[index] + first[innerindex] > max) {
//       max = first[index] + first[innerindex];
//     }
//   }
// }

// console.log(max);

// let first = [2, 5, 3, 1, 0, 7, 11];
// let second = [];

// for (let index = 0; index < first.length; index++) {
//   for (let innerindex = 0; innerindex < first.length; innerindex++) {
//     if (index !== innerindex && first[index] + first[innerindex] === 10) {
//       second.push(first[index]);
//       second.push(first[innerindex]);
//     }
//     if (second.length > 0) {
//       break;
//     }
//   }
// }

// console.log(second);

// let first = [["a", "man"], ["a", "plan"], ["a", "canal"], ["panama"]];
// let string = "";

// for (let index = 0; index < first.length; index++) {
//   for (let innerindex = 0; innerindex < first[index].length; innerindex++) {
//     string = string + first[index][innerindex];
//   }
// }

// console.log(string);

// let first = [8, 23, 0, 44, 1980, 3];
// let second = [];

// for (let index = 0; index < first.length; index++) {
//   if (first[index] < 10) {
//     second.push(first[index]);
//   }
// }

// console.log(second);

// let first = ["winner", "winner", "chicken", "dinner"];
// let second = [];

// for (let index = 0; index < first.length; index++) {
//   if (first[index][0] === "w") {
//     second.push(first[index]);
//   }
// }

// console.log(second);

// let first = [2, 4, 5, 1, 8, 9, 7];
// let second = [];

// for (let index = 0; index < first.length; index++) {
//   if (first[index] % 2 === 0) {
//     second.push(first[index]);
//   }
// }

// console.log(second);

// let first = [1, 2, 3];

// for (let index = 0; index < first.length; index++) {
//   first[index] = first[index] * 3;
// }

// console.log(first);

// let first = ["hello", "goodbye"];

// for (let index = 0; index < first.length; index++) {
//   first[index] = first[index].toUpperCase();
// }
// console.log(first);

// let first = [
//   { name: "Alice", age: 27 },
//   { name: "Blane", age: 16 },
// ];
// let second = [];

// for (let index = 0; index < first.length; index++) {
//   second.push(first[index]["name"]);
// }

// console.log(second);

// let first = [3, 5, 4];

// for (let index = 0; index < first.length; index++) {
//   first[index] = first[index] + 7;
// }

// console.log(first);

// let first = ["elden ring", "sekiro", "dark souls 3"];

// for (let index = 0; index < first.length; index++) {
//   first[index] = first[index][0].toUpperCase();
// }

// console.log(first);

// let first = [
//   { name: "Alice", age: 27 },
//   { name: "Blane", age: 16 },
// ];
// let second = [];

// for (let index = 0; index < first.length; index++) {
//   second.push(first[index]["age"] * 2);
// }

// console.log(second);

// let first = [4, 5, 3, 1];
// let second = [];

// for (let index = 0; index < first.length; index++) {
//   second.push(first[index].toString());
// }

// console.log(second);

// let first = [2, 22, 33, 2, 1];
// let second = [];

// for (let index = 0; index < first.length; index++) {
//   if (first[index] < 20) {
//     second.push(first[index]);
//   }
// }
// console.log(second);

// let first = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];
// let second = {};

// for (let index = 0; index < first.length; index++) {
//   second[first[index][0]] = first[index][1];
// }

// console.log(second);

// let first = [
//   { id: 1, color: "blue", price: 32 },
//   { id: 2, color: "red", price: 12 },
// ];
// let second = {};

// for (let index = 0; index < first.length; index++) {
//   second[first[index]["id"]] = first[index];
// }

// console.log(second);

// #  3. Convert a string into a hash with keys for each letter in the string and values for the number of times the letter appears in the string.
// #     For example, "bookkeeper" becomes {"b" => 1, "o" => 2, "k" => 2, "e" => 3, "p" => 1, "r" => 1}.

// let string = "everquest";
// let hash = {};

// for (let index = 0; index < string.length; index++) {
//   if (hash[string[index]] === undefined) {
//     hash[string[index]] = 1;
//   } else {
//     hash[string[index]]++;
//   }
// }

// console.log(hash);

// Convert a hash into an array of arrays.
// #     For example, {"chair" => 100, "book" => 14} becomes [["chair", 100], ["book", 14]].

// let hash = { Sekiro: 10, "Elden Ring": 10 };
// let array = [];

// Object.entries(hash).forEach(function ([name, rating]) {
//   array.push(name, rating);
// });

// console.log(array);

// Convert a hash into an array of hashes using the keys from each hash as the :id key in each of the array's hashes.
// #     For example, {321 => {name: "Alice", age: 31}, 322 => {name: "Maria", age: 27}} becomes [{id: 321, name: "Alice", age: 31}, {id: 322, name: "Maria", age: 27}].

// let hash = { 321: { class: "Shadowknight", lvl: 58 }, 322: { class: "Magician", lvl: 55 } };
// let array = [];

// Object.entries(hash).forEach(function ([id, stuff]) {
//   let newhash = {};
//   newhash["id"] = id;
//   newhash["stuff"] = stuff;
//   array.push(newhash);
// });
// console.log(array);

// Convert an array of strings into a hash with keys for each string in the array and values for the number of times the string appears in the array.
// #     For example, ["do", "or", "do", "not"] becomes {"do" => 2, "or" => 1, "not" => 1}.

// let array = ["one", "ring", "to", "rule", "them", "one", "ring", "to", "find", "them"];
// let hash = {};

// for (let index = 0; index < array.length; index++) {
//   if (hash[array[index]] === undefined) {
//     hash[array[index]] = 1;
//   } else {
//     hash[array[index]] += 1;
//   }
// }

// console.log(hash);

// let sum = 0;
// let total = 0;

// for (let index = 1; index < 101; index++) {
//   sum = sum + index * index;
//   total = total + index;
// }
// total = total * total;
// console.log(sum);
// console.log(total);

// Convert a hash into a flat array containing all the hash’s keys and values.
// #     For example, {"a" => 1, "b" => 2, "c" => 3, "d" => 4} becomes ["a", 1, "b", 2, "c", 3, "d", 4].

// let hash = { Felwithe: 9, Kelethin: 8, Qeynos: 7, Cabalis: 5 };
// let array = [];

// Object.entries(hash).forEach(function ([city, rating]) {
//   array.push(city, rating);
// });
// console.log(array);

// Combine data from a hash with names and prices and an array of hashes with names, colors, and weights to make a new hash.
// #     For example, {"chair" => 75, "book" => 15} and [{name: "chair", color: "red", weight: 10}, {name: "book", color: "black", weight: 1}] becomes {"chair" => {price: 75, color: "red", weight: 10}, "book" => {price: 15, color: "black", weight: 1}}.

// let hash = { Katana: 400, Sake: 5 };
// let arrayhash = [
//   { name: "Katana", color: "Fine Steel", weight: 10 },
//   { name: "Sake", color: "Clear", weight: 1 },
// ];
// let newhash = {};

// for (let index = 0; index < arrayhash.length; index++) {
//   newhash[arrayhash[index].name] = {price : hash.Katana, color : arrayhash[index]}
// }

// // Object.entries(arrayhash).forEach(function ([key, value]) {
// //   newhash["Katana"] = key;
// // });

// console.log(newhash);

// Convert an array of hashes into a hash of arrays, using the author as keys and the titles as values.
// #     For example, [{author: "Jeff Smith", title: "Bone"}, {author: "George Orwell", title: "1984"}, {author: "Jeff Smith", title: "RASL"}] becomes {"Jeff Smith" => ["Bone", "RASL"], "George Orwell" => ["1984"]}.

// let arrayhash = [
//   { author: "Jeff Smith", title: "Bone" },
//   { author: "George Orwell", title: "1984" },
//   { author: "Jeff Smith", title: "RASL" },
// ];
// let hasharray = {};

// for (let index = 0; index < arrayhash.length; index++) {
//   hasharray["Jeff Smith"] = [arrayhash[0].title, arrayhash[2].title];
//   hasharray["George Orwell"] = [arrayhash[1].title];
// }

// console.log(hasharray);
// Write a function that takes in a number and returns the number times itself. Then run the function and print the result.

// function times(n) {
//   n = n * n;
//   return n;
// }

// console.log(times(5));

// Write a function that takes in three strings and returns a string that combines all three strings with spaces in between.

// function triple(one, two, three) {
//   let combined = one + " " + two + " " + three;
//   return combined;
// }
// console.log(triple("test", "testing", "test!"));

// Write a function that takes in 3 numbers and returns the average (the sum divided by 3.0). Then run the function and print the result.

// function average(numOne, numTwo, numThree) {
//   let avg = (numOne + numTwo + numThree) / 3.0;
//   return avg;
// }
// console.log(average(3, 5, 12));

// function timesplus(num) {
//   num = num * 10 + 30;
//   return num;
// }

// console.log(timesplus(10));

// Make a hash to store prices for 3 different menu items. Then add a new menu item and price and print the hash to see the result.

// let menu = { Elden_Ring: 50, Sekiro: 30, DarkSouls: 14.95 };
// menu["DemonsSouls"] = 9.99;
// console.log(menu);

// Make an array of hashes to store the brand and model for 3 different laptops. Then print out the second laptop's model.

// let classes = [
//   {
//     Shadowknight: "Evil necromancer/warrior combo",
//     Rogue: "Shady backstabbing, sneaky damage dealer",
//     Bard: "Jack of all trades",
//   },
// ];
// console.log(classes[0].Rogue);

// let array = ["shadowknight", "bard", "magician"];
// let caparray = array.map(function (array) {
//   return array.toUpperCase();
// });
// // caparray.push(array[0].toUpperCase());
// console.log(caparray);

// let firstarray = [4, 6, 8];
// let secondarray = [];

// for (let index = 0; index < firstarray.length; index++) {
//   secondarray.push(firstarray[index] + 7);
// }

// console.log(secondarray);

// let first = ["Elden Ring", "Sekiro"];
// let second = [];

// first.forEach(function (word) {
//   second.push(word.length);
// });
// console.log(second);

// let first = ["Everquest", "Dark Souls 3", "Morrowind"];
// let second = [];

// first.forEach(function (word) {
//   second.push(word[0]);
// });

// console.log(second);

// Start with an array of hashes and create a new array of number values from each hash's :age key times 2.
// #     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [54, 32].

// let first = [
//   { name: "Alice", age: 27 },
//   { name: "Blane", age: 16 },
// ];
// let second = [];

// for (let index = 0; index < first.length; index++) {
//   second.push(first[index].age * 2);
// }

// console.log(second);

// let first = [
//   { name: "Alice", age: 27 },
//   { name: "Blane", age: 16 },
// ];

// let second = first.map(function (array) {
//   return array.age * 2;
// });

// console.log(second);

// Start with an array of numbers and compute the sum of all the numbers.
// #     For example, [5, 10, 8, 3] becomes 26.

// let first = [3, 5, 11];
// let sum = 0;

// first.forEach(function (num) {
//   sum = sum + num;
// });

// console.log(sum);

// #  2. Start with an array of strings and combine them all into a single string.
// #     For example, ["volleyball", "basketball", "badminton"] becomes "volleyballbasketballbadminton".

// let array = ["Elden Ring", "Everquest", "Sekiro"];
// let string = "";

// array.forEach(function (word) {
//   string = string + word;
// });

// console.log(string);

// #  3. Start with an array of hashes and compute the sum of the prices (from the :price key).
// #     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes 105.

// let array = [
//   { game: "Everquest", rating: 10 },
//   { game: "Sekiro", rating: 10 },
// ];
// let sum = 0;

// array.forEach(function (hash) {
//   sum = sum + hash.rating;
// });

// console.log(sum);

// #  4. Start with an array of numbers and compute the the minumum number.
// #     For example, [5, 10, 8, 3, 9] becomes 3.

// let array = [4, 2, 7, 11, 1];
// let min = array[0];

// array.forEach(function (num) {
//   if (num < min) {
//     min = num;
//   }
// });

// console.log(min);

// #  5. Start with an array of strings and compute the total length of all the strings.
// #     For example, ["volleyball", "basketball", "badminton"] becomes 29.

// let array = ["Sekiro", "Dark Souls 3", "Everquest"];
// let arrayLength = 0;

// array.forEach(function (word) {
//   arrayLength = arrayLength + word.length;
// });

// console.log(arrayLength);

// #  6. Start with an array of hashes and find the hash with the lowest price (from the :price key).
// #     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "pencil", price: 1}.

// let array = [
//   { name: "chair", price: 100 },
//   { name: "pencil", price: 1 },
//   { name: "book", price: 4 },
// ];
// let hash = {};
// let lowest = array[0].price;

// array.forEach(function (set) {
//   if (set.price < lowest) {
//     lowest = set.price;
//   }
// });

// console.log(lowest);

// #  7. Start with an array of numbers and compute product of all the numbers.
// #     For example, [5, 10, 8, 3] becomes 1200.

// let array = [4, 51, 10];
// let prod = 1;
// array.forEach(function (num) {
//   prod = prod * num;
// });

// console.log(prod);

// let array = [3, 10, 2, 5];
// let max = array[0];

// array.forEach(function (num) {
//   if (max < num) {
//     max = num;
//   }
// });

// console.log(max);

// Use a nested loop to convert an array of number pairs into a single flattened array.
// #     For example, [[1, 3], [8, 9], [2, 16]] becomes [1, 3, 8, 9, 2, 16].

// let array = [
//   [1, 3],
//   [8, 9],
//   [2, 16],
// ];
// let newarray = [];

// for (let index = 0; index < array.length; index++) {
//   for (let innerindex = 0; innerindex < array[index].length; innerindex++) {
//     newarray.push(array[index][innerindex]);
//   }
// }

// console.log(newarray);

// #  2. Use a nested loop with two arrays of strings to create a new array of strings with each string combined.
// #     For example, ["a", "b", "c"] and ["d", "e", "f", "g"] becomes ["ad", "ae", "af", "ag", "bd", "be", "bf", "bg", "cd", "ce", "cf", "cg"].

// let firstArray = ["a", "b", "c"];
// let secondArray = ["d", "e", "f", "g"];
// let shinyNewArray = [];

// for (let index = 0; index < firstArray.length; index++) {
//   for (let innerindex = 0; innerindex < secondArray.length; innerindex++) {
//     shinyNewArray.push(firstArray[index] + secondArray[innerindex]);
//   }
// }

// console.log(shinyNewArray);

// #  3. Use a nested loop with one array of strings to create a new array that contains every combination of each string with every other string in the array.
// #     For example, ["a", "b", "c", "d"] becomes ["ab", "ac", "ad", "ba", "bc", "bd", "ca", "cb", "cd", "da", "db", "dc"].

// let array = ["a", "b", "c", "d"];
// let newArray = [];

// for (let index = 0; index < array.length; index++) {
//   for (let innerindex = 0; innerindex < array.length; innerindex++) {
//     if (array[index] !== array[innerindex]) {
//       newArray.push(array[index] + array[innerindex]);
//     }
//   }
// }

// console.log(newArray);

// #  4. Use a nested loop to find the largest product of any two different numbers within a given array.
// #     For example, [5, -2, 1, -9, -7, 2, 6] becomes 63.

// let array = [5, -2, 1, -9, -7, 2, 6];
// let largest = 0;

// for (let index = 0; index < array.length; index++) {
//   for (let innerindex = 0; innerindex < array.length; innerindex++) {
//     if (array[index] !== array[innerindex] && array[index] * array[innerindex] > largest) {
//       largest = array[index] * array[innerindex];
//     }
//   }
// }

// console.log(largest);

// #  5. Use a nested loop to compute the sum of all the numbers in an array of number pairs.
// #     For example, [[1, 3], [8, 9], [2, 16]] becomes 39.

// let array = [
//   [1, 3],
//   [8, 9],
//   [2, 16],
// ];
// let sum = 0;

// for (let index = 0; index < array.length; index++) {
//   for (let innerindex = 0; innerindex < array[index].length; innerindex++) {
//     sum = sum + array[index][innerindex];
//   }
// }

// console.log(sum);

// Use a nested loop with two arrays of numbers to create a new array of the sums of each combination of numbers.
// #     For example, [1, 2] and [6, 7, 8] becomes [7, 8, 9, 8, 9, 10].

// let arrayOne = [1, 2];
// let arrayTwo = [6, 7, 8];
// let fancyNewArray = [];

// for (let index = 0; index < arrayOne.length; index++) {
//   for (let innerindex = 0; innerindex < arrayTwo.length; innerindex++) {
//     fancyNewArray.push(arrayOne[index] + arrayTwo[innerindex]);
//   }
// }

// console.log(fancyNewArray);

// #  7. Use a nested loop with an array of numbers to compute an array with every combination of products from each number.
// #     For example, [2, 8, 3] becomes [4, 16, 6, 16, 64, 24, 6, 24, 9].

// let array = [2, 8, 3];
// let fancyNewArray = [];

// for (let index = 0; index < array.length; index++) {
//   for (let innerindex = 0; innerindex < array.length; innerindex++) {
//     fancyNewArray.push(array[index] * array[innerindex]);
//   }
// }

// console.log(fancyNewArray);

// #  8. Use a nested loop to find the largest sum of any two different numbers within an array.
// #     For example, [1, 8, 3, 10] becomes 18.

// let array = [2, 4, 10, 7];
// let max = 0;

// for (let index = 0; index < array.length; index++) {
//   for (let innerindex = 0; innerindex < array.length; innerindex++) {
//     if (array[index] !== array[innerindex] && array[index] + array[innerindex] > max) {
//       max = array[index] + array[innerindex];
//     }
//   }
// }

// console.log(max);

// #  9. Use nested loops with an array of numbers to compute a new array containing the first two numbers (from the original array) that add up to the number 10. If there are no two numbers that add up to 10, return false.
// #     For example, [2, 5, 3, 1, 0, 7, 11] becomes [3, 7].

// let array = [2, 4, 6, 3, 9];
// let newArray = [];

// for (let index = 0; index < array.length; index++) {
//   for (let innerindex = 0; innerindex < array.length; innerindex++) {
//     if (array[index] !== array[innerindex] && array[index] + array[innerindex] === 10) {
//       newArray.push(array[index]);
//       newArray.push(array[innerindex]);
//     }
//   }
// }

// console.log(newArray);
// # 10. Use a nested loop to convert an array of string arrays into a single string.
// #     For example, [["a", "man"], ["a", "plan"], ["a", "canal"], ["panama"]] becomes "amanaplanacanalpanama".

// let array = [["a", "man"], ["a", "plan"], ["a", "canal"], ["panama"]];
// let string = "";

// for (let index = 0; index < array.length; index++) {
//   for (let innerindex = 0; innerindex < array[index].length; innerindex++) {
//     string = string + array[index][innerindex];
//   }
// }

// console.log(string);

// Start with an array of numbers and create a new array with each number plus 7.
// #     For example, [1, 2, 3] becomes [8, 9, 10].

// let array = [4, 2, 9];
// let newArray = [];

// array.forEach(function (num) {
//   newArray.push(num + 7);
// });

// console.log(newArray);

// #  5. Start with an array of strings and create a new array with each string's length.
// #     For example, ["hello", "goodbye"] becomes [5, 7].

// let array = ["Sekiro", "Elden Ring", "Everquest"];
// let newArray = [];

// array.forEach(function (word) {
//   newArray.push(word.length);
// });

// console.log(newArray);

// #  6. Start with an array of hashes and create a new array of number values from each hash's :age key.
// #     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [27, 16].

// let array = [
//   { game: "Elden Ring", rating: 10 },
//   { game: "Everquest", rating: 10 },
// ];
// let newArray = [];

// for (let index = 0; index < array.length; index++) {
//   newArray.push(array[index].rating);
// }

// console.log(newArray);

// #  7. Start with an array of numbers and create a new array with each number divided by 2.
// #     For example, [1, 2, 3] becomes [0.5, 1.0, 1.5].

// let array = [3, 5, 2];
// let newArray = [];

// for (let index = 0; index < array.length; index++) {
//   newArray.push(array[index] / 2);
// }

// console.log(newArray);

// #  8. Start with an array of strings and create a new array with each string's first letter only.
// #     For example, ["hello", "goodbye"] becomes ["h", "g"].

// let array = ["Dark Souls", "Everquest", "Morrowind"];
// let newArray = [];

// array.forEach(function (word) {
//   newArray.push(word[0].toLowerCase());
// });

// console.log(newArray);

// Start with an array of strings and create a new array with only the strings that start with the letter "w".
// #     For example, ["winner", "winner", "chicken", "dinner"] becomes ["winner", "winner"].

// let array = ["Elden Ring", "Dark Souls", "everquest"];
// let newArray = [];

// array.forEach(function (word) {
//   if (word[0].toLowerCase() === "e") {
//     newArray.push(word.toUpperCase());
//   }
// });

// console.log(newArray);

// #  3. Start with an array of hashes and create a new array with only the hashes with prices greater than 5 (from the :price key).
// #     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "chair", price: 100}].

// let array = [
//   { game: "Elden Ring", rating: 10 },
//   { game: "Sekiro", rating: 10 },
//   { game: "Everquest", rating: 10 },
//   { game: "shit game", rating: 2 },
// ];

// let newArray = [];

// for (let index = 0; index < array.length; index++) {
//   if (array[index].rating > 5) {
//     newArray.push(array[index]);
//   }
// }

// console.log(newArray);

// #  4. Start with an array of numbers and create a new array with only the even numbers.
// #     For example, [2, 4, 5, 1, 8, 9, 7] becomes [2, 4, 8].

// let array = [2, 5, 3, 2, 6, 9];
// let newArray = [];

// array.forEach(function (num) {
//   if (num % 2 === 0) {
//     newArray.push(num);
//   }
// });

// console.log(newArray);

// #  5. Start with an array of strings and create a new array with only the strings shorter than 4 letters.
// #     For example, ["a", "man", "a", "plan", "a", "canal", "panama"] becomes ["a", "man", "a", "a"].

// let array = ["a", "man", "a", "plan", "a", "canal", "panama"];
// let newArray = [];

// array.forEach(function (word) {
//   if (word.length < 4) {
//     newArray.push(word);
//   }
// });

// console.log(newArray);

// #  6. Start with an array of hashes and create a new array with only the hashes with names shorter than 6 letters (from the :name key).
// #     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "chair", price: 100}, {name: "book", price: 4}].

// let array = [
//   { name: "chair", price: 100 },
//   { name: "pencil", price: 1 },
//   { name: "book", price: 4 },
// ];

// let newArray = [];

// array.forEach(function (hash) {
//   if (hash.name.length < 6) {
//     newArray.push(hash);
//   }
// });

// console.log(newArray);

// #  7. Start with an array of numbers and create a new array with only the numbers less than 10.
// #     For example, [8, 23, 0, 44, 1980, 3] becomes [8, 0, 3].

// let array = [3, 66, 11, 1, -2];

// let newArray = [];

// array.forEach(function (num) {
//   if (num < 10) {
//     newArray.push(num);
//   }
// });

// console.log(newArray);

// #  8. Start with an array of strings and create a new array with only the strings that don't start with the letter "b".
// #     For example, ["big", "little", "good", "bad"] becomes ["little", "good"]

// let array = ["big", "little", "good", "bad"];
// let newArray = [];

// array.forEach(function (word) {
//   if (word[0] !== "b") {
//     newArray.push(word);
//   }
// });

// console.log(newArray);

// Start with an array of numbers and compute the sum of all the numbers.
// #     For example, [5, 10, 8, 3] becomes 26.

// let array = [2, 4, 22, 10];
// let sum = 0;

// array.forEach(function (num) {
//   sum = sum + num;
// });

// console.log(sum);

// #  2. Start with an array of strings and combine them all into a single string.
// #     For example, ["volleyball", "basketball", "badminton"] becomes "volleyballbasketballbadminton".

// let array = ["everquest", "sekiro", "elden ring"];
// let string = "";

// array.forEach(function (word) {
//   string = string + word;
// });

// console.log(string);

// #  3. Start with an array of hashes and compute the sum of the prices (from the :price key).
// #     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes 105.

// let array = [
//   { name: "chair", price: 100 },
//   { name: "pencil", price: 1 },
//   { name: "book", price: 4 },
// ];
// let sum = 0;

// array.forEach(function (hash) {
//   sum = sum + hash.price;
// });

// console.log(sum);

// #  4. Start with an array of numbers and compute the the minumum number.
// #     For example, [5, 10, 8, 3, 9] becomes 3.

// let array = [3, 4, 10, 1, 5];
// let min = array[0];

// array.forEach(function (num) {
//   if (num < min) {
//     min = num;
//   }
// });

// console.log(min);

// #  5. Start with an array of strings and compute the total length of all the strings.
// #     For example, ["volleyball", "basketball", "badminton"] becomes 29.

// let array = ["elden ring", "dark souls 3", "sekiro"];
// let sum = 0;
// array.forEach(function (word) {
//   sum = sum + word.length;
// });

// console.log(sum);
// #  6. Start with an array of hashes and find the hash with the lowest price (from the :price key).
// #     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "pencil", price: 1}.

// let array = [
//   { name: "chair", price: 100 },
//   { name: "pencil", price: 1 },
//   { name: "book", price: 4 },
// ];
// let lowestPrice = array[0];

// for (let index = 0; index < array.length; index++) {
//   if (array[index].price < lowestPrice.price) {
//     lowestPrice = array[index];
//   }
// }

// console.log(lowestPrice);

// #  7. Start with an array of numbers and compute product of all the numbers.
// #     For example, [5, 10, 8, 3] becomes 1200.

// let array = [2, 5, 3, 10];
// let product = 1;

// array.forEach(function (num) {
//   product = product * num;
// });

// console.log(product);

// #  8. Start with an array of strings and combine them all into a single string, separated by dashes.
// #     For example, ["volleyball", "basketball", "badminton"] becomes "-volleyball-basketball-badminton-".

// let array = ["everquest", "factorio", "dyson sphere program"];
// let string = "-";

// array.forEach(function (word) {
//   string = string + word + "-";
// });

// console.log(string);

// 1. Start with an array of numbers and create a new array with only the numbers less than 20.
// #     For example, [2, 32, 80, 18, 12, 3] becomes [2, 18, 12, 3].

// let array = [2, 3, 22, 10];
// let newArray = [];

// array.forEach(function (num) {
//   if (num < 20) {
//     newArray.push(num);
//   }
// });

// console.log(newArray);

// #  2. Start with an array of strings and create a new array with only the strings that start with the letter "w".
// #     For example, ["winner", "winner", "chicken", "dinner"] becomes ["winner", "winner"].

// let array = ["winner", "winner", "chicken", "dinner"];
// let newArray = [];

// for (let index = 0; index < array.length; index++) {
//   if (array[index][0] === "w") {
//     newArray.push(array[index]);
//   }
// }

// console.log(newArray);

// #  3. Start with an array of hashes and create a new array with only the hashes with prices greater than 5 (from the :price key).
// #     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "chair", price: 100}].

// let array = [
//   { name: "chair", price: 100 },
//   { name: "pencil", price: 1 },
//   { name: "book", price: 4 },
// ];
// let newArray = [];

// array.forEach(function (hash) {
//   if (hash.price > 5) {
//     newArray.push(hash);
//   }
// });

// console.log(newArray);

// #  4. Start with an array of numbers and create a new array with only the even numbers.
// #     For example, [2, 4, 5, 1, 8, 9, 7] becomes [2, 4, 8].

// #  5. Start with an array of strings and create a new array with only the strings shorter than 4 letters.
// #     For example, ["a", "man", "a", "plan", "a", "canal", "panama"] becomes ["a", "man", "a", "a"].

// #  6. Start with an array of hashes and create a new array with only the hashes with names shorter than 6 letters (from the :name key).
// #     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "chair", price: 100}, {name: "book", price: 4}].

// #  7. Start with an array of numbers and create a new array with only the numbers less than 10.
// #     For example, [8, 23, 0, 44, 1980, 3] becomes [8, 0, 3].

// #  8. Start with an array of strings and create a new array with only the strings that don't start with the letter "b".
// #     For example, ["big", "little", "good", "bad"] becomes ["little", "good"].

// Given a string, write a function that returns true if the “$” character is contained within the string or false if it is not.

// Input: “i hate $ but i love money i know i know im crazy”
// Output: true

// Input: “abcdefghijklmnopqrstuvwxyz”
// Output: false

// let string = "I hate but i love money i know i know im crazy";
// let $indicator = false;

// for (let index = 0; index < string.length; index++) {
//   if (string[index] === "$") {
//     $indicator = true;
//   }
// }

// console.log($indicator);

// Given two arrays of strings, return a new string that contains every combination of a string from the first array concatenated with a string from the second array.

// Input: ["a", "b", "c"], ["d", "e", "f", "g"]
// Output: ["ad", "ae", "af", "ag", "bd", "be", "bf", "bg", "cd", "ce", "cf", "cg"]

// let firstArray = ["a", "b", "c"];
// let secondArray = ["d", "e", "f", "g"];
// let newArray = [];
// for (let index = 0; index < firstArray.length; index++) {
//   for (let innerindex = 0; innerindex < secondArray.length; innerindex++) {
//     newArray.push(firstArray[index] + secondArray[innerindex]);
//   }
// }

// console.log(newArray);

// Given an array of numbers, return a new array containing just two numbers (from the original array) that add up to the number 10. If there are no two numbers that add up to 10, return false.

// Specifically use nested loops to solve this exercise even though there are other approaches as well.

// Input: [2, 5, 3, 1, 0, 7, 11]
// Output: [3, 7]

// Input: [1, 2, 3, 4, 5]
// Output: false (While 1, 2, 3, and 4 altogether add up to 10, we're seeking just one pair of numbers.)

// let array = [2, 5, 3, 1, 0, 7, 11];
// let array = [1, 2, 3, 4, 5];
// let newArray = [false];

// for (let index = 0; index < array.length; index++) {
//   for (let innerindex = 0; innerindex < array.length; innerindex++) {
//     if (array[index] !== array[innerindex] && newArray.length === 1 && array[index] + array[innerindex] === 10) {
//       newArray = newArray.slice(0, newArray[0]);
//       newArray.push(array[index]);
//       newArray.push(array[innerindex]);
//     }
//   }
// }
// console.log(newArray);

// Find the largest product of any two numbers within a given array.

// Input: [5, -2, 1, -9, -7, 2, 6]
// Output: 63 (-9 * -7)

// let array = [5, -2, 1, -9, -7, 2, 6];
// let largest = 0;

// array.forEach(function (num) {
//   array.forEach(function (innerNum) {
//     if (num !== innerNum && num * innerNum > largest) {
//       largest = num * innerNum;
//     }
//   });
// });

// console.log(largest);

// The Collatz Conjecture or 3x+1 problem can be summarized as follows:

// Take any positive integer n. If n is even, divide n by 2 to get n / 2. If n is odd, multiply n by 3 and add 1 to get 3n + 1. Repeat the process indefinitely. The conjecture states that no matter which number you start with, you will always reach 1 eventually.

// Given a number n, return the number of steps required to reach 1.

// Examples
// Starting with n = 12, the steps would be as follows:

// 12
// 6
// 3
// 10
// 5
// 16
// 8
// 4
// 2
// 1

// Resulting in 9 steps. So for input n = 12, the return value would be 9.

// Activity

// let n = 19;
// let steps = 0;

// while (n !== 1) {
//   if (n % 2 === 0) {
//     n = n / 2;
//     steps += 1;
//   } else if (n % 2 !== 0) {
//     n = n * 3 + 1;
//     steps += 1;
//   }
// }

// console.log(steps);

// Given an array of numbers, return true if the array is a "100 Coolio Array", or false if it is not.

// A "100 Coolio Array" meets the following criteria:

// Its first and last numbers add up to 100,
// Its second and second-to-last numbers add up to 100,
// Its third and third-to-last numbers add up to 100,
// and so on and so forth.

// Here are examples of 100 Coolio Arrays:

// [1, 2, 3, 97, 98, 99]
// [90, 20, 70, 100, 30, 80, 10]

// let array = [1, 2, 3, 97, 98, 99];
// let array = [90, 20, 70, 100, 30, 80, 10];

// let index = 0;
// let reverseIndex = array.length - 1;

// while (index < array.length) {
//   if (array[index] + array[reverseIndex] === 100) {
//     index += 1;
//     reverseIndex -= 1;
//     if (index === array.length) {
//       console.log("true");
//     }
//   } else if (index === reverseIndex && array[index] === 100) {
//     console.log("true");
//     return true;
//   } else {
//     console.log("false");
//     return false;
//   }
// }
