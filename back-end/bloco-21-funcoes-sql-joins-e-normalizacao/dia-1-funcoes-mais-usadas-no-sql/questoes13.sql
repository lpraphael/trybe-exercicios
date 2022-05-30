-- Escreva uma query que exiba as seguintes informações de cada funcionário: id, primeiro nome e ano no qual foi contratado (exiba somente o ano).
SELECT FIRST_NAME, YEAR(HIRE_DATE) FROM hr.employees;