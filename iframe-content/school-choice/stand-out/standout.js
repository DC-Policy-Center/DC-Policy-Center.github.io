function myFunctionPart() {
  var x = document.getElementById("myDIV");
  if (x.innerHTML != "Highest and Lowest In-Boundary Participation Rates") {
    x.innerHTML = "<h3>Highest and Lowest In-Boundary Participation Rates</h3>";
  } else {
    x.innerHTML = " ";
  }
}

function myFunctionDraw() {
  var x = document.getElementById("myDIV");
  if (x.innerHTML != "Schools that Draw More or Fewer Students than Expected") {
    x.innerHTML = "<h3>Schools that Draw More or Fewer Students than Expected</h3>";
  } else {
    x.innerHTML = " ";
  }
}

function myFunctionAa() {
  var x = document.getElementById("myDIV");
  if (x.innerHTML != "Schools that are More or Less African American than the Neighborhood") {
    x.innerHTML = "<h3>Schools that are More or Less African American than the Neighborhood</h3>";
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
