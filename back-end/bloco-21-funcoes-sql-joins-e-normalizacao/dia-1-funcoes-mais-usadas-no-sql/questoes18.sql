-- Escreva uma query que exiba as seguintes informações de cada funcionário: nome, sobrenome, tempo que trabalha na empresa (em dias).
SELECT FIRST_NAME, LAST_NAME, DATEDIFF(current_date(), DATE(HIRE_DATE)) 
FROM hr.employees;