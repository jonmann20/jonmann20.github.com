"use strict";class ListCarousel{constructor(e){let t,r="default";Array.from(e.querySelectorAll("a")).forEach(e=>{e.addEventListener("click",e=>{(t=e.target.id)&&r!==t&&(e.preventDefault(),document.querySelector(`#div-${r}`).classList.remove("fade-in"),document.querySelector(`#div-${t}`).classList.add("fade-in"),r=t)})})}}