function parolTekshir() {
      var parol = prompt("Parolni kiriting:");

      if (parol == "0711" || parol == "ochil") {
        alert("Qabul qilindi");
        document.getElementById("xabar").innerText = "Parolni qayerdan bilding!";
        document.getElementById("xabar").style.color = "white";
      } else {
        document.getElementById("xabar").innerText = "Bolakay parolni esla topolmasank kirmaysan!";
        document.getElementById("xabar").style.color = "white";
      }
    } 