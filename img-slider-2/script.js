let imgs = document.querySelectorAll(".container .img");
let nextBtn = document.querySelector("#nextBtn");
let prevBtn = document.querySelector("#prevBtn");



let topImgs = [];
let bottomImgs = [];

for (let i = 0; i < imgs.length; i++) {
  topImgs.push(imgs[i]);
  imgs[i].style.zIndex = i + 1;
}

function reTransform(start) {
  checkBtn();
  for (let i = 0; i < topImgs.length; i++) {
    topImgs[i].style.transform = `translate(calc(${100 * (i + start)}% + ${
      50 * (i + start)
    }px), 0%) scale(1)`;
  }
}

reTransform(0);

nextBtn.addEventListener("click", () => {
  bottomImgs.push(topImgs[0]);
  topImgs.shift();
  // console.log(bottomImgs);
  reTransform(0);
  styleBottomImgs();
});

prevBtn.addEventListener("click", () => {
  reTransform(1);
  bottomImgs[
    bottomImgs.length - 1
  ].style.transform = `translate(0, 0) scale(1)`;
  bottomImgs[bottomImgs.length - 1].style.opacity = "1";
  topImgs.unshift(bottomImgs[bottomImgs.length - 1]);
  bottomImgs.pop();
  styleBottomImgs();
});

function styleBottomImgs() {
  let currX = 70;
  let currScale = 0.8;
  let state = 0;
  checkBtn();
  for (let i = bottomImgs.length - 1; i >= 0; i--) {
    if (state >= 2) {
      break;
    }
    bottomImgs[
      i
    ].style.transform = `translate(0, -${currX}px) scale(${currScale})`;
    bottomImgs[i].style.opacity = "0.3";
    currX = currX + 40;
    currScale = currScale - 0.1;
    state++;
  }
}

function checkBtn() {
  if (topImgs.length <= 1) {
    nextBtn.disabled = true;
  } else {
    nextBtn.disabled = false;
  }
  if (bottomImgs.length < 1) {
    prevBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
  }
}
