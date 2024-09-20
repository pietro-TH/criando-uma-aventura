let storyElement = document.getElementById("story");
let choicesElement = document.getElementById("choices");

function startGame() {
    storyElement.innerHTML = "Escolha seu jogador:";
    choicesElement.innerHTML = `
        <button onclick="choosePlayer('A')">Jogador A</button>
        <button onclick="choosePlayer('B')">Jogador B</button>
    `;
}

function choosePlayer(player) {
    storyElement.innerHTML = `Você escolheu o Jogador ${player}. Agora, escolha um treino:`;
    choicesElement.innerHTML = player === 'A' ?
        `<button onclick="training('saque')">Treino de Saque</button>
         <button onclick="training('recepcao')">Treino de Recepção</button>` :
        `<button onclick="training('ataque')">Treino de Ataque</button>
         <button onclick="training('defesa')">Treino de Defesa</button>`;
}

function training(type) {
    storyElement.innerHTML = `Você completou o treino de ${type}. Pronto para a competição!`;
    choicesElement.innerHTML = `
        <button onclick="competition(1)">Enfrentar Time 1</button>
        <button onclick="competition(2)">Enfrentar Time 2</button>
    `;
}

function competition(team) {
    let result = Math.random() > 0.5 ? 'win' : 'lose';
    if (result === 'win') {
        storyElement.innerHTML = `Você ganhou contra o Time ${team}! Avança para a final.`;
    } else {
        storyElement.innerHTML = `Você perdeu contra o Time ${team}. Treine mais!`;
    }
    choicesElement.innerHTML = `<button onclick="startGame()">Reiniciar Aventura</button>`;
}

startGame();
