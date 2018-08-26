from django import forms
from AppTwo.models import User

#define form using ModelForm
class SignUpForm(forms.ModelForm):
    class Meta():
        model = User
        fields = '__all__'
