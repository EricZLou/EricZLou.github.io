function getNumber() {
    var randomNumber = Math.floor(Math.random() * 900 + 100); // Generates random number
    document.getElementById('myNumber').innerHTML = randomNumber; // Sets content of <div> to number
}