const gameBoard = {
    // Each slot of the gameboard (9 in total) is represented in this array.
    // Columns are represented by numbers, rows by letters.
    gameBoard: ['', '', '',
                '', '', '',
                '', '', '']
}

function createPlayer(name, symbol){
    let playerSymbol = symbol;
    let score = 0;
    function increaseScore(){ score++ }
    function getScore(){ return score }
    return { name, increaseScore, getScore, playerSymbol }
}

const playerA = createPlayer('Player A', 'X')

const playerB = createPlayer('Player B', 'O')

const gameStatus = (function(){
    let turnCounter = 0;
    function placePlayerSymbol(){
        gameBoardDOM.forEach((slot, index) => slot.addEventListener('click', function(){
            function checkPlayerTurnGetSymbol(){
                if (turnCounter % 2 === 0 && gameBoard.gameBoard[index].length === 0) {
                    turnCounter++
                    gameBoard.gameBoard[index] = 'O'
                    slot.textContent = 'O'
                } else if (turnCounter & 2 !== 0 && gameBoard.gameBoard[index].length === 0) {
                    turnCounter++
                    gameBoard.gameBoard[index] = 'X'
                    slot.textContent = 'X'
                }
            }
            checkPlayerTurnGetSymbol()
            checkGameBoardStatus()
            checkScoreAnnounceWinner()
            console.log(turnCounter)
        }))
    }

    function checkGameBoardStatus(){
        function resetCurrentGame(){
            gameBoard.gameBoard.fill('')
            gameBoardDOM.forEach(slot => slot.textContent = '')
            turnCounter = 0
        }

        // Checks if row A is filled with X or O
        if (gameBoard.gameBoard[0] === 'X' && gameBoard.gameBoard[1] === 'X' && gameBoard.gameBoard[2] === 'X') {
            playerA.increaseScore()
            setTimeout(() => {
                alert(`Player A wins! ${playerA.getScore()} - ${playerB.getScore()}`)
                resetCurrentGame()
            })

        } else if (gameBoard.gameBoard[0] === 'O' && gameBoard.gameBoard[1] === 'O' && gameBoard.gameBoard[2] === 'O'){
            playerB.increaseScore()
            setTimeout(() => {
                alert(`Player B wins! ${playerA.getScore()} - ${playerB.getScore()}`)
                resetCurrentGame()
            })
        }

        // Checks row B
        if (gameBoard.gameBoard[3] === 'X' && gameBoard.gameBoard[4] === 'X' && gameBoard.gameBoard[5] === 'X') {
            playerA.increaseScore()
            setTimeout(() => {
                alert(`Player A wins! ${playerA.getScore()} - ${playerB.getScore()}`)
                resetCurrentGame()
            })

        } else if (gameBoard.gameBoard[3] === 'O' && gameBoard.gameBoard[4] === 'O' && gameBoard.gameBoard[5] === 'O') {
            playerB.increaseScore()
            setTimeout(() => {
                alert(`Player B wins! ${playerA.getScore()} - ${playerB.getScore()}`)
                resetCurrentGame()
            })
        }

        // Checks row C
        if (gameBoard.gameBoard[6] === 'X' && gameBoard.gameBoard[7] === 'X' && gameBoard.gameBoard[8] === 'X') {
            playerA.increaseScore()
            setTimeout(() => {
                alert(`Player A wins! ${playerA.getScore()} - ${playerB.getScore()}`)
                resetCurrentGame()
            })

        } else if (gameBoard.gameBoard[6] === 'O' && gameBoard.gameBoard[7] === 'O' && gameBoard.gameBoard[8] === 'O') {
            playerB.increaseScore()
            setTimeout(() => {
                alert(`Player B wins! ${playerA.getScore()} - ${playerB.getScore()}`)
                resetCurrentGame()
            })
        }

        // Checks column 1

        if (gameBoard.gameBoard[0] === 'X' && gameBoard.gameBoard[3] === 'X' && gameBoard.gameBoard[6] === 'X') {
            playerA.increaseScore()
            setTimeout(() => {
                alert(`Player A wins! ${playerA.getScore()} - ${playerB.getScore()}`)
                resetCurrentGame()
            })
            
        } else if (gameBoard.gameBoard[0] === 'O' && gameBoard.gameBoard[3] === 'O' && gameBoard.gameBoard[6] === 'O') {
            playerB.increaseScore()
            setTimeout(() => {
                alert(`Player B wins! ${playerA.getScore()} - ${playerB.getScore()}`)
                resetCurrentGame()
            })
        }

        // Checks column 2

        if (gameBoard.gameBoard[1] === 'X' && gameBoard.gameBoard[4] === 'X' && gameBoard.gameBoard[7] === 'X') {
            playerA.increaseScore()
            setTimeout(() => {
                alert(`Player A wins! ${playerA.getScore()} - ${playerB.getScore()}`)
                resetCurrentGame()
            })

        } else if (gameBoard.gameBoard[1] === 'O' && gameBoard.gameBoard[4] === 'O' && gameBoard.gameBoard[7] === 'O') {
            playerB.increaseScore()
            setTimeout(() => {
                alert(`Player B wins! ${playerA.getScore()} - ${playerB.getScore()}`)
                resetCurrentGame()
            })
        }

        // Checks column 3

        if (gameBoard.gameBoard[2] === 'X' && gameBoard.gameBoard[5] === 'X' && gameBoard.gameBoard[8] === 'X') {
            playerA.increaseScore()
            setTimeout(() => {
                alert(`Player A wins! ${playerA.getScore()} - ${playerB.getScore()}`)
                resetCurrentGame()
            })

        } else if (gameBoard.gameBoard[2] === 'O' && gameBoard.gameBoard[5] === 'O' && gameBoard.gameBoard[8] === 'O') {
            playerB.increaseScore()
            setTimeout(() => {
                alert(`Player B wins! ${playerA.getScore()} - ${playerB.getScore()}`)
                resetCurrentGame()
            })
        }

        // Checks for diagonal lines starting from index 0 to 8

        if (gameBoard.gameBoard[0] === 'X' && gameBoard.gameBoard[4] === 'X' && gameBoard.gameBoard[8] === 'X') {
            playerA.increaseScore()
            setTimeout(() => {
                alert(`Player A wins! ${playerA.getScore()} - ${playerB.getScore()}`)
                resetCurrentGame()
            })

        } else if (gameBoard.gameBoard[0] === 'O' && gameBoard.gameBoard[4] === 'O' && gameBoard.gameBoard[8] === 'O') {
            playerB.increaseScore()
            setTimeout(() => {
                alert(`Player B wins! ${playerA.getScore()} - ${playerB.getScore()}`)
                resetCurrentGame()
            })
        }

        // Check for diagonal lines starting from index 2 to 6

        if (gameBoard.gameBoard[2] === 'X' && gameBoard.gameBoard[4] === 'X' && gameBoard.gameBoard[6] === 'X') {
            playerA.increaseScore()
            setTimeout(() => {
                alert(`Player A wins! ${playerA.getScore()} - ${playerB.getScore()}`)
                resetCurrentGame()
            })

        } else if (gameBoard.gameBoard[2] === 'O' && gameBoard.gameBoard[4] === 'O' && gameBoard.gameBoard[6] === 'O') {
            playerB.increaseScore()
            setTimeout(() => {
                alert(`Player B wins! ${playerA.getScore()} - ${playerB.getScore()}`)
                resetCurrentGame()
            })
        }
    }

    function checkScoreAnnounceWinner(){
        if (playerA.getScore() === playerB.getScore() && playerA.getScore() === 3 && playerB.getScore() === 3) {
            console.log('Its a tie!')
        }

        if (playerA.getScore() > playerB.getScore() && playerA.getScore() === 3) {
            console.log('Player A wins!')
        } else if (playerB.getScore() > playerA.getScore() && playerB.getScore() === 3) {
            console.log('Player B wins!')
        }
    }

    const gameBoardDOM = document.querySelectorAll('.slot')

    return { placePlayerSymbol, checkGameBoardStatus, checkScoreAnnounceWinner }
})();

gameStatus.placePlayerSymbol();

const gameDisplay = (function(){
    const gameBoardDOM = document.querySelectorAll('.slot')
    function displayCurrentGameBoard (){
        gameBoardDOM.forEach((currentElement, currentIndex) => {
            currentElement.textContent = gameBoard.gameBoard[currentIndex]
        })
    };
    return { displayCurrentGameBoard }
})();