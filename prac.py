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
