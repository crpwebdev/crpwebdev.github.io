(() => {
  const toggle = document.querySelector('.navbar-toggle');
  const collapse = document.querySelector('.navbar-collapse');
  const scrollLinks = document.querySelectorAll('[data-scroll]');

  scrollLinks.forEach(function(scrollLink) {
    scrollLink.addEventListener('click', function() {
      collapse.classList.add('hidden-xs');
    });
  });

  toggle.addEventListener('click', function() {
    const classList = collapse.classList;
    if (classList.contains('hidden-xs')) {
      classList.remove('hidden-xs');
    } else {
      classList.add('hidden-xs');
    }
  });

  smoothScroll.init();
})();
