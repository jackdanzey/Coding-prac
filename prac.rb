# def sum(numbers)
#   sum = 0
#   numbers.each do |numbers|
#     sum = sum + numbers
#   end
#   return sum
# end

# p sum([2, 4, 7])

# def smallest(array)
#   smallboi = array[0]
#   array.each do |string|
#     if string.length < smallboi.length
#       smallboi = string
#     end
#   end
#   puts smallboi
# end

# smallest(["test", "testing", "testtesttest!", "t"])

# def reverse(array)
#   reversed = []
#   index = array.length - 1
#   while index >= 0
#     reversed << array[index]
#     index -= 1
#   end
#   puts reversed
# end

# reverse([2, 7, 42])

# def count(array)
#   num_count = 0
#   array.each do |word|
#     if word[0] == "a"
#       num_count += 1
#     end
#   end
#   puts num_count
# end

# count(["apple", "orange", "apricot", "grapes"])

# def join(array)
#   string = ""
#   array.each do |word|
#     string = string + word + ","
#   end
#   puts string
# end

# join(["test", "testing", "testtest"])

# def multiply(array)
#   product = array[0]
#   index = 0
#   array.each do |number|
#     product = product * number
#   end

#   puts product
# end

# multiply([2, 4, 10])

# def twosmallbois(array)
#   smallest_one = 100000
#   smallest_two = 100000
#   array.each do |num|
#     if num < smallest_one
#       smallest_one = num
#     end
#   end
#   array.each do |num|
#     if num < smallest_two && num != smallest_one
#       smallest_two = num
#     end
#   end
#   puts smallest_one
#   puts smallest_two
# end

# twosmallbois([4, 22, 10, 5, 15])
# Write a function that prints out every number from 1 to N, with the following exceptions:

# If the number is divisible by 3, print out "FIZZ".
# If the number is divisible by 5, print out "BUZZ".
# If the number is divisible by both 3 and 5, print out "FIZZBUZZ".

# def fizz(n)
#   if n % 3 == 0 && n % 5 == 0
#     print "FIZZBUZZ"
#   elsif n % 5 == 0
#     print "BUZZ"
#   elsif n % 3 == 0
#     print "FIZZ"
#   else
#     print n
#   end
# end

# print fizz(5)

# If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

# Find the sum of all the multiples of 3 or 5 below 1000.

# sum = 0
# index = 1
# indextwo = 1

# while (3 * index) < 1000 && (5 * indextwo) < 1000
#   if (3 * index) < 1000
#     sum = sum + (3 * index)
#     index += 1
#   end
#   if (5 * indextwo) < 1000
#     sum = sum + (5 * indextwo)
#     indextwo += 1
#   end
# end

# print sum

# Write a function that gives the Nth number of the Fibonacci Sequence. The Fibonacci sequence begins with 0 and 1, and every number thereafter is the sum of the previous two numbers. So the sequence goes like this:

# 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, and so on until infinity...

# Input: 9
# Output: 21 (as this is the 9th number of the Fibonacci Sequence)

# def fibo(n)
#   index = 0
#   indextwo = 1
#   (n - 1).times do
#     indextwo = index + indextwo
#     index = indextwo - index
#   end
#   return index
# end

# print fibo(11)

# Given a string, write a function that returns true if it is a palindrome, and false if it is not. (A palindrome is a word that reads the same both forward and backward.)

# Input: “racecar”
# Output: true

# Input: “baloney”
# Output: false

# def palindrome(string)
#   reverse = string.reverse
#   index = 0

#   while index < string.length
#     if string[index] != reverse[index]
#       return false
#     else
#       index += 1
#     end
#   end
#   return true
# end

# print palindrome("racecar")

# Given an array of strings, return a hash that provides of a count of how many times each string occurs.

# Input: ["Dewey", "Truman", "Dewey", "Dewey", "Truman", "Truman", "Dewey", "Truman", "Truman", "Dewey", "Dewey"]

# Output: {"Dewey" => 6, "Truman" => 5}

# Explanation: "Dewey" occurs 6 times in the array, while "Truman" occurs 5 times.

# array = ["Dewey", "Truman", "Dewey", "Dewey", "Truman", "Truman", "Dewey", "Truman", "Truman", "Dewey", "Dewey"]
# votes = {}
# index = 0

# while index < array.length
#   if !votes[array[index]]
#     votes[array[index]] = 1
#     index += 1
#   else
#     votes[array[index]] += 1
#     index += 1
#   end
# end

# print votes

# Given a hash, where the keys are strings representing food items, and the values are numbers representing the price of each food, return the amount someone would pay if they'd order one of each food from the entire menu.

# Input: {"hot dog" => 2, "hamburger" => 3, "steak sandwich" => 5, "fries" => 1, "cole slaw" => 1, "soda" => 2}

# Output: 14

# Explanation: If someone would order one of everything on the menu, they'd pay a total of 14 (the sum of all the hash's values).

# food = { "hot dog" => 2, "hamburger" => 3, "steak sandwich" => 5, "fries" => 1, "cole slaw" => 1, "soda" => 2 }
# total = 0
# index = 0

# food.each do |key, value|
#   total = total + value
#   index += 1
# end
# puts total

# Given a hash, return a flat array containing all the hash’s keys and values.

# Input: {“a” => 1, “b” => 2, “c” => 3, “d” => 4}
# Output: [“a”, 1, “b”, 2, “c”, 3, “d”, 4]

# hash = { "a" => 1, "b" => 2, "c" => 3, "d" => 4 }
# array = []
# hash.each do |key, value|
#   array << key
#   array << value
# end

# p array
