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


def find_biggest_name(names):
    """função recebe uma lista de nomes e retorna o com mais caracteres"""
    biggest_name = names[0]
    for name in names:
        if len(name) > len(biggest_name):
            biggest_name = name
    return biggest_name


def paint_cost(area):
    """calcula quantidade de tinta necessárias pra pintar parede e o custo"""
    can_price = 80
    required_liters = area / 3
    required_cans = required_liters // 18
    if required_liters % 18:
        required_cans += 1
    return required_cans, required_cans * can_price
