let clrPickr = document.getElementById("cp");
let colorPicker = document.getElementById("colors");
let gC = document.getElementById("getcolor");

function color(){
  //colorPicker.innerHTML += '<li id="color"> Hex Code: '+ document.getElementById("cp").value + '</li><br>'
  colorPicker.innerHTML += '<li id="color"> Hex Code: '+ clrPickr.value  + '</li><br>';
  getcolor.style.background = clrPickr.value
}
