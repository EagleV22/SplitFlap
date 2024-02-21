function updateFlipDisplay() {
    const flip = document.getElementById('flip');
    const nextChar = String.fromCharCode(65 + Math.floor(Math.random() * 26));

    flip.querySelector('.front').textContent = nextChar;

    flip.style.transform = 'rotateX(-180deg)';

    setTimeout(() => {
        flip.querySelector('.back').textContent = nextChar;
        flip.style.transition = 'none';
        flip.style.transform = 'rotateX(0deg)';
        requestAnimationFrame(() => {
            flip.style.transition = 'transform 0.6s';
        });
    }, 300);
}

setInterval(updateFlipDisplay, 1000);


























