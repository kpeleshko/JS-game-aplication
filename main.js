let gamePlaying, playerRoundScore, dulerRoundScore;

let cardsAll = [
    { img: 'img/', points: 2},
    { img: 'img/', points: 3},
    { img: 'img/', points: 4},
    { img: 'img/', points: 5},
    { img: 'img/', points: 6},
    { img: 'img/', points: 7},
    { img: 'img/', points: 8},
    { img: 'img/', points: 9},
    { img: 'img/', points: 10},
    { img: 'img/', points: 10},
    { img: 'img/', points: 10},
    { img: 'img/', points: 10},
    { img: 'img/', points: 11},
]

newGame()

function newGame() {
    playerRoundScore = 0;
    dulerRoundScore = 0;
    gamePlaying = true;
    document.querySelector('.final-message').textContent = ' '
    document.getElementById('player__score').textContent = "0";
    document.getElementById('duler__score').textContent = "0";
};


document.querySelector('.btn__start').addEventListener('click', function() {
    if (gamePlaying) {
        // random card
        let playerCard1 = cardsAll[Math.floor(Math.random() * cardsAll.length)];
        let playerCard2 = cardsAll[Math.floor(Math.random() * cardsAll.length)];
        let dulerCard1 = cardsAll[Math.floor(Math.random() * cardsAll.length)];

        //display the img result
        document.querySelector('.player__card-1').src = playerCard1.img;
        document.querySelector('.player__card-2').src = playerCard2.img;
        document.querySelector('.duler__card-1').src = dulerCard1.img;


        //display and add scores
        playerRoundScore = playerCard1.points + playerCard2.points;
        dulerRoundScore = dulerCard1.points;
        
        document.querySelector('#player__score').textContent = playerRoundScore
        document.querySelector('#duler__score').textContent = dulerRoundScore
    }
});



document.querySelector('.btn__add').addEventListener('click', function() {
    if (gamePlaying) {
        // random img+score
        let playerCard3 = cardsAll[Math.floor(Math.random() * cardsAll.length)];

        // add img and score
        document.querySelector('.player__card-3').src = playerCard3.img;
        playerRoundScore += playerCard3.points;
        document.querySelector('#player__score').textContent = playerRoundScore
    }
});



document.querySelector('.btn__show').addEventListener('click', function() {
    if (gamePlaying) {
        // show diler second card
        let dulerCard2 = cardsAll[Math.floor(Math.random() * cardsAll.length)];
        document.querySelector('.duler__card-2').src = dulerCard2.img;
        dulerRoundScore += dulerCard2.points;
        document.querySelector('#duler__score').textContent = dulerRoundScore

        // check who won the game
        if (playerRoundScore < dulerRoundScore || playerRoundScore > 21) {
            document.querySelector('.final-message').textContent = 'You are looser!'
        } else if (playerRoundScore > dulerRoundScore) {
            document.querySelector('.final-message').textContent = 'You are winner!'
        } else {
            document.querySelector('.final-message').textContent = 'You both are winners!'
        }

        //end game
        gamePlaying = false;
    }
});



document.querySelector('.btn__new').addEventListener('click', function() {
    newGame()
});
