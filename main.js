function myFunction() {
    document.getElementById("dropDownMenu").classList.toggle("main-container__section-education-container__dropdow-menu-content-show");
  }

  window.onclick = function(event) {
    if (!event.target.matches('#dropdown-button')) {
      var dropdowns = document.getElementsByClassName("main-container__section-education-container__dropdow-menu-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('main-container__section-education-container__dropdow-menu-content-show')) {
          openDropdown.classList.remove('main-container__section-education-container__dropdow-menu-content-show');
        }
      }
    }
  }

  document.querySelector('#dropdown-button').addEventListener('click', () => {
    myFunction();
  });