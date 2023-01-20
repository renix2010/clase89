score = 0;
function updateScore() {
    score = score + 1;
    document.getElementById("score").innerHTML = "Puntuación: " + score;
    console.log(score);
}
function saveScore() {
    // localStorage es la que permite guardar el valor de la variable en la memoria con la orden set item:D
    localStorage.setItem("score", score);
}
function nextPage() { 
    window.location = "activity_2.html"; }
