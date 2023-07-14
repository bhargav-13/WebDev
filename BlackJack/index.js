function getRandomCard(){
    return Math.floor(Math.random()*13)+1
}


let msgEL = document.getElementById("message-el")
let cardEL = document.getElementById("cards-el")
let sumEL = document.getElementById("sum-el")


let message = ""
let isAlive = true
let hasBlackJack = false
let cards = []

function startGame(){
    let fcard = getRandomCard()
    let scard = getRandomCard()
    cards = [fcard, scard] //array
    renderGame()
}

function renderGame(){

    if(isAlive && !hasBlackJack){
        let sum = 0
        for(i = 0; i<cards.length; i+=1){
            sum += cards[i];
        }

        cardEL.textContent = "Cards: " + cards
        sumEL.textContent = "Sum: " + sum

        if(sum < 21){
            message = "Do you want to draw a new card?"
        }
        else if(sum === 21){
            message  = "You've got Blackjack!"
            hasBlackJack = true
        }
        else{
            message = "You're out of the game! You Loose!!"
            isAlive = false
        }
    }
    else{
        document.getElementById("error").textContent ="You can't play anymore!!"
    } 
    msgEL.textContent = message
}



function newCard(){
    cards.push(getRandomCard())
    renderGame()
}