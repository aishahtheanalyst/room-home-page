const mainPhoto = document.querySelector(".main-photo");
const heading = document.querySelector(".heading");
const paragraph = document.querySelector(".paragraph");


const slides = [
 {
   image: "images/slide1.jpg",
   heading: "Discover innovative ways to decorate",
   text: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form andr vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
 }, 
 {
   image: "images/slide2.jpg",
   heading: "We are available all across the globe",
   text: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
 },
 {
   image: "images/slide3.jpg",
   heading: "Manufactured with the best materials",
   text: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
 }
]

let i = 0;

function show() {
  heading.textContent = slides[i].heading;
  paragraph.textContent = slides[i].text;
  mainPhoto.style.background = "url('" + slides[i].image + "')";
  mainPhoto.style.backgroundPosition = "50% 80%";
  mainPhoto.style.backgroundSize = "cover";
  mainPhoto.style.backgroundRepeat = "no-repeat";
  mainPhoto.style.minHeight = "320px";
  mainPhoto.style.width = "100%";
}
show();


function slideNextImg() {
   i++;
  if (i > slides.length - 1) {
    i = 0;
  } 
  show();
}

function slidePrevImg() {
  i--;
 if (i < slides.length - slides.length) {
   i = slides.length - 1;
 } 
 show();
}


function toggle() {
  let menu = document.querySelector(".navbar");
  let closeIcon = document.querySelector(".close-icon");
  let burgerIcon = document.querySelector(".burger-icon");
  let logo = document.querySelector(".logo");
  menu.classList.toggle("toggleCls");
  closeIcon.classList.toggle("toggleCls");
  burgerIcon.classList.toggle("toggleCls");
  logo.classList.toggle("toggleCls");
}
