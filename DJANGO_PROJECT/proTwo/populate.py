import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE','proTwo.settings')

import django
django.setup()

from AppTwo.models import User
from faker import Faker

fakegen = Faker()

def populate(N=5):
    for usr in range (N):
        fname = fakegen.first_name()
        lname = fakegen.last_name()
        em = fakegen.email()

        t = User.objects.get_or_create(FirstName = fname, LastName = lname, Email = em)[0]

if __name__ == '__main__':
    print('Start Populating')
    populate(20)
    print('Completed')
