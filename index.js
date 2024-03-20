function flipLetter() {
    const topFlap = document.querySelector('.split-flap .top');
    const bottomFlap = document.querySelector('.split-flap .bottom');
    const newChar = getNextChar(topFlap.textContent.trim());

    topFlap.style.transform = 'rotateX(-180deg)';

    setTimeout(() => {
        topFlap.querySelector('.letter').style.visibility = 'hidden';
    }, 350)

    setTimeout(() => {
        topFlap.querySelector('.letter').textContent = newChar;
        bottomFlap.querySelector('.letter').textContent = newChar;
        topFlap.style.transform = 'rotateX(0deg)';
        topFlap.querySelector('.letter').style.visibility = 'visible';
    }, 700);
}

function getNextChar(currentChar) {
    const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const currentIndex = alphabet.indexOf(currentChar);
    return alphabet[(currentIndex + 1) % alphabet.length];
}


























