// 1
// When the user clicks on the button, toggle between hiding and showing the dropdown content
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


// 2
// Remove/add .selected class to nav a
switch(window.location.pathname) {
  case '/':
    document.getElementById("users").classList.add("selected");
    break;
  case '/groups':
    document.getElementById("groups").classList.add("selected");
    break;
}


// 3
// Check if input fields aren't empty when adding new project
function ifEmpty() {
  var form = document.querySelector("form");
  form.addEventListener("submit", function(event) {
    var field1 = document.getElementById('name');
    var field2 = document.getElementById('surname');
    if (field1.value === '' || field2.value === '') {
      event.preventDefault();
      alert('Please enter all data');
    }
  });
}
