class Clock {
    constructor(clockContainer, timeString) {
        this.clockContainer = clockContainer;
        this.flapDisplays = [];
        this.initDisplays();
        if (timeString) {
            this.setTime(timeString);
        }
    }

    initDisplays() {
        for (let i = 0; i < 4; i++) {
            const display = new SplitFlapDisplay(this.clockContainer, '0');
            this.flapDisplays.push(display);
        }
    }

    setTime(timeString) {
        if (timeString.length === 4 && /^[0-2][0-9][0-5][0-9]$/.test(timeString)) {
            this.updateDisplays(timeString);
        }
    }

    updateDisplays(time) {
        for (let i = 0; i < 4; i++) {
            const digit = time[i];
            this.flapDisplays[i].flipToCharacter(digit);
        }
    }
}