
"use strict"

function calculate() {
  var radius = document.getElementById("radius").value;
  var volume = (4/3) * Math.PI * Math.pow(radius, 3);
  document.getElementById("result").value = volume.toFixed(2);
}
