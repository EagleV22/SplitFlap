class SplitFlapBoard {
    constructor(parentElement) {
        this.parentElement = parentElement;
        this.rows = [];
        this.initializeBoard();
    }

    initializeBoard() {
        const titleRow = document.createElement('div');
        titleRow.className = 'title-row';
        titleRow.innerHTML = `<div class="title">Departure</div><div class="title">Arrival</div>`;
        this.parentElement.appendChild(titleRow);

    }

    addRow() {
        const rowElement = document.createElement('div');
        rowElement.className = 'row';
        this.parentElement.appendChild(rowElement);
        const rowIndex = this.rows.length;

        const row = {
            time1: [],
            string1: [],
            time2: [],
            string2: []
        };

        for (let i = 0; i < 4; i++) {
            row.time1.push(new ClockFlap(rowElement, '0'));
        }

        new SplitFlapDisplay(rowElement, ' ');

        for (let i = 0; i < 20; i++) {
            row.string1.push(new SplitFlapDisplay(rowElement, ' '));
        }

        new SplitFlapDisplay(rowElement, ' ');

        for (let i = 0; i < 4; i++) {
            row.time2.push(new ClockFlap(rowElement, '0'));
        }

        new SplitFlapDisplay(rowElement, ' ');

        for (let i = 0; i < 20; i++) {
            row.string2.push(new SplitFlapDisplay(rowElement, ' '));
        }

        row.rawValues = { time1: '', string1: '', time2: '', string2: '' };

        rowElement.addEventListener('click', () => {
            this.selectRow(rowIndex);
        });

        this.rows.push(row);
    }

    updateRow(rowIndex, time1, string1, time2, string2) {
        if (rowIndex < 0 || rowIndex >= this.rows.length) return;

        const row = this.rows[rowIndex];
        row.rawValues = { time1, string1, time2, string2 };
        this.setDisplayContent(row.time1, time1);
        this.setDisplayContent(row.string1, string1);
        this.setDisplayContent(row.time2, time2);
        this.setDisplayContent(row.string2, string2);
    }

    selectRow(rowIndex) {
        this.rows.forEach((row, index) => {
            const rowElement = this.parentElement.children[index + 1];
            rowElement.classList.remove('selected');
        });

        const selectedRowElement = this.parentElement.children[rowIndex + 1];
        selectedRowElement.classList.add('selected');

        const selectedRowValues = this.rows[rowIndex].rawValues;
        document.getElementById('time1Input').value = selectedRowValues.time1;
        document.getElementById('string1Input').value = selectedRowValues.string1;
        document.getElementById('time2Input').value = selectedRowValues.time2;
        document.getElementById('string2Input').value = selectedRowValues.string2;

        this.selectedRowIndex = rowIndex;
    }

    setDisplayContent(displayArray, content) {
        for (let i = 0; i < displayArray.length; i++) {
            const character = content[i] || '';
            displayArray[i].flipToCharacter(character);
        }
    }
}















