function parolTekshir() {
      let parol = prompt("Parolni kiriting:");

      if(parol.length < 6){
        document.getElementById("natija").innerText = "Zaif kod";
      }
      else if(parol.length < 8){
        document.getElementById("natija").innerText = "O'rtacha kod";
      }
      else   if(parol.length <=10){
        document.getElementById("natija").innerText = "Kuchli kod";
      }

    }   