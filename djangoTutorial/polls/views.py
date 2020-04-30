from django.shortcuts import render
from django.http import HttpResponse
import requests as req


def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")

def dogs(request):
	resp = req.get('https://dog.ceo/api/breeds/image/random')
	dict=resp.json()
	return HttpResponse(resp)