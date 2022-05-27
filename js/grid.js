var imagesSliderPath = [] ;
imagesSliderPath[0] = 'tlo' ;
imagesSliderPath[1] = 'trawa' ;
imagesSliderPath[2] = 'chemia' ;
imagesSliderPath[3] = 'tlo' ;
imagesSliderPath[4] = 'trawa' ;
imagesSliderPath[5] = 'chemia' ;
imageElements = [] ;
imageDiv = [] ;
dotsElements = [] ;
y = 0 ;

for(x=0 ; x < imagesSliderPath.length ; x++) {
    imageDiv[x] = document.createElement("div")
    imageDiv[x].classList.add("mySlides",);
    imageElements[x] = document.createElement("img");
    imageElements[x].classList.add("images");
    imageElements[x].setAttribute("src","./img/"+imagesSliderPath[x]+".jpg");
    //imageElements[x].style.display = "none";
    imageDiv[x].append(imageElements[x]);
    console.log(imageDiv[x]);
    document.getElementsByClassName("slideshow-container")[0].append(imageDiv[x]);
    dotsElements[x] = document.createElement("span");
    dotsElements[x].classList.add("dot");
    y++ ;
    dotsElements[x].setAttribute("onclick","currentSlide("+y+")");

    document.getElementsByClassName("grid-item-long")[0].append(dotsElements[x]);
}

let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");




  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {


    dots[i].className = dots[i].className.replace(" active", "");
  

}

  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}