var sel1 = document.querySelector('#sel1');
var sel2 = document.querySelector('#sel2');
var options2 = sel2.querySelectorAll('option');
function giveSelection(selValue) {
  sel2.innerHTML = '';
  for(var i = 0; i < options2.length; i++) {
    if(options2[i].dataset.option === selValue) {
      sel2.appendChild(options2[i]);
      }
    }
  }
giveSelection(sel1.value);
function myFunction() {
  var less = document.getElementById("less");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (less.style.display === "none") {
    less.style.display = "inline";
    btnText.innerHTML = "Devamını Göster";
    moreText.style.display = "none";
  } else {
    less.style.display = "none";
    btnText.innerHTML = "Devamını Gizle";
    moreText.style.display = "inline";
  }
}
function shapeShift(){
  var satici = document.getElementById("satici");
  if (satici.innerHTML == '<i class="fa-solid fa-caret-down"></i>') {
    satici.innerHTML ='<i class="fa-solid fa-caret-up"></i>'
  } else {
    satici.innerHTML ='<i class="fa-solid fa-caret-down"></i>'
  }
}