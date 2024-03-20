function flipLetter() {
    const topFlap = document.querySelector('.split-flap .top');
    const bottomFlap = document.querySelector('.split-flap .bottom');
    const shadowFlap = document.querySelector('.split-flap .shadow');
    const currentChar = topFlap.querySelector('.letter').textContent.trim();
    const newChar = getNextCharBottom(currentChar);

    shadowFlap.querySelector('.letter').textContent = getNextCharBottom(newChar);

    topFlap.style.transform = 'rotateX(-90deg)';
    topFlap.style.zIndex = 2;
    shadowFlap.querySelector('.letter').textContent = newChar;

    setTimeout(() => {
        shadowFlap.querySelector('.letter').textContent = currentChar;

        topFlap.classList.add('notransition');
        topFlap.style.transform = 'rotateX(0deg)';
        topFlap.offsetHeight;
        topFlap.classList.remove('notransition');
        topFlap.querySelector('.letter').textContent = newChar;

        bottomFlap.classList.add('notransition');
        bottomFlap.style.transform = 'rotateX(90deg)';
        bottomFlap.offsetHeight;
        bottomFlap.classList.remove('notransition');
        bottomFlap.querySelector('.letter').textContent = newChar;
    }, 500);


    setTimeout(() => {
        bottomFlap.style.transform = 'rotateX(0deg)';

        topFlap.style.zIndex = 1;

    }, 1000);
}


function getNextCharBottom(currentChar) {
    const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const currentIndex = alphabet.indexOf(currentChar);
    return alphabet[(currentIndex + 1) % alphabet.length];
}




























