/**Plays a certain sound everytime a one of the game area buttons are clicked. 
 * They all have a sound that is relevant to the name of the button.
 * 
*/
function playRock() {
    let audio = document.getElementById('rocksound');
    audio.play();
}

function playPaper() {
    let audio = document.getElementById('papersound');
    audio.play();
}

function playScissors() {
    let audio = document.getElementById('scissorssound');
    audio.play();
}

function playLizard() {
    let audio = document.getElementById('lizardsound');
    audio.play();
}

function playSpock() {
    let audio = document.getElementById('spocksound');
    audio.play();
}