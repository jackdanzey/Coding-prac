# Create a calculator which handles +,-,*,/ and outputs answer based on the mode/ operator used
# Hint: use 3 separate inputs
# Bonus: Extend functionality with extra mode so it also does celsius to fahrenheit conversion
# formula is: temp in C*9/5 + 32 = temp in f

# mode = input('Enter math operation(+,-,*,/) or f for Celsius to Fahrenheit conversion: ')
# num1 = float(input('Enter first number: '))
# if mode.lower() == 'f':
#     print(f'{num1} Celsius is equivalent to {(num1*9/5)+32 } fahrenheit')
# else:
#     num2 = float(input('Enter second number: '))

#     if mode == '+':
#         print(f'Answer is: {num1 + num2}')
#     elif mode == '-':
#         print(f'Answer is: {num1 - num2}')
#     elif mode == '*':
#         print(f'Answer is: {num1 * num2}')
#     elif mode == '/':
#         print(f'Answer is: {num1 / num2}')
#     else:
#         print('Input error!')

# num = int(input('Enter a number to find out if it is either even or odd: '))

# if num % 2 > 0:
#     print('your number is odd')
# else:
#     print('your number is even')

# name = input('Please create a login name: ')
# password = input('Please create a login password: ')
# loginname = input('Please enter your login name: ')
# loginpassword = input('Please enter your login password: ')

# if loginname != name or loginpassword != password:
#     print('invalid credentials, dumbass!')
# else:
#     print('login successful!')

# Given ONE array of strings, return a new array that contains every combination of each string with every other string in the array.

# Input: ["a", "b", "c", "d"]
# Output: ["ab", "ac", "ad", "ba", "bc", "bd", "ca", "cb", "cd", "da", "db", "dc"]

# array = ['a', 'b', 'c', 'd']
# newarray = []

# for x in array:
#     for y in array:
#         if x != y:
#             newarray.append(x + y)
# print(newarray)

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

# create stores
freelancers = {'name': 'freelancing Shop', 'brian': 70, 'black knight': 20,
               'biccus diccus': 100, 'grim reaper': 500, 'minstrel': -15}
antiques = {'name': 'Antique Shop', 'french castle': 400,
            'wooden grail': 3, 'scythe': 150, 'catapult': 75, 'german joke': 5}
pet_shop = {'name': 'Pet Shop', 'blue parrot': 10,
            'white rabbit': 5, 'newt': 2}

# create an dempty shopping cart
cart = {}
purse = 1000
# loop through stores/dicts
for shop in (freelancers, antiques, pet_shop):
    # inputbox  to show what you can buy...capture textstring of what was bought...make lowercase
    buy_item = input(
        f'Welcome to {shop["name"]}! what do you want to buy (or type exit to move to the next shop): {shop}').lower()
    # update the cart
    if buy_item == 'exit':
        print('exiting shop...')
    elif buy_item not in shop:
        print('that item does not exist!')
    else:
        purse = purse - shop[buy_item]
        cart.update({buy_item: shop.pop(buy_item)})
        buy_items = ", ".join(list(cart.keys()))
print(f'You Purchased {buy_items}. Today your total cost was {1000 - purse} gold, and you have {purse} gold pieces left. Have a nice day of mayhem!')
