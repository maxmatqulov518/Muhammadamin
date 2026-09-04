function kayfiyatTekshir() {
      var kayfiyat = prompt("Bugun kayfiyatingiz qanday? (yaxshi / yomon)");

      if (kayfiyat == "yaxshi") {
        document.getElementById("emoji").innerText = "🤪";

      }
      else if (kayfiyat == "yomon") {
        document.getElementById("emoji").innerText = "🤕";
      }
      else {
        console.log("Xato kiritildi: " + kayfiyat);
        alert("Faqat 'yaxshi' yoki 'yomon' deb yozing!");
      }
    } 