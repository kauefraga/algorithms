def BuscaBinaria(vetor, alvo):
	ponteiroEsquerda = 0
	ponteiroDireita = len(vetor) - 1
	indiceDoMeio = 0

	while ponteiroEsquerda <= ponteiroDireita:

		indiceDoMeio = ponteiroEsquerda + (ponteiroDireita - ponteiroEsquerda) // 2

		if vetor[indiceDoMeio] < alvo:
			ponteiroEsquerda = indiceDoMeio + 1

		elif vetor[indiceDoMeio] > alvo:
			ponteiroDireita = indiceDoMeio - 1

		else:
			return indiceDoMeio
	return -1
