import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE','first_project.settings')

import django
django.setup()

import random
from first_app.models import Webpage, Topic, AccessRecord
from faker import Faker

fakegen = Faker()
topics = ['Programming','Social Study','Marketing','Human Resources']

def add_Topic():
    t = Topic.objects.get_or_create(top_name=random.choice(topics))[0]
    t.save()
    return t

def populate_data(N=5):
    for entry in range(N):
        #get topics
        top = add_Topic()

        #create Webpage
        webname = fakegen.company()
        weburl = fakegen.url()
        accDate = fakegen.date()

        webpg = Webpage.objects.get_or_create(topic=top, name=webname, url = weburl)[0]

        #create AccessRecord
        accRec = AccessRecord.objects.get_or_create(name=webpg, date=accDate)[0]

if __name__ == '__main__':
    print('Ready to populate')
    populate_data(20)
    print('Completed')
