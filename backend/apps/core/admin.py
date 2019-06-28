from django.contrib import admin


from .models import (
   ConslutantInfo,
   Notification,
   Post

)


admin.site.register(ConslutantInfo)
admin.site.register(Notification)
admin.site.register(Post)



