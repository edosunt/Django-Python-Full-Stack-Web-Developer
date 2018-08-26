from django import template

register = template.Library()

def myCut(value,arg):
    return value.replace(arg,'')

register.filter('newCut',myCut)
