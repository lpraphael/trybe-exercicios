-- Escreva uma query para exibir o nome do segundo projeto com menor quantidade de horas.
SELECT name FROM Scientists.Projects
ORDER BY hours DESC
LIMIT 1 OFFSET 1;