def max_number(num1, num2):
    """função recebe dois números como parametros e retorna o maior."""
    max_num = max(num1, num2)
    return max_num


def arithmetic_average(numbers):
    """função que calcula a médica aritmética dos valores contidos na lista"""
    total = 0
    for number in numbers:
        total += number
    return total / len(numbers)


def make_square(n):
    """imprime na tela um quadrado feito de * com lado e altura de tamanho n"""
    for row in range(n):
        print(n * "*")
