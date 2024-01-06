document.addEventListener('DOMContentLoaded', function() {
  var dropbtn = document.getElementById('dropdownBTN');
  var dropdownContent = document.getElementById('dropdownContent');

  dropbtn.addEventListener('mouseover', function() {
    dropdownContent.style.display = 'block';
  });

  dropbtn.addEventListener('mouseout', function() {
    dropdownContent.style.display = 'none';
  });
});