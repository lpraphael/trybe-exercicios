-- Agora, faça uma consulta para exibir o número de empresas (fornecedores) que contém a letra F no código.
SELECT *
FROM PecasFornecedores.Fornecedores
WHERE `name` LIKE '%f%';