function flipLetter() {
    const topFlap = document.querySelector('.split-flap .top');
    const bottomFlap = document.querySelector('.split-flap .bottom');
    const newChar = getNextChar(topFlap.textContent.trim());

    topFlap.style.transform = 'rotateX(-180deg)';

    setTimeout(() => {
        bottomFlap.style.zIndex = '0';
        bottomFlap.classList.add('covering');
    }, 600);

    setTimeout(() => {
        topFlap.querySelector('.letter').textContent = newChar;
        bottomFlap.querySelector('.letter').textContent = newChar;
        topFlap.style.transform = 'rotateX(0deg)';
        bottomFlap.classList.remove('covering');
        bottomFlap.style.zIndex = '';
    }, 1200);
}

function getNextChar(currentChar) {
    const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const currentIndex = alphabet.indexOf(currentChar);
    return alphabet[(currentIndex + 1) % alphabet.length];
}


























