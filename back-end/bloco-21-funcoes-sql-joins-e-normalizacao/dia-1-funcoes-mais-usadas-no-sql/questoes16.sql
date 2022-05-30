-- Escreva uma query que exiba os nomes dos funcionários em letra maiúscula.
SELECT UCASE(FIRST_NAME), UCASE(LAST_NAME) 
FROM hr.employees;