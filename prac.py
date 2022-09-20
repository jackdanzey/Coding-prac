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

name = input('Please create a login name: ')
password = input('Please create a login password: ')
loginname = input('Please enter your login name: ')
loginpassword = input('Please enter your login password: ')

if loginname != name or loginpassword != password:
    print('invalid credentials, dumbass!')
else:
    print('login successful!')
