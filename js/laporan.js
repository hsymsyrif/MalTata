 // JavaScript to toggle the dropdown content
 document.querySelector('.dropdown button').addEventListener('click', function() {
  var dropdownContent = document.querySelector('.dropdown-content');
  dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
});