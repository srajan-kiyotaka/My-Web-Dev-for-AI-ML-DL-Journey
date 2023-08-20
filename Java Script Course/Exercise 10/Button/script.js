const gameButton = document.querySelector('.game-btn');
const musicButton = document.querySelector('.music-btn');
const techButton = document.querySelector('.tech-btn');

function toggle(toggleBtn){
    if(gameButton.classList.contains('is-toggle')){
        gameButton.classList.remove('is-toggle');
    }
    if(musicButton.classList.contains('is-toggle')){
        musicButton.classList.remove('is-toggle');
    }
    if(techButton.classList.contains('is-toggle')){
        techButton.classList.remove('is-toggle');
    }
    toggleBtn.classList.add('is-toggle');
}