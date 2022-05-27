<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8">
    <title>HTML</title>
    <style></style>
  </head>
  <body>
    <h1>Exercícios 3.2</h1>
    <p>Qual é a sua cor favorita?</p>
    <ul>
      <li>Amarelo</li>
      <li>Vermelho</li>
      <li>Marrom</li>
    </ul>
  </body>
</html>

1- Modifique o tamanho do h1 para 65 pixels

<style>
font-size: 65px;
</style>

2- Modifique a cor do texto do h1 para laranja

<style>
color: orange;
</style>

3- modifique a cor de fundo da lista nao ordenada

primeiro devo criar o id dentro da <ul> ficando assim:

id= list-background-color;

em seguida devo criar um estilo para esse id 

#list-background-color: {
background-color: blue;
}

4- Crie uma classe para modificar a cor de fundo da tag <p> e das <ul> ao mesmo tempo

A classe me permitirá fazer mudança de estilo em todos os campos que pertencerem a classe especificada, ficando assim:

- primeiro devo colocar a classe dentro dos campos que quero mudar o estilo:

<p class="class-background-color">
<ul class="class-background-color">

- em seguida, preciso criar a classe:

.class-background-color {
background-color: purple
}






