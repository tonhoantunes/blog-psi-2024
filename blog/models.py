from django.db import models

# Create your models here.
class Categoria(models.Model):
    nome = models.CharField(max_length=20)

    def __str__(self):
        return self.nome

class Post(models.Model):
    categoria = models.ForeignKey(Categoria, on_delete=models.CASCADE)
    titulo = models.CharField(max_length=100)
    descricao = models.TextField(max_length=600)
    subtitulo = models.CharField(max_length=100)
    conteudo = models.TextField(max_length=1200)
    imagem = models.ImageField(blank=True)

    def __str__(self):
        return self.titulo