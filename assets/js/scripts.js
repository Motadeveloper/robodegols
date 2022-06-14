function startTimer(duration, display) {


    var timer = duration, minutes, seconds;

    setInterval(function() {

        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);


        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = "00:" + minutes + ":" + seconds;

        if(--timer < 0) {
            timer = duration;
        }
    }, 1000);
}


window.onload = function() {
    var duration = 60 * 55.4; // conversão para segundos
    
    var display = document.querySelector("#timer"); // Elemento para exibir o time

    startTimer(duration, display); // inicia a função
}

window.sr = ScrollReveal({ reset: true});

sr.reveal('.scroll_1', {duration: 1000});