const slide = document.querySelector(".img-slide");
let img = document.querySelectorAll(".img-slide img");
let firstClone = img[0].cloneNode(true);
let lastClone = img[img.length - 1].cloneNode(true);
firstClone.id = "first";
lastClone.id = "last";
slide.prepend(lastClone);
slide.append(firstClone);

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
img = document.querySelectorAll(".img-slide img");
let counter = 1;
const size = img[0].clientWidth;

slide.style.transform = "translateX(" + -size * counter + "px)";

nextBtn.addEventListener("click", function () {
  if (counter > img.length - 2) return;
  slide.style.transition = "transform 0.5s ease-in-out";
  counter++;
  slide.style.transform = "translateX(" + -size * counter + "px)";
});
prevBtn.addEventListener("click", function () {
  if (counter <= 0) return;
  slide.style.transition = "transform 0.5s ease-in-out";
  counter--;
  slide.style.transform = "translateX(" + -size * counter + "px)";
});

slide.addEventListener("transitionend", () => {
  if (img[counter].id === "last") {
    slide.style.transition = "none";
    console.log("last");
    counter = img.length - 2;
    slide.style.transform = "translateX(" + -size * counter + "px)";
  }
  if (img[counter].id === "first") {
    slide.style.transition = "none";
    counter = img.length - counter;
    slide.style.transform = "translateX(" + -size * counter + "px)";
    console.log("first");
  }
});
