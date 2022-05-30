-- Escreva uma query que exiba a média salarial de cada JOB_ID, ordenando pela média salarial em ordem decrescente.
SELECT AVG(SALARY) FROM hr.employees
GROUP BY JOB_ID
ORDER BY SALARY DESC;