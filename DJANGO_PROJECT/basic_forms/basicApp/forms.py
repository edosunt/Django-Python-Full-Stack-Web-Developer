from django import forms
from django.core import validators

class FormName(forms.Form):
    name = forms.CharField()
    email = forms.EmailField()
    verify_email = forms.EmailField(label='Please enter your email again')
    text = forms.CharField(widget = forms.Textarea)
    botCatcher = forms.CharField(required = False,
                                widget=forms.HiddenInput,
                                validators = [validators.MaxLengthValidator(0)])

    def clean(self):
        all_clean_data = super().clean() #this is for checking entire forms
        email = all_clean_data['email'] #getting email for comparison with second email address
        verifyEmail = all_clean_data['verify_email'] #getting the email for verification

        if email != verifyEmail: #comparing the two email address
            raise forms.ValidationError('Email address need to be the same')
