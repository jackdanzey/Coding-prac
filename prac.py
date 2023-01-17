# It’s...not really an adventure game...#Ver 1.0
# Your village is being attacked by 'a germanic tribe' and you need to run to the stores and get the right things to save your village, and probably some good looking girl or boy you want to marry. All prices in gold pieces excl. VAT... chop chop!! ze germanz are coming!
# The code should allow you to get 1 thing from each store and each item you get should be removed from the store inventory, then do same for next store...
# one way to buy by typing the key 'newt' in an input box...or something
# at end you should print the 'items' you have taken..in this version you don't have to pay for stuff or add it up
# ver 1.2 add ability to exit a store without buying and go to next by typing 'exit', and to exit if a nonexistant item is bought(typed)
# Add purse with 1000 gold pieces and payment for the items during or at end of code and show a message about total cost and how much gold you have left
# ver 1.4 random bug fix, ' browser compatability', refactoring code... basically being lazy ..stop scrolling TikTok/Facebook! ;-)
# Ver 1.5 print inventory before and after purchases as one department_store of stuff(combine inventories from all stores into one...pretend Big Biz bought all the local stores, and want constant reporting for inventory management...)
# as in all games there is a special way to do this that actually makes money and solves the problem...can you find 'them'? Do you know why? May require knowledge of actual python 'lore'

# freelancers = {'name': 'freelancing Shop', 'brian': 70, 'black knight': 20,
#                'biccus diccus': 100, 'grim reaper': 500, 'minstrel': -15}
# antiques = {'name': 'Antique Shop', 'french castle': 400,
#             'wooden grail': 3, 'scythe': 150, 'catapult': 75, 'german joke': 5}
# pet_shop = {'name': 'Pet Shop', 'blue parrot': 10,
#             'white rabbit': 5, 'newt': 2}
# department_store = {}

# for department in (freelancers, antiques, pet_shop):
#     department_store.update(department)

# department_store.pop('name')
# print('Morning inventory of stores', sorted(department_store.items()))
# print('-----------------')
# cart = {}
# purse = 1000
# buy_items1 = ''

# for shop in (freelancers, antiques, pet_shop):
#     buy_item = input(
#         f'Welcome to {shop["name"]}! (type exit to exit store) what do you want to buy: {shop}').lower()
#     if buy_item == 'exit':
#         print('exiting shop...')
#         continue
#     if buy_item not in shop:
#         print('This item does not exist! Moving on...')
#         continue
#     buy_items1 = buy_items1 + f'{buy_item}:{shop[buy_item]} Gp, '
#     cart.update({buy_item: shop.pop(buy_item)})
#     total_sum = sum(cart.values())

# print(f'You Purchased {buy_items1}. Your total is {total_sum} Gp. Your purse now has {purse - total_sum} Gp. Have a nice day of mayhem!')

# department_store_after = {**freelancers, **antiques, **pet_shop}
# department_store_after.pop('name')
# print('-----------------')
# print('Evening inventory of stores', sorted(department_store_after.items()))

# Given a square matrix, calculate the absolute difference between the sums of its diagonals.

# def diagonalDifference(arr):
#     index = 0
#     first = 0
#     second = 0
#     inner = len(arr) - 1
#     while index < len(arr):
#         first = first + arr[index][index]
#         second = second + arr[index][inner]
#         inner -= 1
#         index += 1
#     return abs(first - second)


# print(diagonalDifference([[1, 2, 3], [3, 4, 5], [6, 7, 8]]))

# Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

# def plusMinus(arr):
#     index = 0
#     dic = {'pos' : 0, 'neg' : 0, 'zero' : 0}
#     while index < len(arr):
#         if arr[index] > 0:
#             dic['pos'] += 1
#             index += 1
#         elif arr[index] < 0:
#             dic['neg'] += 1
#             index += 1
#         elif arr[index] == 0:
#             dic['zero'] += 1
#             index += 1
#     print(round(dic['pos'] / len(arr), 6))
#     print(round(dic['neg'] / len(arr), 6))
#     print(round(dic['zero'] / len(arr), 6))

# Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

# You must implement a solution with a linear runtime complexity and use only constant extra space.

# class Solution:
#     def singleNumber(self, nums: List[int]) -> int:
#         numdict = {}
#         for x in nums:
#             if x in numdict:
#                 numdict[x] += 1
#             else:
#                 numdict[x] = 1
#         return min(numdict, key=numdict.get)

# Given two strings, return true if they are anagrams of each other, and false if they are not. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

# Do not use any built-in sort methods.

# Input: “silent”, “listen”
# Output: true

# Input: “frog”, “bear”
# Output: false

# inputone = 'iceman'
# inputtwo = 'cinema'
# count = 0
# output = False
# for letter in inputone:
#     for inner in inputtwo:
#         if letter == inner:
#             count += 1
#             if count == len(inputone):
#                 output = True

# print(output)

# Given two sorted arrays, merge the second array into the first array while ensuring that the first array remains sorted. Do not use any built-in sort methods.

# Input :
# A : [1, 5, 8]
# B : [6, 9]

# Modified A : [1, 5, 6, 8, 9]

# first = [1, 5, 8]
# second = [6, 9]
# index = 0

# while index < len(second):
#     if second[index] > first[index]:
#         first.insert((index + 1), second[index])
#         index += 1
#     else:
#         index += 1

# print(first)
# print(second)
# print('test')

# Given an array of strings, return a hash that provides of a count of how many times each string occurs.

# Input: ["Dewey", "Truman", "Dewey", "Dewey", "Truman", "Truman", "Dewey", "Truman", "Truman", "Dewey", "Dewey"]

# Output: {"Dewey" => 6, "Truman" => 5}

# Explanation: "Dewey" occurs 6 times in the array, while "Truman" occurs 5 times.

# prez = ["Dewey", "Truman", "Dewey", "Dewey", "Truman",
#         "Truman", "Dewey", "Truman", "Truman", "Dewey", "Dewey"]
# prezcount = {}

# for guy in prez:
#     if guy not in prezcount:
#         prezcount[guy] = 1
#     else:
#         prezcount[guy] += 1

# print(prezcount)


# food = {"hot dog": 2, "hamburger": 3, "steak sandwich": 5,
#         "fries": 1, "cole slaw": 1, "soda": 2}
# total = 0

# for key, value in food.items():
#     total += value

# print(total)

# Given a hash, create a new hash that has the keys and values switched.

# Input: {"a" => 1, "b" => 2, "c" => 3}
# Output: {1 => "a", 2 => "b", 3 => "c"}

# letterKeys = {'a': 1, 'b': 2, 'c': 3}
# numberKeys = {}

# for key, value in letterKeys.items():
#     numberKeys[value] = key
# print(numberKeys)

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

# check the first letter of the first word against the first letter of the second word
# check the first letter of the first word against the first letter of the third word, and so on
#
# def prefix(array):
#     index = 0
#     inner = 1
#     output = ''
#     while index < len(min(array)):
#         while inner < len(array):
#             if array[0][index] == array[inner][index]:
#                 inner += 1
#             else:
#                 return output
#         output = output + array[0][index]
#         index += 1
#         inner = 1
#     return output


# print(prefix(["flower", "flow", "flight"]))

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
#     {'title': "Me Eating Pizza", 'submitted_by': "Joelle P.", 'likes': 1549},
#     {'title': "i never knew how cool i was until now",
#         'submitted_by': "Lyndon Johnson", 'likes': 3},
#     {'title': "best selfie evar!!!", 'submitted_by': "Patti Q.", 'likes': 1092},
#     {'title': "Mondays are the worst", 'submitted_by': "Aunty Em", 'likes': 644},
# ]

# pop_posts = []

# for post in posts:
#     if post['likes'] >= 1000:
#         pop_posts.append(post)

# print(pop_posts)

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
#     {'title': 'Me Eating Pizza', 'submitted_by': 231, 'likes': 1549},
#     {'title': 'i never knew how cool i was until now',
#         'submitted_by': 989, 'likes': 3},
#     {'title': 'best selfie evar!!!', 'submitted_by': 111, 'likes': 1092},
#     {'title': 'Mondays are the worst', 'submitted_by': 403, 'likes': 644}
# ]
# users = {403: "Aunty Em", 231: "Joelle P.",
#          989: "Lyndon Johnson", 111: "Patti Q."}

# for p in posts:
#     p['submitted_by'] = users[p['submitted_by']]
# print(posts)

# Given a list of books provided in this format:

# [
# {title: "The Lord of the Rings", author: "J. R. R. Tolkien", year: 1954 },
# {title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
# {title: "1984", author: "George Orwell", year: 1949 },
# {title: "Go Set a Watchman", author: "Harper Lee", year: 2015 },
# {title: "The Hobbit", author: "J. R. R. Tolkien", year: 1937 },
# {title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
# {title: "The Two Towers", author: "J. R. R. Tolkien", year: 1954 }
# ]

# return the data in this new author-centric format:

# { "J. R. R. Tolkien" => [
# {title: "The Lord of the Rings", year: 1954 },
# {title: "The Hobbit", year: 1937 },
# {title: "The Two Towers", year: 1954 }
# ],
# "Harper Lee" => [
# {title: "To Kill a Mockingbird", year: 1960 },
# {title: "Go Set a Watchman", year: 2015 }
# ],
# "George Orwell" => [
# {title: "1984", year: 1949 }
# ],
# "F. Scott Fitzgerald" => [
# {title: "The Great Gatsby", year: 1925 }
# ]
# }

# books = [
#     {'title': "The Lord of the Rings", 'author': "J. R. R. Tolkien", 'year': 1954},
#     {'title': "To Kill a Mockingbird", 'author': "Harper Lee", 'year': 1960},
#     {'title': "1984", 'author': "George Orwell", 'year': 1949},
#     {'title': "Go Set a Watchman", 'author': "Harper Lee", 'year': 2015},
#     {'title': "The Hobbit", 'author': "J. R. R. Tolkien", 'year': 1937},
#     {'title': "The Great Gatsby", 'author': "F. Scott Fitzgerald", 'year': 1925},
#     {'title': "The Two Towers", 'author': "J. R. R. Tolkien", 'year': 1954}
# ]
# newbooks = {}
# for book in books:
#     if book['author'] not in newbooks:
#         newbooks[book['author']] = [book]
#     else:
#         newbooks[book['author']].append(book)
# for key, value in newbooks.items():
#     del (value[0]['author'])

# print(newbooks)

# Given an array of numbers, return a new array containing just two numbers (from the original array) that add up to the number 10. If there are no two numbers that add up to 10, return false.

# Specifically use nested loops to solve this exercise even though there are other approaches as well.

# Input: [2, 5, 3, 1, 0, 7, 11]
# Output: [3, 7]

# Input: [1, 2, 3, 4, 5]
# Output: false (While 1, 2, 3, and 4 altogether add up to 10, we're seeking just one pair of numbers.)

# numarray = [2, 5, 3, 1, 0, 7, 11]
# newarray = []


# def two_sum():
#     for x in numarray:
#         for y in numarray:
#             if x != y and x + y == 10:
#                 newarray.append(x)
#                 newarray.append(y)
#                 return newarray


# print(two_sum())

# Given a year, report if it is a leap year.

# The tricky thing here is that a leap year in the Gregorian calendar occurs:

# on every year that is evenly divisible by 4
# except every year that is evenly divisible by 100
# unless the year is also evenly divisible by 400
# For example, 1997 is not a leap year, but 1996 is. 1900 is not a leap year, but 2000 is.

# If your language provides a method in the standard library that does this look-up, pretend it doesn't exist and implement it yourself.

# def leap(year):
#     if year % 4 == 0 and year % 100 != 0:
#         print('Leap Year!')
#     elif year % 4 == 0 and year % 400 == 0:
#         print('Leap Year!')
#     else:
#         print('Not a Leap Year!')


# leap(1600)

# Given a hash, return a flat array containing all the hash’s keys and values.

# Input: {“a” => 1, “b” => 2, “c” => 3, “d” => 4}
# Output: [“a”, 1, “b”, 2, “c”, 3, “d”, 4]

# dictionary = {'a': 1, 'b': 2, 'c': 3, 'd': 4}
# list = []

# for key, value in dictionary.items():
#     list.append(key)
#     list.append(value)

# print(list)

# Write a function that gives the Nth number of the Fibonacci Sequence. The Fibonacci sequence begins with 0 and 1, and every number thereafter is the sum of the previous two numbers. So the sequence goes like this:

# 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, and so on until infinity...

# Input: 9
# Output: 21 (as this is the 9th number of the Fibonacci Sequence)

# def fibo(num):
#     fibOne = 0
#     fibTwo = 1
#     result = 0
#     for _ in range(num - 2):
#         result = fibOne + fibTwo
#         fibOne = fibTwo
#         fibTwo = result
#     return result

# print(fibo(9))

# You are given two parameters, an array and a number. Return a hash whose keys are each of the values from the array parameter, and whose values are the number parameter.

# Input:0

# First argument: ["a", "e", "i", "o", "u"]
# Second argument: 1

# Output:

# {
# 'a' => 1,
# 'e' => 1,
# 'i' => 1,
# 'o' => 1,
# 'u' => 1
# }

# argumentOne = ['a', 'e', 'i', 'o', 'u']
# argumentTwo = 1
# combo = {}

# for x in argumentOne:
#     combo[x] = argumentTwo

# print(combo)

# Given a hash, return a flat array containing all the hash’s keys and values.

# Input: {“a” => 1, “b” => 2, “c” => 3, “d” => 4}
# Output: [“a”, 1, “b”, 2, “c”, 3, “d”, 4]

# dic = {'a': 1, 'b': 2, 'c': 3, 'd': 4}
# list = []

# for key, value in dic.items():
#     list.append(key)
#     list.append(value)

# print(list)

# Given a string, write a function that returns the first occurence of two duplicate characters in a row, and return the duplicated character.

# Input: “abcdefghhijkkloooop”
# Output: “h”


# def dupe(letters):
#     index = 0
#     indexTwo = 1
#     result = ''
#     while indexTwo < len(letters):
#         if letters[index] == letters[indexTwo]:
#             result = letters[index]
#             print(result)
#             return
#         else:
#             index += 1
#             indexTwo += 1

# dupe('abcdefghhijkkloooop')

# Write a function that accepts an array of strings and returns a new array containing every other string from the original array. For example, if the input is ["a", "b", "c", "d", "e", "f"], the output should be ["a", "c", "e"].

# def oddArray(array):
#     index = 0
#     newArray = []
#     while index < len(array):
#         newArray.append(array[index])
#         index += 2
#     print(newArray)

# oddArray(['a', 'b', 'c', 'd', 'e', 'f'])

# Given an array of numbers, write a function that returns a new array that contains all numbers from the original array that are less than 100.

# Input: [99, 101, 88, 4, 2000, 50]
# Output: [99, 88, 4, 50]

# def lowNums(array):
#     newArray = []
#     for num in array:
#         if num < 100:
#             newArray.append(num)
#     print(newArray)


# lowNums([20, 200, 100, 4000, 54, 18])

# The Collatz Conjecture or 3x+1 problem can be summarized as follows:

# Take any positive integer n. If n is even, divide n by 2 to get n / 2. If n is odd, multiply n by 3 and add 1 to get 3n + 1. Repeat the process indefinitely. The conjecture states that no matter which number you start with, you will always reach 1 eventually.

# Given a number n, return the number of steps required to reach 1.

# num = 12
# count = 0

# while num != 1:
#     if num % 2 == 0:
#         num = num / 2
#         count += 1
#     elif num % 2 > 0:
#         num = num * 3 + 1
#         count += 1

# print(count)

# Given a hash, create a new hash that has the keys and values switched.

# Input: {"a" => 1, "b" => 2, "c" => 3}
# Output: {1 => "a", 2 => "b", 3 => "c"}

# dic = {'a': 1, 'b': 2, 'c': 3}
# newdic = {}

# for x, y in dic.items():
#     newdic[y] = x

# print(newdic)

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

# def common(array):
#     output = ''
#     index = 0
#     inner = 0
#     while index < len(min(array, key=len)):
#         if array[index][inner] == array[index + 1][inner] and array[index][inner] == array[index + 2][inner]:
#             output = output + array[index][inner]
#             inner += 1
#         elif inner == 0:
#             print('There is no common prefix among the input strings')
#             return
#         else:
#             print(output)
#             return


# common(['flower', 'flow', 'flight'])
# common(['dog', 'racecar', 'car'])

# Given a DNA strand, return its RNA complement (per RNA transcription).

# Both DNA and RNA strands are a sequence of nucleotides. Here we're representing the sequences with single-letter characters (e.g. a sample strand may look like: "AGCA".)

# Given a string representing a DNA strand, provide its transcribed RNA strand, according to the following pattern:

# G becomes C
# C becomes G
# T becomes A
# A becomes U

# So based on all this, here's a sample input/output:

# Input: 'ACGTGGTCTTAA'
# Output: 'UGCACCAGAAUU'

# input = 'ACGTGGTCTTAA'
# translator = {'G': 'C', 'C': 'G', 'T': 'A', 'A': 'U'}
# output = ''

# for x in input:
#     output = output + translator[x]

# print(output)

# Given a string, write a function that returns true if the “$” character is contained within the string or false if it is not.

# Input: “i hate $ but i love money i know i know im crazy”
# Output: true

# Input: “abcdefghijklmnopqrstuvwxyz”
# Output: false

# def moneyChecker(str):
#     output = 'False'
#     for s in str:
#         if s == '$':
#             output = 'True'
#             return output
#     return output


# print(moneyChecker("test case for true $$$ get that paper yo"))
# print(moneyChecker('test case for false'))
