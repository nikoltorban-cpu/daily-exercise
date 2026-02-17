#letter index dictionary
letter = input("enter a word: ")
new_dict = {}
for i in range(len(letter)):
    if letter[i] not in new_dict:
        new_dict[letter[i]] = []
    new_dict[letter[i]].append(i)


print(new_dict)


