from django.shortcuts import render
from django.http import HttpResponse
import requests as req
import random as rand


def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")

def dogs(request):
	resp = req.get('https://dog.ceo/api/breeds/image/random')
	dict=resp.json()
	return HttpResponse(resp)

def breed(request):
	breeds=['Akita','African','Boxer','Briard','Cairn','Chow','Malamute','Havanese','Maltese','Husky']
	index = rand.randint(0,9)
	url = 'https://dog.ceo/api/breed/'+breeds[index].lower()+'/images/random'
	resp = req.get(url)
	dict=resp.json()
	return HttpResponse(resp)