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

# Given two strings, return true if they are anagrams of each other, and false if they are not. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

# Do not use any built-in sort methods.

# Input: “silent”, “listen”
# Output: true

# Input: “frog”, “bear”
# Output: false

# string_one = "frog"
# string_two = "bear"
# index = 0
# letter_hash = {}
# output = "true"

# while index < string_one.length
#   if !letter_hash[string_one[index]]
#     letter_hash[string_one[index]] = 1
#     index += 1
#   end
# end
# index = 0
# while index < string_two.length
#   if !letter_hash[string_two[index]]
#     output = "false"
#     print output
#     return
#   else
#     index += 1
#   end
#   if index == string_two.length
#     print output
#   end
# end

# Given an array of numbers, return true if the array is a "100 Coolio Array", or false if it is not.

# A "100 Coolio Array" meets the following criteria:

# Its first and last numbers add up to 100,
# Its second and second-to-last numbers add up to 100,
# Its third and third-to-last numbers add up to 100,
# and so on and so forth.

# Here are examples of 100 Coolio Arrays:

# [1, 2, 3, 97, 98, 99]
# [90, 20, 70, 100, 30, 80, 10]

# coolio = [1, 2, 3, 100, 97, 98, 99]
# index = 0
# reverse_index = coolio.length - 1
# output = "true"
# while index < reverse_index
#   if coolio[index] + coolio[reverse_index] != 100
#     output = "false"
#     break
#   else
#     index += 1
#     reverse_index -= 1
#   end
# end

# print output

# Write a function to find the longest common prefix string amongst an array of strings.

# If there is no common prefix, return an empty string "".

# Example 1:

# Input: ["flower","flow","flight"]
# Output: "fl"
# Example 2:

# Input: ["dog","racecar","car"]
# Output: ""
# Explanation: There is no common prefix among the input strings.
# Note:

# All given inputs are in lowercase letters a-z.

# def common(a, b, c)
#   index = 0
#   output = ""
#   while index < a.length
#     if a[index] == b[index] && a[index] == c[index]
#       output = output + a[index]
#       index += 1
#     else
#       return output
#     end
#   end
# end

# print common("dog", "racecar", "car")

# Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

# Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
# - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

# def timeConversion(s)
#   if s[0] == "1" && s[1] == "2" && s[s.length - 2] == "A"
#     s[0] = "0"
#     s[1] = "0"
#     return s[0..7]
#   end
#   if s[s.length - 2] == "P"
#     if s[0] == "1" && s[1] == "2"
#       s[0] = "0"
#       s[1] = "0"
#     elsif s[0] == "1"
#       n = s[0] + s[1]
#     else
#       n = s[1]
#     end
#     n = n.to_i + 12
#     n = n.to_s
#     s[0] = n[0]
#     s[1] = n[1]
#   end
#   return s[0..7]
# end

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

# Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

# def miniMaxSum(arr)
#   arr = arr.sort
#   min = arr[0..3].sum
#   max = arr[1..4].sum
#   print min.to_s + " " + max.to_s
# end

# Sam's house has an apple tree and an orange tree that yield an abundance of fruit. Using the information given below, determine the number of apples and oranges that land on Sam's house.

# In the diagram below:

# The red region denotes the house, where s is the start point, and t is the endpoint. The apple tree is to the left of the house, and the orange tree is to its right.
# Assume the trees are located on a single point, where the apple tree is at point a, and the orange tree is at point b.
# When a fruit falls from its tree, it lands d units of distance from its tree of origin along the x-axis. *A negative value of  means the fruit fell d units to the tree's left, and a positive value of d means it falls d units to the tree's right. *
# Apple and orange(2).png

# Given the value of  for  apples and  oranges, determine how many apples and oranges will fall on Sam's house (i.e., in the inclusive range )?

# def countApplesAndOranges(s, t, a, b, apples, oranges)
#   app = []
#   orr = []
#   app_count = 0
#   orr_count = 0
#   apples.each do |apple|
#      app << (a + apple)
#      if (a + apple) >= s && (a + apple) <= t
#        app_count += 1
#      end
#   end
#   oranges.each do |orange|
#       orr << (b + orange)
#       if (b + orange) >= s && (b + orange) <= t
#         orr_count += 1
#       end
#     end
#   puts app_count
#   puts orr_count
# end

# Given a hash, where the keys are strings representing food items, and the values are numbers representing the price of each food, return the amount someone would pay if they'd order one of each food from the entire menu.

# Input: {"hot dog" => 2, "hamburger" => 3, "steak sandwich" => 5, "fries" => 1, "cole slaw" => 1, "soda" => 2}

# Output: 14

# Explanation: If someone would order one of everything on the menu, they'd pay a total of 14 (the sum of all the hash's values).

# food = { "hot dog" => 2, "hamburger" => 3, "steak sandwich" => 5, "fries" => 1, "cole slaw" => 1, "soda" => 2 }
# total = 0

# for key, value in food
#   total += value
# end
# puts total

# Given a hash, create a new hash that has the keys and values switched.

# Input: {"a" => 1, "b" => 2, "c" => 3}
# Output: {1 => "a", 2 => "b", 3 => "c"}

# letter_keys = { "a" => 1, "b" => 2, "c" => 3 }
# number_keys = {}
# index = 0
# for key, value in letters
#   numbers[value] = key
# end
# puts numbers

# Given an array of hashes that represent a list of social media posts, return a new array that only contains the posts that have at least 1000 likes.

# Input: [
# {title: 'Me Eating Pizza', submitted_by: "Joelle P.", likes: 1549},
# {title: 'i never knew how cool i was until now', submitted_by: "Lyndon Johnson", likes: 3},
# {title: 'best selfie evar!!!', submitted_by: "Patti Q.", likes: 1092},
# {title: 'Mondays are the worst', submitted_by: "Aunty Em", likes: 644}
# ]

# Output: [
# {title: 'Me Eating Pizza', submitted_by: "Joelle P.", likes: 1549},
# {title: 'best selfie evar!!!', submitted_by: "Patti Q.", likes: 1092},
# ]

# posts = [
#   { title: "Me Eating Pizza", submitted_by: "Joelle P.", likes: 1549 },
#   { title: "i never knew how cool i was until now", submitted_by: "Lyndon Johnson", likes: 3 },
#   { title: "best selfie evar!!!", submitted_by: "Patti Q.", likes: 1092 },
#   { title: "Mondays are the worst", submitted_by: "Aunty Em", likes: 644 },
# ]

# pop_posts = []

# for post in posts
#   if post[:likes] >= 1000
#     pop_posts << post
#   end
# end

# puts pop_posts

# Given an array of social media posts and a hash of users, return a list of posts (as an array of hashes) that replaces the submitted_by id number as the person's actual name.

# For example, given this array of posts (note that the submitted_by is an id number):

# [
# {title: 'Me Eating Pizza', submitted_by: 231, likes: 1549},
# {title: 'i never knew how cool i was until now', submitted_by: 989, likes: 3},
# {title: 'best selfie evar!!!', submitted_by: 111, likes: 1092},
# {title: 'Mondays are the worst', submitted_by: 403, likes: 644}
# ]

# And this hash of users (the key is the id number and the value is the user's real name):

# users = {403 => "Aunty Em", 231 => "Joelle P.", 989 => "Lyndon Johnson", 111 => "Patti Q."}

# Return the array of posts as follows:

# [
# {title: 'Me Eating Pizza', submitted_by: "Joelle P.", likes: 1549},
# {title: 'i never knew how cool i was until now', submitted_by: "Lyndon Johnson", likes: 3},
# {title: 'best selfie evar!!!', submitted_by: "Patti Q.", likes: 1092},
# {title: 'Mondays are the worst', submitted_by: "Aunty Em", likes: 644}
# ]

# posts = [
#   { title: "Me Eating Pizza", submitted_by: 231, likes: 1549 },
#   { title: "i never knew how cool i was until now", submitted_by: 989, likes: 3 },
#   { title: "best selfie evar!!!", submitted_by: 111, likes: 1092 },
#   { title: "Mondays are the worst", submitted_by: 403, likes: 644 },
# ]
# users = { 403 => "Aunty Em", 231 => "Joelle P.", 989 => "Lyndon Johnson", 111 => "Patti Q." }

# posts.each do |post|
#   post[:submitted_by] = users[post[:submitted_by]]
# end

# puts posts
