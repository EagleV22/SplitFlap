function flipLetter() {
    const topFlap = document.querySelector('.split-flap .top');
    const bottomFlap = document.querySelector('.split-flap .bottom');
    const shadowFlap = document.querySelector('.split-flap .shadow'); // Zugriff auf die Schattenkarte
    const currentChar = topFlap.querySelector('.letter').textContent.trim();
    const newChar = getNextCharBottom(currentChar); // Der nächste Buchstabe, der angezeigt wird

    shadowFlap.querySelector('.letter').textContent = newChar;

    topFlap.style.transform = 'rotateX(-180deg)';
    topFlap.style.zIndex = 2;

    setTimeout(() => {
        topFlap.querySelector('.letter').textContent = newChar;
        bottomFlap.querySelector('.letter').textContent = newChar;
        topFlap.style.transform = 'rotateX(0deg)';
        topFlap.style.zIndex = 1;
    }, 200); // Passen Sie diesen Wert an die Dauer Ihrer CSS-Übergänge an
}

function getNextCharBottom(currentChar) {
    const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const currentIndex = alphabet.indexOf(currentChar);
    return alphabet[(currentIndex + 1) % alphabet.length];
}




























