import random

gameOn = "" #Global variable to know whether the game is over

def code_gen():
    """
    This function is to generate the 3 digit code. None should be the same
    """
    angka = [str(num) for num in range(10)]
    random.shuffle(angka)
    return (angka[:3])

def check_code(key,guess):
    """
    This function is to receive a number and check the code.
    Give hints of "Close" if you guess the number correct but position is wrong
    "match" if the number is correct and position is correct
    "Nope" if the number and position is incorrect
    """
    if guess == key:
        return "You cracked the code"

    clue=[]

    for i in [0,1,2]:
        if guess[i] == key [i]:
            clue.append("Match")
        elif guess[i] in key:
            clue.append("Close")

    if clue == []:
        return ["Nope"]
    else:
        return clue

#Main
code = code_gen()
print(code)

while gameOn != "You cracked the code":
    try:
        guess = list(input("What is your guess? "))
        gameOn = check_code(code,guess)
        for clue in gameOn:
            print(clue)
    except:
        print("Error occured - wrong input, try again, CTRL+Z to exit")
