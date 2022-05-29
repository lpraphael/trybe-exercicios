-- Escreva uma query para exibir o nome e o código de todos os projetos cujo nome NÃO inicie com a letra A.
SELECT * FROM Scientists.Projects
WHERE NOT name LIKE 'a%'