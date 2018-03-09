function setIframeSource() {
   var theSelect = document.getElementById('location');
   var theIframe = document.getElementById('myIframe');
   var theUrl;

   theUrl = theSelect.options[theSelect.selectedIndex].value;
   theIframe.src = theUrl;
}

function setIframeSource2() {
   var theSelect = document.getElementById('location2');
   var theIframe = document.getElementById('myIframe2');
   var theUrl;

   theUrl = theSelect.options[theSelect.selectedIndex].value;
   theIframe.src = theUrl;
}
