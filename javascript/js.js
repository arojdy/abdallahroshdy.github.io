
const text= document.querySelector(".sec-text");
function printLetterByLetter(destination, message, speed){
    var i = 0;
    var interval = setInterval(function(){
       text.innerHTML+= message.charAt(i);
        i++;
    
     
    }, speed);
}


const textload=()=>{
    setTimeout(()=>{printLetterByLetter(text,  "Abdallah"
    , 100);
    text.innerHTML=""
    },0);
    setTimeout(()=>{printLetterByLetter(text, " a Devoloper", 100);
    text.innerHTML=""
    },3000);
    setTimeout(()=>{printLetterByLetter(text,  "a Youtuber", 100);
    
    text.innerHTML=""
    },6000);
    setTimeout(()=>{printLetterByLetter(text,  "an Artist", 100);
    
    text.innerHTML=""
},8000);
}
textload();
setInterval(textload,12000) ;




// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}    
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
// }