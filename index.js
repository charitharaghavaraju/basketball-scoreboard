let homeScoreButton = document.getElementById("home-score-button")
let homeScore = document.getElementById("home-score")
let homeCount = 0

function incrementHomeScore1() {
    homeCount += 1
    homeScore.textContent = homeCount
}

function incrementHomeScore2() {
    homeCount += 2
    homeScore.textContent = homeCount
}

function incrementHomeScore3() {
    homeCount += 3
    homeScore.textContent = homeCount
}

let guestScoreButton = document.getElementById("guest-score-button")
let guestScore = document.getElementById("guest-score")
let guestCount = 0

function incrementGuestScore1() {
    guestCount += 1
    guestScore.textContent = guestCount
}

function incrementGuestScore2() {
    guestCount += 2
    guestScore.textContent = guestCount
}

function incrementGuestScore3() {
    guestCount += 3
    guestScore.textContent = guestCount
}

let resetButton = document.getElementById("reset-button")

function resetScores() {
    homeCount = 0
    guestCount = 0
    homeScore.textContent = homeCount
    guestScore.textContent = guestCount
}
