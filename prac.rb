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
