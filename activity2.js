function getScore() {
    //local storage punto getitem no ayuda a odtener el valor de la variable score = puntaje
    score = localStorage.getItem("score");
    //le pasamos por medio de un h1 el valor de la variable score al id update
    document.getElementById("update").innerHTML = "<h1>Puntaje: " + score + "</h1>";
}
function back() { 
//window punto location permite leer un nuevo archivo html
    window.location = "activity_1.html";
 }