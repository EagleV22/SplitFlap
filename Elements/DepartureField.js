class DepartureField {
    constructor(fieldContainer, initialString) {
        this.fieldContainer = fieldContainer;
        this.flapDisplays = [];
        this.initDisplays();
        if (initialString) {
            this.setString(initialString);
        }
    }

    initDisplays() {
        for (let i = 0; i < 20; i++) {
            const display = new SplitFlapDisplay(this.fieldContainer, ' ');
            this.flapDisplays.push(display);
        }
    }

    setString(string) {
        const trimmedString = string.substring(0, 20);
        const paddedString = trimmedString.padStart(20, ' ');

        this.updateDisplays(paddedString);
    }

    updateDisplays(string) {
        for (let i = 0; i < this.flapDisplays.length; i++) {
            const char = string[i] || ' ';
            this.flapDisplays[i].flipToCharacter(char);
        }
    }
}























