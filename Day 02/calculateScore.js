// Should have formatted the data already newb (but if you didn't, check the github)

// Globally scoped variable ftw
let finalScore = 0
// Part 1
const calcRound = (currentRound) => {
    // ULTIMATE SCUFF LOGIC
    console.log(currentRound)
    let player1 = currentRound[0]
    let player2 = currentRound[1]
    const scores = { X: 1, Y: 2, Z: 3}
        if (player1 === 'A') {
            player1 = 'X'
        } else if (player1 === 'B') {
            player1 = 'Y'
        } else {
            player1 = 'Z'
        }
            if (player1 === player2) {
                    finalScore += scores[player2] + 3
                } else if (player1 === 'X' && player2 === 'Z' || player1 === 'Y' && player2 === 'X' || player1 === 'Z' && player2 === 'Y'  ) {
                    finalScore += scores[player2]
                } else {
                    finalScore += scores[player2] + 6
                }   
    console.log(finalScore)
    return finalScore
}
// Part 2
const mustLose = (player1, player2) => {
    if(player1 === 'X') {
        finalScore += 3
    } else if (player1 === 'Y') {
        finalScore += 1
    } else {
        finalScore += 2
    }
}

const mustDraw = (player1) => {
    if(player1 === 'X') {
        finalScore += 4
    } else if (player1 === 'Y') {
        finalScore += 5
    } else {
        finalScore += 6
    }
}

const mustWin = (player1) => {
    if(player1 === 'X') {
        finalScore += 8
    } else if (player1 === 'Y') {
        finalScore += 9
    } else {
        finalScore += 7
    }
}

const calcEncryption = (currentRound) => {
    // ULTIMATE SCUFF LOGIC
    console.log(currentRound)
    let player1 = currentRound[0]
    let player2 = currentRound[1]
    if (player1 === 'A') {
            player1 = 'X'
    } else if (player1 === 'B') {
            player1 = 'Y'
    } else {
            player1 = 'Z'
    }
    if (player2 === 'X') {
        mustLose(player1)
    } else if( player2 === 'Y') {
        mustDraw(player1)
    } else {
        mustWin(player1)
    }
    console.log(finalScore)
    return finalScore
}


// Prepare the lazer beam
const calcScore = (array) => {
    // semi-recursion? (not really so much)
    let i = 0
    while (i < array.length) {
        let currentArray = array[i]
            calcEncryption(currentArray)
        i++
    }
}
// Just invoke me already

module.exports = calcScore