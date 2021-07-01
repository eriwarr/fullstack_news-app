from rest_framework import generics
from .models import Article
from .serializers import ArticleSerializer
from .permissions import IsAuthOrReadOnly

class ArticleListView(generics.ListCreateAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    permission_classes = (IsAuthOrReadOnly,)

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)


class ArticleDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    permission_classes = (IsAuthOrReadOnly,)

class ArticleCategoryListView(generics.ListCreateAPIView):
    serializer_class = ArticleSerializer

    def get_queryset(self):
        selection = self.request.query_params['category']
        return Article.objects.filter(category=selection)
