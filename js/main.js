(function() {
  var toggle = document.querySelector(".navbar-toggle")
    , collapse = document.querySelector(".navbar-collapse")
    , scrollLinks = document.querySelectorAll("[data-scroll]")
  ;

  for (var i = 0, len = scrollLinks.length; i < len; i++) {
    scrollLinks[i].addEventListener("click", function() {
      collapse.classList.add("hidden-xs");
    });
  }

  toggle.addEventListener("click", function() {
    if (collapse.classList.contains("hidden-xs")) {
      collapse.classList.remove("hidden-xs");
    } else {
      collapse.classList.add("hidden-xs");
    }
  });

  smoothScroll.init();
  
})();