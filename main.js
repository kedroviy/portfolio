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

  var slideIndex = 1;
  showSlidesWithControl(slideIndex);

function plusSlides(n) {
    showSlidesWithControl(slideIndex += n);
}

function currentSlide(n) {
    showSlidesWithControl(slideIndex = n);
}

function showSlidesWithControl(n) {
  var i;
  var slides = document.getElementsByClassName("main-container__section-slider-container__slider-container__slider__slide");
  
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "flex";  
}

document.querySelector('.main-container__section-slider-container__slider-container__control-element-1').addEventListener('click', () => {
    plusSlides(-1);
});

document.querySelector('.main-container__section-slider-container__slider-container__control-element-2').addEventListener('click', () => {
    plusSlides(1);
});