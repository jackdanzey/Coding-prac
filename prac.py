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
