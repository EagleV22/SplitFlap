function flipLetter() {
    const topFlap = document.querySelector('.split-flap .top');
    const bottomFlap = document.querySelector('.split-flap .bottom');
    const shadowFlap = document.querySelector('.split-flap .shadow');
    const currentChar = topFlap.querySelector('.letter').textContent.trim();
    const newChar = getNextCharBottom(currentChar);

    shadowFlap.querySelector('.letter').textContent = getNextCharBottom(newChar);

    topFlap.style.transform = 'rotateX(-90deg)';
    topFlap.style.zIndex = 2;

    setTimeout(() => {
        topFlap.style.transform = 'rotateX(-180deg)';
        topFlap.querySelector('.letter').textContent = newChar;
    }, 500);


    setTimeout(() => {
        // topFlap.querySelector('.letter').textContent = newChar;
        bottomFlap.querySelector('.letter').textContent = newChar;

        topFlap.classList.add('notransition');
        topFlap.style.transform = 'rotateX(0deg)';
        topFlap.offsetHeight;
        topFlap.classList.remove('notransition');

        topFlap.style.zIndex = 1;

        const nextChar = getNextCharBottom(newChar);
        shadowFlap.querySelector('.letter').textContent = nextChar;
    }, 1000);
}


function getNextCharBottom(currentChar) {
    const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const currentIndex = alphabet.indexOf(currentChar);
    return alphabet[(currentIndex + 1) % alphabet.length];
}




























