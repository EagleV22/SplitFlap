class SplitFlapBoard {
    constructor(parentElement) {
        this.parentElement = parentElement;
        this.rows = [];
        this.initializeBoard();
    }

    initializeBoard() {
        const titleRow = document.createElement('div');
        titleRow.innerHTML = `<div class="title">Departure</div><div class="title">Arrival</div>`;
        this.parentElement.appendChild(titleRow);

    }

    addRow() {
        const rowElement = document.createElement('div');
        rowElement.className = 'row';
        this.parentElement.appendChild(rowElement);

        const row = {
            time1: [],
            string1: [],
            time2: [],
            string2: []
        };

        for (let i = 0; i < 4; i++) {
            row.time1.push(new SplitFlapDisplay(rowElement, '0'));
        }

        new SplitFlapDisplay(rowElement, ' ');

        for (let i = 0; i < 20; i++) {
            row.string1.push(new SplitFlapDisplay(rowElement, ' '));
        }

        new SplitFlapDisplay(rowElement, ' ');

        for (let i = 0; i < 4; i++) {
            row.time2.push(new SplitFlapDisplay(rowElement, '0'));
        }

        new SplitFlapDisplay(rowElement, ' ');

        for (let i = 0; i < 20; i++) {
            row.string2.push(new SplitFlapDisplay(rowElement, ' '));
        }

        this.rows.push(row);
    }

    updateRow(rowIndex, time1, string1, time2, string2) {
        if (rowIndex < 0 || rowIndex >= this.rows.length) return;

        const row = this.rows[rowIndex];
        this.setDisplayContent(row.time1, time1);
        this.setDisplayContent(row.string1, string1);
        this.setDisplayContent(row.time2, time2);
        this.setDisplayContent(row.string2, string2);
    }

    setDisplayContent(displayArray, content) {
        for (let i = 0; i < displayArray.length; i++) {
            const character = content[i] || '';
            displayArray[i].flipToCharacter(character);
        }
    }
}















