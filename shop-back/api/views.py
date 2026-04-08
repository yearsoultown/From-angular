from rest_framework import viewsets
from .models import Category, Product
from .serializers import CategorySerializer, ProductSerializer
from rest_framework.decorators import action
from rest_framework.response import Response

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    @action(detail=True, methods=['get'])
    def products(self, request, pk=None):
        category = self.get_object()
        products = category.products.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


# from django.http import JsonResponse
# from .models import Product, Category
# from .serializers import ProductSerializer, CategorySerializer


# def product_list(request):
#     products = Product.objects.all()
#     data = []
#     for product in products:
#         data.append({
#             'id': product.id,
#             'name': product.name,
#             'price': product.price,
#             'description': product.description,
#             'count': product.count,
#             'is_active': product.is_active,
#             'category_id': product.category.id
#         })
#     return JsonResponse(data, safe=False)


# def product_detail(request, id):
#     try:
#         product = Product.objects.get(id=id)
#         data = {
#             'id': product.id,
#             'name': product.name,
#             'price': product.price,
#             'description': product.description,
#             'count': product.count,
#             'is_active': product.is_active,
#             'category_id': product.category.id
#         }
#         return JsonResponse(data)
#     except Product.DoesNotExist:
#         return JsonResponse({'error': 'Product not found'})


# def category_list(request):
#     categories = Category.objects.all()
#     data = []
#     for category in categories:
#         data.append({
#             'id': category.id,
#             'name': category.name
#         })
#     return JsonResponse(data, safe=False)


# def category_detail(request, id):
#     try:
#         category = Category.objects.get(id=id)
#         data = {
#             'id': category.id,
#             'name': category.name
#         }
#         return JsonResponse(data)
#     except Category.DoesNotExist:
#         return JsonResponse({'error': 'Category not found'})


# def category_products(request, id):
#     try:
#         category = Category.objects.get(id=id)
#         products = category.products.all()
#         data = []
#         for product in products:
#             data.append({
#                 'id': product.id,
#                 'name': product.name,
#                 'price': product.price,
#                 'description': product.description,
#                 'count': product.count,
#                 'is_active': product.is_active,
#                 'category_id': product.category.id
#             })
#         return JsonResponse(data, safe=False)
#     except Category.DoesNotExist:
#         return JsonResponse({'error': 'Category not found'})