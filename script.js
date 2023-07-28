
function openNav() {
document.getElementById("myNav").style.height = "80%";
}

function closeNav() {
document.getElementById("myNav").style.height = "0%";
}


let slideIndex = 1;

function showSlide(index) {
  const slides = document.getElementsByClassName('mySlides');
  const dots = document.getElementsByClassName('dot');

  if (index > slides.length) {
    slideIndex = 1;
  }
  if (index < 1) {
    slideIndex = slides.length;
  }

  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.add('hide');
  }

  // Deactivate all dots
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove('active');
  }

  // Show the selected slide and activate the corresponding dot
  slides[slideIndex - 1].classList.remove('hide');
  dots[slideIndex - 1].classList.add('active');
}

function plusSlides(n) {
  showSlide((slideIndex += n));
}

function currentSlide(n) {
  showSlide((slideIndex = n));
}
