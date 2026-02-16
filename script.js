const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularRank(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    let nivel;

    if (vitorias <= 10) {
        nivel = "Ferro";
    } else if (vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return `O Herói tem saldo de ${saldoVitorias} está no nível de ${nivel}`;
}

rl.question("Digite o número de vitórias: ", (v) => {
    rl.question("Digite o número de derrotas: ", (d) => {

        const vitorias = parseInt(v);
        const derrotas = parseInt(d);

        console.log(calcularRank(vitorias, derrotas));

        rl.close();
    });
});

