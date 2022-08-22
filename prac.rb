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
