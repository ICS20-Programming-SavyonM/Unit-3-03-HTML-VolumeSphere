// Copyright (c) 2023 Savyon All rights reserved
//
// Created by: Savyon
// Created on: March 2023
// This file contains the JS functions for index.html

"use strict"

//calculate volume 
function calculate() {
  var radius = document.getElementById("radius").value;
  var volume = (4/3) * Math.PI * Math.pow(radius, 3);
  document.getElementById("result").innerHTML = "The volume is " + volume.toFixed(2) + "m<sup>3</sup>"
}