let playerTotal = 0
let botTotal = 0

const gameOver = () => {

    let removeP = document.querySelector('#playerBlocks')
    removeP.innerHTML = ''
    document.querySelector('#pScore').innerHTML = '0'

    let removeB = document.querySelector('#botBlocks')
    removeB.innerHTML = ''
    document.querySelector('#bScore').innerText = '0'

    botTotal = 0
    playerTotal = 0
}

const playerMove = (num1,num2) => {
    
    playerTotal += num1
    for (let i = 1; i <= num1; i++){
        document.querySelector('#playerBlocks').appendChild(document.createElement("div"))
    }

    botTotal += num2
    for (let i = 1; i <= num2; i++){
        document.querySelector('#botBlocks').appendChild(document.createElement("div"))
    }
    if(playerTotal >= 10){
        alert('YOU WIN');
        gameOver()
    } else if (botTotal >= 10) {
            alert('YOU LOSE! The bot wins.');
            gameOver()
    }
    document.querySelector('#pScore').innerHTML = playerTotal
    document.querySelector('#bScore').innerHTML = botTotal
    console.log(playerTotal);
    console.log(botTotal);
}

const onClick = function() {
    
    let playerChoice = Number(this.innerHTML)

    const botChoices = [1,2,3,4]

    let botChoice = botChoices[Math.floor(Math.random()* botChoices.length)]

    if (playerChoice === botChoice){
        alert('GAME OVER! You picked the same number as the bot.');
        gameOver()
        } else {
        playerMove(playerChoice,botChoice)
        }
}

const showInstructions = function() {
    document.querySelector('#instructions').style.display = 'flex'
}

const closeInstructions  = function() {
    document.querySelector('#instructions').style.display = 'none'
}

document.getElementById('n1').onclick = onClick;
document.getElementById('n2').onclick = onClick;
document.getElementById('n3').onclick = onClick;
document.getElementById('n4').onclick = onClick;
document.getElementById('HowTo').onclick = showInstructions;
document.getElementById('instructions').onclick = closeInstructions;


