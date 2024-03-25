document.addEventListener('DOMContentLoaded', function() {
    var tabelle = document.getElementById('meineTabelle');
    var ausgewaehlteZeile = null;
    var modal = document.getElementById('meinModal');
    var modalCloseBtn = document.getElementsByClassName('close')[0];
    var speichernBtn = document.getElementById('datenSpeichern');

    // Initialisiere Tabelle mit einigen Daten
    initialisiereTabelle();

    document.getElementById('reiheHinzufuegen').addEventListener('click', function() {
        var zeile = tabelle.insertRow(-1);
        var zelle1 = zeile.insertCell(0);
        var zelle2 = zeile.insertCell(1);
        zelle1.contentEditable = "true";
        zelle2.contentEditable = "true";
        zelle1.focus();
    });

    document.getElementById('reiheLoeschen').addEventListener('click', function() {
        if (ausgewaehlteZeile) {
            tabelle.deleteRow(ausgewaehlteZeile.rowIndex);
            ausgewaehlteZeile = null;
        }
    });

    tabelle.addEventListener('click', function(e) {
        var gewaehlteZeile = e.target.parentNode;
        if (ausgewaehlteZeile) {
            ausgewaehlteZeile.classList.remove('selected');
        }
        ausgewaehlteZeile = gewaehlteZeile;
        ausgewaehlteZeile.classList.add('selected');
        // Zeigt Modal zum Bearbeiten
        document.getElementById('nameInput').value
            = ausgewaehlteZeile.cells[0].textContent;
        document.getElementById('alterInput').value = ausgewaehlteZeile.cells[1].textContent;
        modal.style.display = "block";
    });

    modalCloseBtn.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    speichernBtn.addEventListener('click', function() {
        var name = document.getElementById('nameInput').value;
        var alter = document.getElementById('alterInput').value;
        if (ausgewaehlteZeile) {
            ausgewaehlteZeile.cells[0].textContent = name;
            ausgewaehlteZeile.cells[1].textContent = alter;
        }
        modal.style.display = "none";
    });

    function initialisiereTabelle() {
        var daten = [
            { name: 'Max Mustermann', alter: 30 },
            { name: 'Erika Musterfrau', alter: 25 },
        ];

        daten.forEach(function(person) {
            var zeile = tabelle.insertRow();
            var zelle1 = zeile.insertCell(0);
            var zelle2 = zeile.insertCell(1);
            zelle1.textContent = person.name;
            zelle2.textContent = person.alter;
            zelle1.contentEditable = "true";
            zelle2.contentEditable = "true";
        });
    }
});


