function myFunctionE() {
  var x = document.getElementById("myDIV");
  if (x.innerHTML != "Elementary School Participation Rates") {
    x.innerHTML = "<h3>Elementary School Participation Rates</h3>";
  } else {
    x.innerHTML = " ";
  }
}

function myFunctionM() {
  var x = document.getElementById("myDIV");
  if (x.innerHTML != "Middle School Participation Rates") {
    x.innerHTML = "<h3>Middle School Participation Rates</h3>";
  } else {
    x.innerHTML = " ";
  }
}

function myFunctionH() {
  var x = document.getElementById("myDIV");
  if (x.innerHTML != "High School Participation Rates") {
    x.innerHTML = "<h3>High School Participation Rates</h3>";
  } else {
    x.innerHTML = " ";
  }
}

 function toggleFocus(el)
 {
  el.style.backgroundColor =  el.style.backgroundColor=="e2e2e2" ? "inherit" : "e2e2e2";
 }

 function toggleOffFocus(el)
 {

  el.style.backgroundColor =  el.style.backgroundColor=="#fbfbfb" ? "inherit" : "#fbfbfb";
 }
