function togglenav(nav) {
  nav.classList.toggle("open");
  document.querySelector(".page-list").classList.toggle("open");
}

let page = document.querySelector(".page-selector>span");
let targets = document.querySelectorAll(".page-list a");
for (let t = 0; t < targets.length; t++) {
  let target = targets[t];
  if (target.textContent == page.textContent)
    target.parentNode.removeChild(target);
}

const imgs = document.querySelectorAll(".img-array img");
const sel = document.querySelector(".img-selector");
const sels = new Array();
let cimg = 0;
let dir = 1;

for (let i = 0; i < imgs.length; i++) {
  sels[i] = document.createElement("span");
  sel.appendChild(sels[i]);
}

sels[cimg].classList.toggle("on");

setInterval(() => {
  sels[cimg].classList.toggle("on");
  if (cimg == 0) dir = 1;
  if (cimg == imgs.length - 1) dir = -1;

  cimg += dir;
  let k = 0;
  let kn = 1;
  if (dir > 0) {
    kn = 1;
    k = 0;
  }
  if (dir < 0) {
    kn = 0;
    k = 1;
  }
  imgs[cimg + k].style.marginLeft = -dir * 100 * kn + "%";
  sels[cimg].classList.toggle("on");
}, 2000);
