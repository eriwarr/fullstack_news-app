from django.urls import path
from . import views

urlpatterns = [
    path('<int:pk>/', views.ArticleDetailAPIView.as_view()),
    path('category/', views.ArticleCategoryListView.as_view()), 
    path('', views.ArticleListView.as_view()),

]
