var coll = document.getElementsByClassName("collapsible");
var cont = document.getElementsByClassName("content");
var i;

import datos from './data.js'
console.log(datos);
let info = document.getElementById("info")

for(let d of datos){
  info.innerHTML =info.innerHTML+`
  <button type="button" class="collapsible">${d.titulo}</button>
  <div class="content">
      <p>${d.texto}</p>
  </div>`
}

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      var content = this.nextElementSibling;
      this.classList.toggle("active");
      if (content.style.display === "block") {
        content.style.display = "none"
      } else {
        content.style.display = "block";
      }
    });
}
