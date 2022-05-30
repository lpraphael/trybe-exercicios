-- Escreva um query que exiba média salarial e o número de funcionários de todos os departamentos com mais de dez funcionários. Dica: agrupe pelo DEPARTMENT_ID.
SELECT DEPARTMENT_ID, COUNT(*), AVG(SALARY) 
FROM hr.employees
GROUP BY DEPARTMENT_ID
HAVING NOT COUNT(DEPARTMENT_ID) < 10;