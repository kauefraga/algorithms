<h1 align="center">Algoritmo de Busca Binária</h1>

```py
Entrada:
  array = [1, 2, 4, 5, 6]
  target = 2; 3; 5
Saída: 1, 'Não encontrado', 3
```

<h2 align="center">Algoritmo</h2>

```
- Crie os ponteiros -> esquerdo(l) e direito(r)
- Crie o ponteiro do meio(m) -> l+(r-l)/2
- Enquanto (Tamanho do vetor > m)
  - Pegue e aloque o número do meio(mn) -> vetor[m]
  - Verificações
    - Se (mn == alvo) retorne m
    - Se (mn > alvo) r = m - 1
    - Se (mn < alvo) l = m + 1
    - Se (l > r) "Alvo não encontrado"
  - m = l+(r-l)/2
- retorne -1 (Caso não haja pesquisa)
```

<p align="center">
  <img
    src='https://raw.githubusercontent.com/kauefraga/assets/main/BinarySearch/BinarySearch.png'
    width="500px"
    height="350px"
  />
</p>
