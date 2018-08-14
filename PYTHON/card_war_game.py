#####################################
### WELCOME TO YOUR OOP PROJECT #####
#####################################

# For this project you will be using OOP to create a card game. This card game will
# be the card game "War" for two players, you an the computer. If you don't know
# how to play "War" here are the basic rules:
#
# The deck is divided evenly, with each player receiving 26 cards, dealt one at a time,
# face down. Anyone may deal first. Each player places his stack of cards face down,
# in front of him.
#
# The Play:
#
# Each player turns up a card at the same time and the player with the higher card
# takes both cards and puts them, face down, on the bottom of his stack.
#
# If the cards are the same rank, it is War. Each player turns up three cards face
# down and one card face up. The player with the higher cards takes both piles
# (six cards). If the turned-up cards are again the same rank, each player places
# another card face down and turns another card face up. The player with the
# higher card takes all 10 cards, and so on.
#
# There are some more variations on this but we will keep it simple for now.
# Ignore "double" wars
#
# https://en.wikipedia.org/wiki/War_(card_game)

from random import shuffle

# Two useful variables for creating Cards.
SUITE = 'H D S C'.split()
RANKS = '2 3 4 5 6 7 8 9 10 J Q K A'.split()

class Deck:
    """
    This is the Deck Class. This object will create a deck of cards to initiate
    play. You can then use this Deck list of cards to split in half and give to
    the players. It will use SUITE and RANKS to create the deck. It should also
    have a method for splitting/cutting the deck in half and Shuffling the deck.
    """
    def __init__(self):
        print("Creating New Ordered Deck")
        #self.allcards = []
        #for s in SUITE:
        #    for r in RANKS:
        #        self.allcards.append((s,r))
        self.allcards = [(s,r) for s in SUITE for r in RANKS ]

    def acak(self):
        shuffle(self.allcards)

    def split(self):
        #return as split list
        return (self.allcards[:26],self.allcards[26:])

class Hand:
    '''
    This is the Hand class. Each player has a Hand, and can add or remove
    cards from that hand. There should be an add and remove card method here.
    '''
    def __init__(self,cards):
        #initiate with adding the card deck at the same time
        self.playerHand=cards

    def addCard(self,cards):
        #use extend rather than append to add each element, possible to add multiple cards
        self.playerHand.append(cards)

    def removeCard(self):
        #use pop so it could return the element that's removed
        return self.playerHand.pop(0) #without any index mean going to remove the last element

    def length(self):
        return len(self.playerHand)

    def showCard(self):
        return(self.playerHand)


class Player:
    """
    This is the Player class, which takes in a name and an instance of a Hand
    class object. The Player can then play cards and check if they still have cards.
    """
    def __init__(self,playerName):
        self.playerName = playerName

    def showName(self):
        return self.playerName

def compareCard(card1,card2):
    if RANKS.index(card1[1]) > RANKS.index(card2[1]):
        return "Player 1"
    elif RANKS.index(card1[1]) == RANKS.index(card2[1]):
        return "DRAW"
    else:
        return "Player 2"

def processCard(winner,number):
    if winner == 'Player 1':
        for i in range (0,number):
            hand1.addCard(hand2.removeCard())
            hand1.addCard(hand1.removeCard())
    elif winner == 'Player 2':
        for i in range (0,number):
            hand2.addCard(hand1.removeCard())
            hand2.addCard(hand2.removeCard())


######################
#### GAME PLAY #######
######################
print("Welcome to War, let's begin...")

#initiating the deck and shuffle it
myDeck = Deck()
myDeck.acak()

#assign the split deck into two different hand
hand1 = Hand(myDeck.split()[0])
hand2 = Hand(myDeck.split()[1])

#initiating players
player1 = Player(input("What is your name player1? "))
player2 = Player("computer")

#start the game and continue loop until gameOver = True
gameOver = False
round = 1

while not gameOver:
    print('-------------------------------------------')
    print('Round : %d' % round)
    print('Card on player 1 hand : {}'.format(hand1.showCard()))
    print('Card on player 2 hand : {}'.format(hand2.showCard()))

    #showing the first card on players hand
    print("Player 1 play card: {}".format(hand1.showCard()[0]))
    print("Player 2 play card: {}".format(hand2.showCard()[0]))

    #compare the card
    result = compareCard(hand1.showCard()[0],hand2.showCard()[0])
    print('The winner is: %r' % result)

    #take action
    if result == 'Player 1':
        processCard('Player 1',1)
    elif result == 'Player 2':
        processCard('Player 2',1)
    else: #if it's DRAW
        #compare the 5th card or the last card
        maxPlayer = 4 if hand1.length() > 5 and hand2.length() > 5 else min(hand1.length(),hand2.length())-1

        result = compareCard(hand1.showCard()[maxPlayer],hand2.showCard()[maxPlayer])

        print("Player 1 play card: {}".format(hand1.showCard()[maxPlayer]))
        print("Player 2 play card: {}".format(hand2.showCard()[maxPlayer]))
        print('The winner is: %r' % result)

        #process all 5 cards
        if result == 'Player 1' or result == "DRAW":
            processCard('Player 1',maxPlayer+1)
        elif result == 'Player 2':
            processCard('Player 2',maxPlayer+1)

    #check if game over
    gameOver = True if (hand1.length() == 0) or (hand2.length() == 0) else False
    round += 1

print(hand1.length())
print(hand2.length())
#Print('Total card at the end of the game for {} is {}, {} is {}'.format(player1,hand1.length(),player2,hand2.length()))
# Use the 3 classes along with some logic to play a game of war!
