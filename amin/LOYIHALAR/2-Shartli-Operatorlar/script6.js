function hisobla() {
            let miqdor = parseFloat(document.getElementById('miqdor').value);
            let turi = document.getElementById('turi').value;
            let natijaP = document.getElementById('natija');

            if (isNaN(miqdor) || miqdor < 0) {
                natijaP.textContent = "Iltimos, to'g'ri son kiriting!";
                return;
            }

            let rublKursi = 0.011;
            let dollarKursi = 90;
            let javob = 0;

            if (turi === 'rubToUsd') {
                javob = miqdor * rublKursi;
                natijaP.textContent = miqdor + " Rubl = " + javob.toFixed(2) + " USD";
            } else {
                javob = miqdor * dollarKursi;
                natijaP.textContent = miqdor + " USD = " + javob.toFixed(2) + " Rubl";
            }
        }