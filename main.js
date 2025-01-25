async function executeExercise(exerciseNumber) {
    const resultElement = document.getElementById("result");
    const resultTitleElement = document.getElementById("result-title");
    const exerciseDescriptionElement = document.getElementById("exercise-description");
    resultTitleElement.innerHTML = `Resultado exercício ${exerciseNumber}:`;

    switch (exerciseNumber) {
        case 1:
            exerciseDescriptionElement.innerHTML = `Enunciado exercício 1: <br>
                Observe o trecho de código abaixo: <br> 
                int INDICE = 13, SOMA = 0, K = 0; <br>
                Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; } <br>
                Imprimir(SOMA); <br>
                Ao final do processamento, qual será o valor da variável SOMA?`;
            resultElement.innerHTML = `<p>${exercise1()}</p>`;
            break;
        case 2:
            exerciseDescriptionElement.innerHTML = `Enunciado exercício 2: <br>
                Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), <br>
                escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência. <br>
                IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;`;
            resultElement.innerHTML = `<p>${exercise2()}</p>`;
            break;
        case 3:
            exerciseDescriptionElement.innerHTML = `Enunciado exercício 3: <br>
                Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne: <br>
                • O menor valor de faturamento ocorrido em um dia do mês; <br>
                • O maior valor de faturamento ocorrido em um dia do mês; <br>
                • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal. <br>
                IMPORTANTE: <br>
                a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal; <br>
                b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;`;
            resultElement.innerHTML = `<p>${await exercise3()}</p>`;
            break;
        case 4:
            exerciseDescriptionElement.innerHTML = `Enunciado exercício 4: <br>
                Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado: <br>
                • SP – R$67.836,43 <br>
                • RJ – R$36.678,66 <br>
                • MG – R$29.229,88 <br>
                • ES – R$27.165,48 <br>
                • Outros – R$19.849,53 <br>
                Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.`;
            resultElement.innerHTML = `<p>${exercise4()}</p>`;
            break;
        case 5:
            exerciseDescriptionElement.innerHTML = `Enunciado exercício 5: <br>
                Escreva um programa que inverta os caracteres de uma string. <br>
                IMPORTANTE: <br>
                a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código; <br>
                b) Evite usar funções prontas, como, por exemplo, reverse;`;
            resultElement.innerHTML = `<p>${exercise5()}</p>`;
            break;
        default:
            resultTitleElement.innerHTML = `<p style="color: red;">Exercício não encontrado!</p>`;
            resultElement.innerHTML = `<p style="color: red;">Exercício não encontrado!</p>`;
            break;
    }
}

// Exercício 1
function exercise1() {
    const indice = 13;
    let soma = 0;
    let k = 0;

    while (k < indice) {
        k = k + 1;
        soma = soma + k;
    }

    return `O valor final da variável SOMA é: ${soma}`;
}

// Exercício 2
function exercise2() {
    const numero = 21;

    function fibonacci(n) {
        let fibSequence = [0, 1];
        while (fibSequence[fibSequence.length - 1] < n) {
            const nextFib = fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2];
            fibSequence.push(nextFib);
        }
        return fibSequence;
    }

    const fibSequence = fibonacci(numero);

    if (fibSequence.includes(numero)) {
        return `O número ${numero} pertence à sequência de Fibonacci.`;
    } else {
        return `O número ${numero} não pertence à sequência de Fibonacci.`;
    }
}

// Exercício 3 
async function exercise3() {
    async function loadJSONData() {
        try {
            const response = await fetch('/faturamento.json');
            const jsonData = await response.json();
            return jsonData;
        } catch (error) {
            return `Erro ao carregar o arquivo JSONC: ${error}`;
        }
    }
    const faturamentoMensal = await loadJSONData();
    const diasComFaturamento = faturamentoMensal.filter(d => d.valor > 0);
    const menorFaturamento = Math.min(...diasComFaturamento.map(d => d.valor));
    const maiorFaturamento = Math.max(...diasComFaturamento.map(d => d.valor));
    const somaFaturamento = diasComFaturamento.reduce((acc, d) => acc + d.valor, 0);
    const mediaMensal = somaFaturamento / diasComFaturamento.length;
    const diasAcimaDaMedia = diasComFaturamento.filter(d => d.valor > mediaMensal).length;

    return `
        Menor valor de faturamento: R$ ${menorFaturamento.toFixed(2).replace(".", ",")}<br>
        Maior valor de faturamento: R$ ${maiorFaturamento.toFixed(2).replace(".", ",")}<br><br>
        Dias com faturamento acima da média: ${diasAcimaDaMedia}
    `;
}

// Exercício 4
function exercise4() {
    const faturamentoMensalPorEstado = {
        SP: 67836.43,
        RJ: 36678.66,
        MG: 29229.88,
        ES: 27165.48,
        Outros: 19849.53
    }
    const faturamentoTotal = Object.values(faturamentoMensalPorEstado).reduce((total, valor) => total + valor, 0);

    const percentuais = Object.entries(faturamentoMensalPorEstado).map(([estado, valor]) => {
        const percentual = (valor / faturamentoTotal) * 100;
        return `${estado}: ${percentual.toFixed(2)}%`;
    });
    return `Faturamento total: R$ ${faturamentoTotal.toFixed(2).toString().replace(".", ",")} <br> <br> Percentuais: ${percentuais.join(", ")}`;
}

// Exercício 5
function exercise5() {
    const stringOriginal = "Ola, mundo!";
    let reversed = "";

    for (let i = stringOriginal.length - 1; i >= 0; i--) {
        reversed += stringOriginal[i];
    }

    return `Texto original: ${stringOriginal} <br> <br> Texto invertido: ${reversed}`;
}
