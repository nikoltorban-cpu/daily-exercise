#asking the user to put string  of 10 characters
user_input = input("please enter a string with 10 characters ")

#checking the length of the string
if len(user_input) < 10:
    print("string not long enough")  
elif len(user_input) > 10:
    print("string too long")
else:
    print("perfect length string")

#printing the first and last character of the string    
print("first character is " + user_input[0] + " and the last character is " + user_input[-1]) 

#building a string character by character
for i in range(len(user_input)):
    print(user_input[0:i+1])