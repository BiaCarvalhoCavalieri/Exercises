# Projeto de Resolução de Problemas

Este projeto foi desenvolvido para resolver os problemas descritos abaixo. Cada solução encontra-se em um arquivo numerado conforme o número da questão correspondente.

## Descrição das Questões Resolvidas

### **Questão 1**
**Enunciado:**
Dado o trecho de código abaixo:

```c
int INDICE = 13, SOMA = 0, K = 0;
Enquanto K < INDICE faça {
    K = K + 1;
    SOMA = SOMA + K;
}
Imprimir(SOMA);
```

Ao final do processamento, qual será o valor da variável `SOMA`?

**Solução:**
O cálculo foi implementado e o resultado encontra-se no arquivo **1-calculo-soma.py**.

---

### **Questão 2**
**Enunciado:**
Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos dois valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não à sequência.

**Solução:**
A implementação que verifica se o número pertence à sequência de Fibonacci está no arquivo **2-verifica-fibonacci.py**.

---

### **Questão 3**
**Enunciado:**
Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, escreva um programa que calcule e retorne:

- O menor valor de faturamento ocorrido em um dia do mês;
- O maior valor de faturamento ocorrido em um dia do mês;
- Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

**Notas:**
- Usar JSON ou XML como fonte dos dados;
- Dias sem faturamento (finais de semana e feriados) devem ser ignorados no cálculo da média.

**Solução:**
Os cálculos foram realizados com base nos dados e estão disponíveis no arquivo **3-analise-faturamento.py**.

---

### **Questão 4**
**Enunciado:**
Dado o valor de faturamento mensal de uma distribuidora detalhado por estado:

- SP – R$67.836,43
- RJ – R$36.678,66
- MG – R$29.229,88
- ES – R$27.165,48
- Outros – R$19.849,53

Escreva um programa que calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.

**Solução:**
O cálculo de percentuais encontra-se no arquivo **4-percentual-faturamento.py**.

---

### **Questão 5**
**Enunciado:**
Escreva um programa que inverta os caracteres de uma string sem usar funções prontas, como `reverse`.

**Solução:**
A inversão de strings foi implementada no arquivo **5-inverte-string.py**.

---

## Como Executar
1. Clone este repositório:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   ```
2. Navegue até a pasta do projeto:
   ```bash
   cd Exercises
   ```
3. Execute o arquivo correspondente à questão desejada:
   ```bash
   node nome-do-arquivo.js
   ```

## Tecnologias Utilizadas
- Linguagem: Javascript
- Dados: JSON (quando aplicável)

## Repositório no GitHub
[Link]()