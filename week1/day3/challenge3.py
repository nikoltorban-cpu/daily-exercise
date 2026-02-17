#letter index dictionary
letter = input("enter a word: ")
new_dict = {}
for i in range(len(letter)):
    if letter[i] not in new_dict:
        new_dict[letter[i]] = []
    new_dict[letter[i]].append(i)

print(new_dict)

#affordable items
items_purchase = {'bread' : '1$', 'eggs' : '3$', 'milk' : '1$', 'cheese' : '2$', 'bannana' : '2$', 'tv' : '3,000$', 'pan' : '1,800$', 'sofa' : '7,560$', 'toilet' : '4280$', 'dishwasher' : '380$', 'sponge' : '3$', 'litter box' : '36$', 'lamp' : '560$'}
wallet = int(input("how much money do you have? "))

for item, price in items_purchase.items():
    items_purchase[item] = int(price.replace('$', '').replace(',', ''))

basket = []
for item, price in items_purchase.items():
    if items_purchase[item] <= wallet:
         basket.append(item)
         wallet -= items_purchase[item]

if not basket:
    print("no items can be afforded")
else:         
    print("you can afford: " + str(sorted(basket)))
