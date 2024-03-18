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
    function resetScore(){ score = 0 }
    function getScore(){ return score }
    return { name, increaseScore, resetScore, getScore, playerSymbol }
}

const playerA = createPlayer('Player A', 'X')

const playerB = createPlayer('Player B', 'O')

const gameStatus = (function(){
    const modal = document.querySelector('dialog')
    modal.showModal()

    const closeBtn = document.querySelector('.close-button')
    closeBtn.addEventListener('click', () => modal.close())

    const startBtn = document.querySelector('.start')
    startBtn.addEventListener('click', () => gameStatus.placePlayerSymbol())

    const resetBtn = document.querySelector('.reset')
    resetBtn.addEventListener('click', () => {
        resetCurrentGame()
        playerA.resetScore()
        playerB.resetScore()
        gameDisplay.displayScore()
    })

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
            checkScoreAnnounceWinner()
            checkGameBoardStatus()
        }))
    }

    // Clears gameboard and resets turn counter.
    function resetCurrentGame(){
        gameBoard.gameBoard.fill('')
        gameBoardDOM.forEach(slot => slot.textContent = '')
        turnCounter = 0
    }

    function checkGameBoardStatus(){
        
        // Checks if row A is filled with X or O
        if (gameBoard.gameBoard[0] === 'X' && gameBoard.gameBoard[1] === 'X' && gameBoard.gameBoard[2] === 'X') {
            playerA.increaseScore()
            setTimeout(() => {
                alert(`Player A wins! ${playerA.getScore()} - ${playerB.getScore()}`)
                resetCurrentGame()
            })
            gameDisplay.displayScore()

        } else if (gameBoard.gameBoard[0] === 'O' && gameBoard.gameBoard[1] === 'O' && gameBoard.gameBoard[2] === 'O'){
            playerB.increaseScore()
            setTimeout(() => {
                alert(`Player B wins! ${playerA.getScore()} - ${playerB.getScore()}`)
                resetCurrentGame()
            })
            gameDisplay.displayScore()

            // Checks row B

        } else if (gameBoard.gameBoard[3] === 'X' && gameBoard.gameBoard[4] === 'X' && gameBoard.gameBoard[5] === 'X') {
            playerA.increaseScore()
            setTimeout(() => {
                alert(`Player A wins! ${playerA.getScore()} - ${playerB.getScore()}`)
                resetCurrentGame()
            })
            gameDisplay.displayScore()

        } else if (gameBoard.gameBoard[3] === 'O' && gameBoard.gameBoard[4] === 'O' && gameBoard.gameBoard[5] === 'O') {
            playerB.increaseScore()
            setTimeout(() => {
                alert(`Player B wins! ${playerA.getScore()} - ${playerB.getScore()}`)
                resetCurrentGame()
            })
            gameDisplay.displayScore()

            // Checks row C

        } else if (gameBoard.gameBoard[6] === 'X' && gameBoard.gameBoard[7] === 'X' && gameBoard.gameBoard[8] === 'X') {
            playerA.increaseScore()
            setTimeout(() => {
                alert(`Player A wins! ${playerA.getScore()} - ${playerB.getScore()}`)
                resetCurrentGame()
            })
            gameDisplay.displayScore()

        } else if (gameBoard.gameBoard[6] === 'O' && gameBoard.gameBoard[7] === 'O' && gameBoard.gameBoard[8] === 'O') {
            playerB.increaseScore()
            setTimeout(() => {
                alert(`Player B wins! ${playerA.getScore()} - ${playerB.getScore()}`)
                resetCurrentGame()
            })

            // Checks column 1

        } else if (gameBoard.gameBoard[0] === 'X' && gameBoard.gameBoard[3] === 'X' && gameBoard.gameBoard[6] === 'X') {
            playerA.increaseScore()
            setTimeout(() => {
                alert(`Player A wins! ${playerA.getScore()} - ${playerB.getScore()}`)
                resetCurrentGame()
            })
            gameDisplay.displayScore()
            
        } else if (gameBoard.gameBoard[0] === 'O' && gameBoard.gameBoard[3] === 'O' && gameBoard.gameBoard[6] === 'O') {
            playerB.increaseScore()
            setTimeout(() => {
                alert(`Player B wins! ${playerA.getScore()} - ${playerB.getScore()}`)
                resetCurrentGame()
            })
            gameDisplay.displayScore()

            // Checks column 2

        } else if (gameBoard.gameBoard[1] === 'X' && gameBoard.gameBoard[4] === 'X' && gameBoard.gameBoard[7] === 'X') {
            playerA.increaseScore()
            setTimeout(() => {
                alert(`Player A wins! ${playerA.getScore()} - ${playerB.getScore()}`)
                resetCurrentGame()
            })
            gameDisplay.displayScore()

        } else if (gameBoard.gameBoard[1] === 'O' && gameBoard.gameBoard[4] === 'O' && gameBoard.gameBoard[7] === 'O') {
            playerB.increaseScore()
            setTimeout(() => {
                alert(`Player B wins! ${playerA.getScore()} - ${playerB.getScore()}`)
                resetCurrentGame()
            })
            gameDisplay.displayScore()

            // Checks column 3

        } else if (gameBoard.gameBoard[2] === 'X' && gameBoard.gameBoard[5] === 'X' && gameBoard.gameBoard[8] === 'X') {
            playerA.increaseScore()
            setTimeout(() => {
                alert(`Player A wins! ${playerA.getScore()} - ${playerB.getScore()}`)
                resetCurrentGame()
            })
            gameDisplay.displayScore()

        } else if (gameBoard.gameBoard[2] === 'O' && gameBoard.gameBoard[5] === 'O' && gameBoard.gameBoard[8] === 'O') {
            playerB.increaseScore()
            setTimeout(() => {
                alert(`Player B wins! ${playerA.getScore()} - ${playerB.getScore()}`)
                resetCurrentGame()
            })
            gameDisplay.displayScore()

            // Checks for diagonal lines starting from index 0 to 8
            
        } else if (gameBoard.gameBoard[0] === 'X' && gameBoard.gameBoard[4] === 'X' && gameBoard.gameBoard[8] === 'X') {
            playerA.increaseScore()
            setTimeout(() => {
                alert(`Player A wins! ${playerA.getScore()} - ${playerB.getScore()}`)
                resetCurrentGame()
            })
            gameDisplay.displayScore()

        } else if (gameBoard.gameBoard[0] === 'O' && gameBoard.gameBoard[4] === 'O' && gameBoard.gameBoard[8] === 'O') {
            playerB.increaseScore()
            setTimeout(() => {
                alert(`Player B wins! ${playerA.getScore()} - ${playerB.getScore()}`)
                resetCurrentGame()
            })
            gameDisplay.displayScore()

            // Check for diagonal lines starting from index 2 to 6
            
        } else if (gameBoard.gameBoard[2] === 'X' && gameBoard.gameBoard[4] === 'X' && gameBoard.gameBoard[6] === 'X') {
            playerA.increaseScore()
            setTimeout(() => {
                alert(`Player A wins! ${playerA.getScore()} - ${playerB.getScore()}`)
                resetCurrentGame()
            })
            gameDisplay.displayScore()

        } else if (gameBoard.gameBoard[2] === 'O' && gameBoard.gameBoard[4] === 'O' && gameBoard.gameBoard[6] === 'O') {
            playerB.increaseScore()
            setTimeout(() => {
                alert(`Player B wins! ${playerA.getScore()} - ${playerB.getScore()}`)
                resetCurrentGame()
            })
            gameDisplay.displayScore()
        }
    }

    function checkScoreAnnounceWinner(){
        if (playerA.getScore() === 3 && playerB.getScore() === 3 && playerA.getScore() === playerB.getScore()){
            playerA.resetScore()
            playerB.resetScore()
        } else if (playerA.getScore() === 3 && playerA.getScore() > playerB.getScore()) {
            gameDisplay.displayWinnerModal(playerA.name)
            playerA.resetScore()
            playerB.resetScore()
        } else if (playerB.getScore() === 3 && playerB.getScore() > playerA.getScore()) {
            gameDisplay.displayWinnerModal(playerB.name)
            playerA.resetScore()
            playerB.resetScore()
        }
    }

    setInterval(checkScoreAnnounceWinner, 1000)

    const gameBoardDOM = document.querySelectorAll('.slot')

    return { placePlayerSymbol, checkGameBoardStatus, checkScoreAnnounceWinner, resetCurrentGame }
})();

const gameDisplay = (function(){
    const gameBoardDOM = document.querySelectorAll('.slot')
    function displayCurrentGameBoard (){
        gameBoardDOM.forEach((currentElement, currentIndex) => {
            currentElement.textContent = gameBoard.gameBoard[currentIndex]
        })
    };

    const playerNameSubmitBtn = document.querySelector('.submitBtn')
    playerNameSubmitBtn.addEventListener('click', () => {
        playerA.name = document.querySelector('#player-a').value
        playerB.name = document.querySelector('#player-b').value
        playerADOM.textContent = `${playerA.name}: ${playerA.getScore()}`
        playerBDOM.textContent = `${playerB.name}: ${playerB.getScore()}`
    })

    const playerADOM = document.querySelector('.player-a')
    const playerBDOM = document.querySelector('.player-b')

    function displayScore(){
        playerADOM.textContent = `${playerA.name}: ${playerA.getScore()}`
        playerBDOM.textContent = `${playerB.name}: ${playerB.getScore()}`
    }

    displayScore()

    const winnerModal = document.querySelector('.winner-modal')
    const modalHeader = document.querySelector('.winner-modal > h2')
    const closeBtnWinnerModal = document.querySelector('.close-btn-winner-modal')
    closeBtnWinnerModal.addEventListener('click', () => winnerModal.close())
    function displayWinnerModal(winner){
        modalHeader.textContent = `The winner is: ${winner}!`
        winnerModal.showModal()
        // Full reset
        gameStatus.resetCurrentGame()
        playerA.resetScore()
        playerB.resetScore()
        displayScore()
    }

    return { displayCurrentGameBoard, displayScore, displayWinnerModal }
})();