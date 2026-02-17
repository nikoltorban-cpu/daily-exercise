#favorite numbers
my_fav_numbers = set()
my_fav_numbers = {3, 22, 17,56}
my_fav_numbers.add(42)
my_fav_numbers.add(86)
my_fav_numbers.remove(86)
friend_fav_numbers = set()
friend_fav_numbers = {7, 13, 49}
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
print(our_fav_numbers)

#tuples
my_tuple = (1, 2, 3, 4, 5)
#my_tuple.add(6) its not possible to add to a tuple because they are immutable, meaning they cannot be changed after they are created.


#list manipulation
basket = ["Banana", "Apples", "Oranges", "Blueberries"]
basket.remove("Banana")
basket.remove("Blueberries")
basket.append("Kiwi")
basket.insert(0, "Apples")
basket.count("Apples")
basket.clear()  
print(basket)

#floats
float_list = [1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]
#Think: Can you generate this sequence using a loop or another method?
numbers = []
x = 1.5
while x <= 5:
    numbers.append(x)
    x += 0.5
print(numbers)

#while loops
name = input("what's your name? ")
is_name_correct = False
while True:
    if name.isdigit():
        name = input("please enter a valid name: ")
    elif len(name) < 3:
        name = input("please enter a valid name: ")
    else:
        print("thank you")
        break  

    #favorite fruits
favorite_fruits = input("what are your favorite fruits? (separate them with a space) ")
favorite_fruits_list = favorite_fruits.split()
input_fruit = input("name a fruit ")
if input_fruit in favorite_fruits_list:
    print("you chose one of your favorite fruits! enjoy!")
else:    print("you chose a new fruit. I hope you enjoy")

#pizza toppings
pizza_toppings = []
while True:
    topping = input("enter a pizza topping (type 'quit' to stop) ")
    if topping.lower() == "quit":
        break
    pizza_toppings.append(topping)
print("adding " + topping + " to your pizza")

cost = 10 + 2.5 * len(pizza_toppings)
print("your total cost is: " + str(cost))

#cinema tickets
while True:
    ticket_cost = 0
    age = int(input("what's your age? (type -1 to stop) "))
    if age == -1:
        break
    elif age < 3:
        print("your ticket is free")
    elif 3 <= age <= 12:
        ticket_cost = ticket_cost + 10
        print("your ticket is $10")
    else:
        ticket_cost = ticket_cost + 15
        print("your ticket is $15")

print("your total ticket cost is: $" + str(ticket_cost))