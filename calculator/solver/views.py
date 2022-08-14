from django.shortcuts import render
from django.http import HttpResponse, HttpRequest
from django.template import loader
from django.views.decorators.csrf import csrf_exempt
import json
# Create your views here.
@csrf_exempt
def results(request: HttpRequest):
    operators = {'+', '-', '/', '*'}
    res = 0
    if (request.method == 'POST'):
        arr = json.loads(request.body)
        if arr:
            res = float(arr[0])
            for i in range(1, len(arr) - 1):
                op = arr[i]
                n = arr[i+1]
                if op == '+':
                    res += float(n)
                elif op == '-':
                    res -= float(n)
                elif op == '/':
                    res /= float(n)
                elif op == '*':
                    res *= float(n)
            
    return HttpResponse(float(f'{res:.5f}'))