-- Escreva uma query para exibir o nome de todos os projetos cujo o código inicie com a letra A. Ordene o resultado em ordem alfabética.
SELECT * FROM Scientists.Scientists
WHERE `name` LIKE '%A%'
ORDER BY `name` ASC;