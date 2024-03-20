function flipLetter() {
    const topFlap = document.querySelector('.split-flap .top');
    const bottomFlap = document.querySelector('.split-flap .bottom');
    const shadowFlap = document.querySelector('.split-flap .shadow');
    const currentChar = topFlap.querySelector('.letter').textContent.trim();
    const newChar = getNextCharBottom(currentChar);

    // Vorbereitung der Schattenkarte mit dem nächsten Buchstaben
    shadowFlap.querySelector('.letter').textContent = getNextCharBottom(currentChar);

    topFlap.style.transform = 'rotateX(-180deg)';
    topFlap.style.zIndex = 2;

    setTimeout(() => {
        // Die aktuelle obere Karte wird mit dem neuen Buchstaben aktualisiert
        topFlap.querySelector('.letter').textContent = newChar;
        // Die untere Karte wird mit demselben neuen Buchstaben aktualisiert, um Konsistenz zu wahren
        bottomFlap.querySelector('.letter').textContent = newChar;

        // Setzen Sie die Transformation der oberen Karte zurück, ohne sie visuell zurückzuklappen
        topFlap.classList.add('notransition'); // Deaktivieren Sie vorübergehend Transitionen
        topFlap.style.transform = 'rotateX(0deg)';
        topFlap.offsetHeight; // Trigger reflow
        topFlap.classList.remove('notransition'); // Aktivieren Sie Transitionen wieder

        topFlap.style.zIndex = 1;
        // Die Schattenkarte wird für den nächsten Buchstaben vorbereitet
        const nextChar = getNextCharBottom(newChar);
        shadowFlap.querySelector('.letter').textContent = nextChar;
    }, 700);
}


function getNextCharBottom(currentChar) {
    const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const currentIndex = alphabet.indexOf(currentChar);
    return alphabet[(currentIndex + 1) % alphabet.length];
}




























