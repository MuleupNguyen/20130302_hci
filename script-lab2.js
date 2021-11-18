function quantity() {
    const prev = document.querySelector('.lab2-c6-2')
    const next = document.querySelector('.lab2-c6-4')
    const quantity = document.querySelector('.lab2-c6-3')
    let i = 1;
    prev.onclick = () => {
        if(quantity.innerText == 1){
            i = 1
        }else {
            i--
        }
        update(i)
    }
    next.onclick = () => {
        i++
        update(i)
    }

    function update(i) {
        quantity.innerHTML = i;
    }

}

var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("img-avatar");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}





quantity();