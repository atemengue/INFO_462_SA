# from django.shortcuts import render

# from rest_framework_simplejwt.views import (
#     TokenObtainPairView,
#     TokenRefreshView,
# )
# from rest_framework_simplejwt.tokens import RefreshToken
# from django.contrib.auth.models import update_last_login
# from rest_framework import permissions

# class CustomTokenObtainPairView(TokenObtainPairView):
#     permission_classes = (permissions.AllowAny,)
#     def post(self, request, *args, **kwargs):
#         response = super().post(request, *args, **kwargs)
#         update_last_login(None, request.user)
#         return response

# class CustomTokenRefreshView(TokenRefreshView):
#     permission_classes = (permissions.AllowAny,)

from django.contrib.auth import authenticate, login
from django.shortcuts import render, redirect
from .forms import CustomAuthenticationForm

def login_view(request):
    if request.method == 'POST':
        form = CustomAuthenticationForm(data=request.POST)
        if form.is_valid():
            user = form.get_user()
            login(request, user)
            return redirect('show')  # Redirigez vers la liste des véhicules après la connexion
    else:
        form = CustomAuthenticationForm()
    return render(request, 'user/login.html', {'form': form})


