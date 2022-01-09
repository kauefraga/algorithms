from BuscaBinaria import BuscaBinaria

vetor = [1, 3, 4, 6, 8, 9, 20, 34, 41, 54, 67, 212, 434, 501, 502, 1002, 3403, 5000, 5001, 5002, 5003, 5004]
# vetorImpar = [0, 2, 3, 4, 6, 7, 8, 10, 11, 22, 33, 43, 54]
print(vetor)
alvo = input('\nQual número você escolhe? (não precisa estar dentro do vetor)')

resultado = BuscaBinaria(vetor, int(alvo))

if resultado != -1:
	print('Índice encontrado, vetor[{indice}]'.format(indice=resultado))
else:
	print('[erro] índice não encontrado')
