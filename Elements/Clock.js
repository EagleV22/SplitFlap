class Clock {
    constructor(inputElement, clockContainer) {
        this.inputElement = inputElement;
        this.clockContainer = clockContainer;
        this.flapDisplays = [];
        this.initDisplays();
        this.attachInputListener();
    }

    initDisplays() {
        for (let i = 0; i < 4; i++) {
            const display = new SplitFlapDisplay(this.clockContainer, '0');
            this.flapDisplays.push(display);
        }
    }

    attachInputListener() {
        this.inputElement.addEventListener('input', (e) => {
            const time = e.target.value;
            if (time.length === 4 && /^[0-2][0-9][0-5][0-9]$/.test(time)) {
                this.updateDisplays(time);
            }
        });
    }

    updateDisplays(time) {
        for (let i = 0; i < 4; i++) {
            const digit = time[i];
            this.flapDisplays[i].flipToCharacter(digit);
        }
    }
}