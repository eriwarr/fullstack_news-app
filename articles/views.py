from rest_framework import generics
from .models import Article
from .serializers import ArticleSerializer
from django.shortcuts import render, get_object_or_404
from .permissions import IsAuthOrReadOnly

class ArticleListView(generics.ListCreateAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    permission_classes = (IsAuthOrReadOnly,)

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

class ArticleDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = ArticleSerializer

    def get_object(self):
        return get_object_or_404(Article, user=self.request.user)

    def perform_update(self, serializer):
        instance = serializer.save(author=self.request.user)
