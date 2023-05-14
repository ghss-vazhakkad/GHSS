function togglenav(nav){
    nav.classList.toggle("open");
    document.querySelector(".page-list").classList.toggle("open");
}

let page = document.querySelector(".page-selector>span");
let targets = document.querySelectorAll(".page-list a");
for(let t = 0; t < targets.length;t++){
    let target = targets[t];
    if(target.textContent == page.textContent) target.parentNode.removeChild(target);
}