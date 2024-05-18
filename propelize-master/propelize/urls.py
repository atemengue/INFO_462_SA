
from django.contrib import admin
from django.urls import path, include
from drf_yasg.views import get_schema_view
from rest_framework import permissions
from drf_yasg import openapi


schema_view = get_schema_view(
    openapi.Info(
        title="Vehicle Rental API",
        default_version='v1',
        description="API documentation for the Vehicle Rental microservices",
        terms_of_service="https://www.google.com/policies/terms/",
        contact=openapi.Contact(email="contact@propelize.local"),
        license=openapi.License(name="BSD License"),
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('vehicles.urls')),
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),

]
