from django.urls import path
from .views import RegisterView,LoginView,Forget_Password,ResetPassword,GoogleLoginView,UserRedirectView
from . import views


app_name="accounts"

urlpatterns = [
    path("sign-up/",RegisterView.as_view(),name="sign-up"),
    path('login/', LoginView.as_view(), name='login'),
    path("dj-rest-auth/google/login/", GoogleLoginView.as_view(), name="google_login"),
    path("~redirect/", view=UserRedirectView.as_view(), name="redirect"),
   path('logout/', views.user_logout, name='logout'),
   path('activate/<uidb64>/<token>/',views.activate,name="activate"),
   path('forget_password/',Forget_Password.as_view(),name="forget_password"),
   path('resetpassword_validate/<uidb64>/<token>/',views.reset_password_validate,name="resetpassword_validate"),
   path('resetPassword/',ResetPassword.as_view(),name="resetPassword"),
    
]





