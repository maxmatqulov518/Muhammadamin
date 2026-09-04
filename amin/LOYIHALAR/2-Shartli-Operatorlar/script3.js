function rangOzgar() {
      var rang = prompt("Rang nomini yozing (red, blue, yellow, black):");

      document.body.style.backgroundColor = rang;

      if (rang == "black") {
        document.body.style.color = "white";
        document.getElementById("sarlavha").style.color = "white";
      } else {
        document.body.style.color = "black";
        document.getElementById("sarlavha").style.color = "black";
      }
    }