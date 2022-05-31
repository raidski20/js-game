let start_game_btn = document.getElementById('start-game-btn');

start_game_btn.addEventListener('click', function () {

    start_game_btn.style.display= 'none'
    document.getElementById("game-container").style.display= 'block';

    let game_time_counter = document.getElementById("game-time-counter");

    let start_time = new Date();


    setInterval(function() {
        let elapsed_time = Date.now() - start_time;
        elapsed_time = elapsed_time/1000;
        
        // get seconds
        var seconds = Math.round(elapsed_time % 60);

        // remove seconds from the date
        elapsed_time = Math.floor(elapsed_time / 60);

        // get minutes
        var minutes = Math.round(elapsed_time % 60)

        game_time_counter.innerHTML = (minutes + 'M:' + seconds + 'S');
    }, 1000);
})