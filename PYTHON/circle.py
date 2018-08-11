#define class Circle

class Circle():
    """This is a new class Circle with attribute and method to calculate area"""
    #define class attribute
    pi = 3.14

    def __init__(self, radius=1):
        self.radius = radius

    def area(self):
        return self.radius * self.radius * Circle.pi

answer = "y"

while answer == "y":
    radiusInput = int(input("What will be your circle radius? "))

    myCircle = Circle(radiusInput)

    print(myCircle.area())

    answer = (input("Do you want to retry (Y/N) ").lower())
