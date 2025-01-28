from django.shortcuts import render
def Home(request):
    return render(request,"pages/index.html")
def style(request):
    return render(request,"static/style.css")
def index(request):
    return render(request,"static/index.js")

# Create your views here.
