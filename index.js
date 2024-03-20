function flipLetter() {
    const topFlap = document.querySelector('.split-flap .top');
    const bottomFlap = document.querySelector('.split-flap .bottom');
    const shadowFlap = document.querySelector('.split-flap .shadow'); // Zugriff auf die Schattenkarte
    const newCharBottom = getNextCharBottom(topFlap.querySelector('.letter').textContent.trim());

    /
    shadowFlap.querySelector('.letter').textContent = getNextCharBottom(newCharBottom);

    topFlap.style.transform = 'rotateX(-180deg)';
    topFlap.style.zIndex = 2;

    setTimeout(() => {
        topFlap.querySelector('.letter').textContent = newCharBottom;
        bottomFlap.querySelector('.letter').textContent = newCharBottom;
        topFlap.style.transform = 'rotateX(0deg)';
        topFlap.style.zIndex = 1;
    }, 200);
}

function getNextCharBottom(currentChar) {
    const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const currentIndex = alphabet.indexOf(currentChar);
    return alphabet[(currentIndex + 1) % alphabet.length];
}




























