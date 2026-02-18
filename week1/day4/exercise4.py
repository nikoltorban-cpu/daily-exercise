#what are you learning?
def display_message():
    print("I am learning about functions in Python.")

display_message()

#what's my favorite book?
def favorite_book(title):
    print("One of my favorite books is " + title)

favorite_book("Perfect")

#some geography
def describe_city(city, country="unknown"):
    print(city + " is in " + country)

describe_city("London", "England")    
describe_city("Tel Aviv", "Israel")
describe_city("New York")

#random
from calendar import month
import random
def random_number(num):
    number = random.randint(1, 100)
    if num == number:
        print("it's a success!! the number was " + str(number))
    else:
        print("not this time, the number was " + str(number) + " and your number was " +str(num))

random_number(47)       

#let's create some personalized shirts
def make_shirt(size = "large", message = "i love python"):
    print("the shirt size is " + size + " and the message is " + message)

make_shirt()   
make_shirt(size = "medium")
make_shirt(size= "small", message = "i am happy") 

#magicians
magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']
def show_magicians(magician_names):
    for name in magician_names:
        print(name)
show_magicians(magician_names)

def make_great(magician_names):
    for i in range(len(magician_names)):
        magician_names[i] = "the Great " + magician_names[i]
    return magician_names

great_magicians = make_great(magician_names)
show_magicians(great_magicians)

#temperature advice
def get_random_temp(month):
    if month in ["December", "January", "February"]:
        return random.uniform(-10, 16)
    elif month in ["March", "April", "May"]:
        return random.uniform(16, 23)
    elif month in ["June", "July", "August"]:
        return random.uniform(32, 40)
    elif month in ["September", "October", "November"]:
        return random.uniform(0, 16)

def main():
    month = input("what month is it? ")
    temp = get_random_temp(month)
    print("the temperature right now is " + str(temp) + " degrees")
    if temp < 0:
        print("brrr, it's freezing! Wear some extra layers today")
    elif temp < 16:
        print("quite chilly! Don't forget your coat")
    elif temp < 23:
        print("it's a nice weather today")
    elif temp < 32:
        print("A bit warm, stay hydrated")
    else:
        print("it's very hot hot! Stay cool")


main()
