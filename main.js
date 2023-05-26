function togglenav(nav) {
  nav.classList.toggle("open");
  document.querySelector(".page-list").classList.toggle("open");
}

let page = document.querySelector(".page-selector>span.page-name");
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

const toolbar = document.querySelector(".toolbar");
const headerImg = document.querySelector(".header-img");
const header = document.querySelector("header");
const hero = document.querySelector(".hero");
let oldoffset = toolbar.offsetTop;

window.onscroll = () =>{
  if(toolbar.offsetTop < document.documentElement.scrollTop && !toolbar.classList.contains("on")){
    toolbar.classList.add("on");
    header.style.paddingBottom = "50px";
    
  }
  
  if(oldoffset > document.documentElement.scrollTop && toolbar.classList.contains("on")){
    toolbar.classList.remove("on");
    
    header.style.paddingBottom = "0";
  }
}

function expand(btn){
  const el = btn.parentNode;
  const url = el.getElementsByTagName("a")[0].textContent;
  window.location = url;
}

const news = document.querySelector(".news-updates>.news");

let delta = 0.5;
setInterval(()=>{
  news.scrollTop += delta;
  if(news.scrollTop >= news.scrollHeight-news.clientHeight){
    delta = -delta;
  }
},1000/30);

news.addEventListener("touchstart",()=>{
  delta = 0;
})

news.addEventListener("touchend",()=> delta=0.5);

