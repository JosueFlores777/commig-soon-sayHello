import"./hoisted.GyDuFLzs.js";function r(){let e=document.createElement("div");e.setAttribute("class","meteor"),e.style.left=Math.round(Math.random()*window.innerWidth)+"px",e.style.top=Math.round(Math.random()*window.innerHeight)+"px";const t=document.querySelectorAll(".shower"),o=Math.floor(Math.random()*t.length);t[o].append(e),setTimeout(()=>{e.remove()},3500)}setInterval(r,1500);
