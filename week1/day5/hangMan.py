#hangman game
def print_word(word):
    guess = ["_ "] * len(word)
    print("this is your board:")
    print("*******************")
    print(guess)



hangman_stages = [
"""
  -----
  |   |
      |
      |
      |
      |
---------
""",
"""
  -----
  |   |
  O   |
      |
      |
      |
---------
""",
"""
  -----
  |   |
  O   |
  |   |
      |
      |
---------
""",
"""
  -----
  |   |
  O   |
 /|   |
      |
      |
---------
""",
"""
  -----
  |   |
  O   |
 /|\  |
      |
      |
---------
""",
"""
  -----
  |   |
  O   |
 /|\  |
 /    |
      |
---------
""",
"""
  -----
  |   |
  O   |
 /|\  |
 / \  |
      |
---------
"""
]


import random

wordslist = ['correction', 'childish', 'beach', 'python', 'assertive', 'interference', 'complete', 'share', 'credit card', 'rush', 'south']
word = random.choice(wordslist)
mistakes = 0
print_word(word)
new_guess = ["_ "] * len(word)
while mistakes < 6:
    if mistakes == 0:
        print(hangman_stages[0])
    guess = input("guess a letter: ")
    for i in range(len(word)):
        if guess == word[i]:
            new_guess[i] = guess
    if new_guess:
        print(new_guess)
        if "".join(new_guess) == word:
            print("you win")
            break
   
            

        
    if guess not in word:
        print("wrong")
        mistakes += 1
        print(hangman_stages[mistakes])

if mistakes == 6:
    print(hangman_stages[6])
    print("you lose, the word was " + word)