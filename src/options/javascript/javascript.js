function myFunction() {
    var x = document.getElementById("messageTable");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }


  
    document.getElementById("show").addEventListener("click", myFunction);
  