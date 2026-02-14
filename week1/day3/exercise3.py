#converting lists inton dictionaries
keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]
dictionary = dict(zip(keys, values))
print(dictionary)

#cinemax #2
family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
total = 0
for name, age in family.items():
    if age < 3:
        print(name + " ticket is free")
    elif 3 <= age <= 12:
        total = total + 10
        print(name + " ticket is $10")
    else:
        total = total + 15
        print(name + " ticket is $15")
        
print("Total cost of all tickets is $" + str(total))

#zara
brand = {"name": "Zara", "creation_date": 1975, "creator_name": "Amancio Ortega Gaona", "type_of_clothes": "men, women, children and home", "international_competitors": ["Gap", "H&M", "Benetton"], "number_stores": 7000, "major_color": {"France": "blue", "Spain": "red", "US": ["pink", "green"]}}
brand["number_stores"] = 2
print("Zara's clients are " + brand["type_of_clothes"])
brand["country_creation"] = "Spain"
if "international_competitors" in brand:
    brand["international_competitors"].append("Desigual")
del brand["creation_date"]
print(brand["international_competitors"][-1])
print(brand["major_color"]["US"])
print(len(brand))
print(brand.keys())

#disney characters
users = ["Mickey", "Minnie", "Donald", "Ariel", "Pluto"]
disney_users_A = dict(zip(users, range(len(users))))
print(disney_users_A)
disney_users_B = dict(zip(range(len(users)), users))
print(disney_users_B)
disney_users_C = dict(zip(range(len(users)), sorted(users)))
print(disney_users_C)