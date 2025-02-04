let homeScore =  0;
let guestScore = 0;
let homePoints = document.getElementById("home-score");
let guestPoints = document.getElementById("guest-score");

function add1PointToHome() {
  homeScore++;
  homePoints.innerText = homeScore;
}

function add2PointsToHome() {
    homeScore += 2;
     homePoints.innerText = homeScore;
}

function add3PointsToHome() {
    homeScore += 3;
     homePoints.innerText = homeScore;
}

function add1PointToGuest() {
  guestScore++;
  guestPoints.innerText = guestScore;
}

function add2PointsToGuest() {
     guestScore += 2;
     guestPoints.innerText = guestScore;
}

function add3PointsToGuest() {
     guestScore += 3;
     guestPoints.innerText = guestScore;
}