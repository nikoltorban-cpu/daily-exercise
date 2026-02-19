#sorting

string = input("enter a string: ")
string = string.split(",")
string.sort()
sorted_string = ",".join(string)
print(sorted_string)

#longest word
sentence = input("enter a sentence: ")
def longest_word(sentence):
    words = sentence.split()
    longest = ""
    for word in words:
        if len(word) > len(longest):
            longest = word
    return longest

print(longest_word(sentence))