from django.db import models
 
class todo(models.Model): #Table name, has to wrap models.Model to get the functionality of Django.
         
    name = models.CharField(max_length=100, unique=True) #Like a VARCHAR field
    price = models.FloatField() #Like a Float field
    link = models.TextField() #Like a TEXT field
    created = models.DateTimeField() #Like a DATETIME field
 
    def __unicode__(self): #Tell it to return as a unicode string (The name of the to-do item) rather than just Object.
        return self.name