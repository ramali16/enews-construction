const searchForm = document.querySelector('nav form');
  const searchInput = document.querySelector('nav input[type="text"]');

  searchForm.addEventListener('click', function() {
  searchInput.classList.add('active');
});
  searchForm.addEventListener('blur', function() {
  searchInput.classList.remove('active');
});