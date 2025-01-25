async function executeExercise(exerciseNumber) {
    const resultElement = document.getElementById("result");
    const resultTitleElement = document.getElementById("result-title");
    resultTitleElement.innerHTML = `Resultado exercício ${exerciseNumber}:`;

    switch (exerciseNumber) {
        case 1:
            resultElement.innerHTML = `<p>${exercise1()}</p>`;
            break;
        case 2:
            resultElement.innerHTML = `<p>${exercise2()}</p>`;
            break;
        case 3:
            resultElement.innerHTML = `<p>${await exercise3()}</p>`;
            break;
        case 4:
            resultElement.innerHTML = `<p>${exercise4()}</p>`;
            break;
        case 5:
            resultElement.innerHTML = `<p>${exercise5()}</p>`;
            break;
        default:
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
