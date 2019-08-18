function getNumber() {
    var randomNumber = Math.floor(Math.random() * 900 + 100);
    document.getElementById('myNumber').innerHTML = randomNumber;
}