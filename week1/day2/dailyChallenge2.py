#multiples of a number
number = int(input("Enter a number: "))
length = int(input("Enter a length: "))
list_of_multiples = []
for i in range(1, length + 1):
    list_of_multiples.append(number * i)

print(list_of_multiples)

#removing consecutive duplicates
string = input("Enter a string: ")
result = ""
for i in range(len(string)):
    if i == 0 or string[i] != string[i - 1]:
        result += string[i]
print(result)