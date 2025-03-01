document.addEventListener('DOMContentLoaded', function () {
    const audio = document.getElementById('background-music');
    audio.volume = 0.5;
    const slider = document.querySelector('.slider');
    let slideIndex = 0;
    function nextSlide() {
        slideIndex = (slideIndex + 1) % 3;
        slider.style.transform = `translateX(-${slideIndex * 100}%)`;
    }
    setInterval(nextSlide, 3000);
});
function updateTimer() {
    const startDate = new Date('2024-12-01T00:00:00');
    const now = new Date();
    const diff = now - startDate;
    document.getElementById('months').textContent = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
    document.getElementById('days').textContent = Math.floor(diff / (1000 * 60 * 60 * 24)) % 30;
    document.getElementById('hours').textContent = Math.floor(diff / (1000 * 60 * 60)) % 24;
    document.getElementById('minutes').textContent = Math.floor(diff / (1000 * 60)) % 60;
    document.getElementById('seconds').textContent = Math.floor(diff / 1000) % 60;
}
setInterval(updateTimer, 1000);
updateTimer();
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️-';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}
setInterval(createHeart, 300);