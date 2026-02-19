#tic tac toe game


board = [" "] * 9


def display_board():
    print(board[0] + " | " + board[1] + " | " + board[2])
    print("---------")
    print(board[3] + " | " + board[4] + " | " + board[5])
    print("---------")
    print(board[6] + " | " + board[7] + " | " + board[8])


def check_winner(player):
    winning_combinations = [
        [0,1,2], [3,4,5], [6,7,8],  # rows
        [0,3,6], [1,4,7], [2,5,8],  # columns
        [0,4,8], [2,4,6]            # diagonals
    ]

    for combo in winning_combinations:
        if board[combo[0]] == board[combo[1]] == board[combo[2]] == player:
            return True
    return False


def get_valid_input():
    while True:
        row = int(input("Enter row (1-3): "))
        col = int(input("Enter column (1-3): "))

        if row < 1 or row > 3 or col < 1 or col > 3:
            print("Invalid position, try again.")
            continue

        index = (row - 1) * 3 + (col - 1)

        if board[index] != " ":
            print("That spot is already taken, try again.")
            continue

        return index


def play():
    global board
    board = [" "] * 9
    current_player = "X"
    count = 0
    game_over = False

    while not game_over:
        display_board()
        print(f"{current_player}'s turn")

        index = get_valid_input()
        board[index] = current_player
        count += 1

        if check_winner(current_player):
            display_board()
            print(f"{current_player} won!")
            game_over = True

        elif count == 9:
            display_board()
            print("It's a tie!")
            game_over = True

        else:
            current_player = "O" if current_player == "X" else "X"


play()


    






