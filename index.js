do{
    // Solicita que o usuário digite o nome do herói
    let nome = console.log("Digite o nome do herói:");

    // Solicita que o usuário digite a quantidade de XP
    let xp = parseInt(console.log("Digite a quantidade de XP do herói:"));

    // Variável que armazena o nível
    let nivel = "";

    // Estrutura de decisão que determina o nível
    if (xp < 1000) {
    nivel = "Ferro";
    } else if (xp >= 1001 && xp <= 2000) {
    nivel = "Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
    nivel = "Prata";
    } else if (xp >= 5001 && xp <= 7000) {
    nivel = "Ouro";
    } else if (xp >= 7001 && xp <= 8000) {
    nivel = "Platina";
    } else if (xp >= 8001 && xp <= 9000) {
    nivel = "Ascendente";
    } else if (xp >= 9001 && xp <= 10000) {
    nivel = "Imortal";
    } else if (xp >= 10001) {
    nivel = "Radiante";
    } else {
    nivel = "Indefinido";
    }

    // Exibe mensagem com o resultado
    console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
}while (op !== 0);

let op = parseInt(console.log("Digite 0 para sair do programa ou qualquer tecla para continuar"));

