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
