function vazinTekshir() {
      let parol = prompt("Vazningizni kiriting:");

      if(parol.length < 18.5){
        document.getElementById("semizcha").innerText = "Vazin yetish movchiligi";
      }
      else        if(parol.length < 24.9){
        document.getElementById("semizcha").innerText = "Meyor";
      }
      else            if(parol.length <=30){
        document.getElementById("semizcha").innerText = "Ortiqcha vazin";
      }

    }