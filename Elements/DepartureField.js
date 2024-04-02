class DepartureField {
    constructor(fieldContainer, initialString) {
        this.fieldContainer = fieldContainer;
        this.flapDisplays = [];
        this.initDepDisplays();
        if (initialString) {
            this.setDepString(initialString);
        }
    }

    initDepDisplays() {
        for (let i = 0; i < 20; i++) {
            const display = new SplitFlapDisplay(this.fieldContainer, 'A');
            this.flapDisplays.push(display);
        }
    }

    setDepString(string) {
        const trimmedString = string.substring(0, 20);
        const paddedString = trimmedString.padStart(20, ' ');

        this.updateDepDisplays(paddedString);
    }

    updateDepDisplays(string) {
        for (let i = 0; i < this.flapDisplays.length; i++) {
            const char = string[i] || ' ';
            this.flapDisplays[i].flipToCharacter(char);
        }
    }
}























