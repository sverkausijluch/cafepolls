from django.views.generic import TemplateView
from .forms import UserLoginForm
from django.contrib.auth import login, logout
from django.shortcuts import redirect, render

class IndexView(TemplateView):
    template_name = 'frontend/index.html'

def user_login(request):
    if request.method == 'POST':
        form = UserLoginForm(data=request.POST)
        if form.is_valid():
            user = form.get_user()
            login(request, user)
            return redirect("../")
    else:
        form = UserLoginForm()
    context = {
        'load': request.POST.get('load', 0),
        'form': form,
    }
    return render(request,'frontend/auth.html', context=context)

def user_logout(request):
    logout(request)
    return redirect('../login/')