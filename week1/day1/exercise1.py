#print Hello World in 4 seperate lines
print("Hello World\nHello World\nHello World\nHello World  ")

#write code that calculates the result of (99^3)*8
result = (99**3)*8
print(result)

#what's the output?
5 < 3 #False
3 == 3 #True
3 == "3" #False
"3" > 3 #Error (can't compare string and integer)
"Hello" == "hello" #False

#my computer brand
computer_brand = "Apple"
print("i have an " + computer_brand +" computer")

#my information
name = "Nikol"
age = 21
shoe_size = 36
info = "My name is " + name + ", I am " + str(age) + " years old and my shoe size is " + str(shoe_size)
print(info)

#A&B 
a = 34
b = 58
if a > b:
    print("Hello World")

#odd or even
number = int(input("pick a number "))
if number % 2 == 0:
    print("even")
else:    
    print("odd")

#what's your name?
my_name = "Nikol"
name = input("what's your name? ")
if name == my_name:
    print("we are twinsss!!!")
else:
    print("we're not the same name, you're a clown!!")

#Are you tall enough to ride a rollercoaster?
height = int(input("what's your height in cm? "))
if height > 145:
    print("you are tall enough to ride the rollercoaster!!")
else:
    print("my apologies, but you need to grow taller to ride the rollercoaster")         