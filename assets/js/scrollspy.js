$("body").scrollspy({
    target: "nav",
    offset: 70
})
  $("body").scrollspy({target: "nav"});
  $("nav").on("activate.bs.scrollspy", function () {
      var currentItem = $(".nav li.active > a").text();
      $("#info").empty().html(currentItem);
      document.getElementById("info").style.paddingLeft = "40%";
  });
