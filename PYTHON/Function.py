def hello(name = 'Jose'):
    print("Hello world")

    def greet():
        print("greet")

    def welcome():
        print("welcome")

    if name == 'Jose':
        return greet
    else:
        return welcome

x = hello()

print(x())
