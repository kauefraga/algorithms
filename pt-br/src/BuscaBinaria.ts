export default function BuscaBinaria(vetor: any[], alvo: number) {
  let ponteiroEsquerda = 0
  let ponteiroDireita = vetor.length - 1
  let indiceDoMeio = Math.floor(ponteiroEsquerda + (ponteiroDireita - ponteiroEsquerda) / 2)

  while (vetor.length > indiceDoMeio) {
    let numeroDoMeio = vetor[indiceDoMeio]

    if (numeroDoMeio === alvo) return indiceDoMeio

    if (numeroDoMeio > alvo) {
      ponteiroDireita = indiceDoMeio - 1
      BuscaBinaria(vetor[indiceDoMeio], alvo)
    }

    if (numeroDoMeio < alvo) {
      ponteiroEsquerda = indiceDoMeio + 1
      BuscaBinaria(vetor[indiceDoMeio], alvo)
    }

    if (ponteiroEsquerda > ponteiroDireita) throw new Error('[erro] índice não encontrado')

    indiceDoMeio = Math.floor(ponteiroEsquerda + (ponteiroDireita - ponteiroEsquerda) / 2)
  }
  return -1
}
