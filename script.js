window.addEventListener('load', () => {
    calcularMedia(5, 2, 8);
    calcularConsumo(500, 30);
    menorNumero(8, 5, 3);
    converterTemperatura(32);
    compararNumerosMultiplos(35, 2);
    compararNumerosMultiplos(35, 5);
    intervaloTempo(1, 2);
    listarPares();
    tabuada();
    fatorial(5);
    analiseFuncao();
    document.write("<br />");
    exibe();
    palindromos();

})

function calcularMedia(idade1, idade2, idade3) {
    var idade1, idade2, idade3, media;
    media = (idade1 + idade2 + idade3) / 3;
    console.log(media);
}

function calcularConsumo(distancia, litros) {
    var distancia, litros, media;
    media = distancia / litros;
    console.log(media);
}

function menorNumero(n1, n2, n3) {
    var n1, n2, n3, menor;
    if (n1 < n2 && n1 < n3) {
        menor = n1;
    } else if (n2 < n1 && n2 < n3) {
        menor = n2;
    } else if (n3 < n1 && n3 < n2) {
        menor = n3;
    }
    console.log(menor);
}

function converterTemperatura(C) {
    var C, F, temperatura;
    F = C * 1.8 + 32;
    temperatura = F;
    console.log(temperatura);
}

function compararNumerosMultiplos(n1, n2) {
    var n1, n2;
    if (n1 > n2 && n1 % n2 == 0) {
        console.log('Sâo múltiplos');
    } else {
        console.log('Não são múltiplos');
    }

}

function intervaloTempo(a, b) {
    var a, b, tempo;
    tempo = b - a;
    console.log('a partida durou ' + tempo + ' hora(s)');
}

function listarPares() {
    var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var b = [];
    for (var i = 1; i <= a.length; i++) {
        if (a[i] % 2 == 0) {
            b[i] = a[i];
        }
    }
    console.log(b);
}


/*const isPrime = (num) => {
    for (let i = 2; i < num; i++)
        if (num % i === 0) {
            return false;
        }
    return num > 1;
};*/

function tabuada(num) {
    var num;

    for (var count = 1; count <= 10; count++)
        document.write("3 x " + count + " = " + (3 * count) + "<br />")

}

function fatorial(num1) {
    if (num1 === 0) {
        return 1;
    }
    return num1 * fatorial(num1 - 1);

    console.log(fatorial(num1));
}

function analiseFuncao() {
    const a = [2, 3, 1, 0, 5, 23, 10];
    const b = [1, 2, 3, 4, 5, 13, 10, 8];

    const inter = [],
        union = b,
        diff = [];

    a.map((item) => {
        if (b.indexOf(item) != -1) {
            inter.push(item);
        } else {
            union.push(item);
        }
    });

    b.map((item) => {
        if (a.indexOf(item) == -1) {
            diff.push(item);
        }
    });

    inter.sort((a, b) => a - b);
    union.sort((a, b) => a - b);
    diff.sort((a, b) => a - b);

    console.log(inter);
    console.log(union);
    console.log(diff);
}

function exibe() {
    var matriz = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];

    for (let lin = 0; lin < 3; lin++) {
        for (let col = 0; col < 3; col++)
            document.write(matriz[lin][col] + "  ");

        document.write("<br />");
    }
}

function palindromos() {
    const testes = ["reviver", "luz azul", "radar", "manhã"];
    const ignoreSpaces = str => str.split(' ').join('');
    const checkPalindrome = str => ignoreSpaces(str) === ignoreSpaces(str.split('').reverse().join(''));
    const resultados = testes.map(checkPalindrome);
    console.log(resultados);
}