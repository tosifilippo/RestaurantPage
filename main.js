(()=>{"use strict";const t=function(){const t=document.getElementById("content");t.innerHTML="";const e=document.createElement("div");e.classList.add("parabox");const n=document.createElement("p");n.innerHTML="Welcome to my Kitchen! <br> Nice food, great company.",t.appendChild(e),e.append(n)},e=function(){const t=document.getElementById("content");t.innerHTML="";const e=document.createElement("div"),n=document.createElement("p");e.classList.add("parabox"),n.innerHTML="Contact me at: <br> tosifilippo@outlook.it",t.appendChild(e),e.appendChild(n)},n=function(){const t=document.getElementById("content");t.innerHTML="";const e=document.createElement("div");e.classList.add("food");const n=document.createElement("div");n.classList.add("food");const c=document.createElement("div");c.classList.add("food");const d=document.createElement("div");d.classList.add("food");const i=document.createElement("div");i.classList.add("food");const o=document.createElement("div");o.classList.add("food"),t.append(e,n,c,d,i,o);const s=document.createElement("img");s.setAttribute("src","img/pizza.jpg"),s.setAttribute("alt","pizza"),e.appendChild(s);const a=document.createElement("img");a.setAttribute("src","img/appetizer.jpg"),a.setAttribute("alt","charcuterie board"),n.appendChild(a);const m=document.createElement("img");m.setAttribute("src","img/pasta.jpg"),m.setAttribute("alt","pasta plate"),c.appendChild(m);const l=document.createElement("img");l.setAttribute("src","img/arrosticini.jpg"),l.setAttribute("alt","lamb skewers"),d.appendChild(l);const r=document.createElement("img");r.setAttribute("src","img/millefoglie.jpg"),r.setAttribute("alt","millefoglie cake"),i.appendChild(r);const u=document.createElement("img");u.setAttribute("src","img/gin.jpg"),u.setAttribute("alt","gin tonic"),o.appendChild(u);const p=document.createElement("div");p.classList.add("description"),e.appendChild(p);const E=document.createElement("div");n.appendChild(E),E.classList.add("description");const L=document.createElement("div");c.appendChild(L),L.classList.add("description");const h=document.createElement("div");d.appendChild(h),h.classList.add("description");const b=document.createElement("div");i.appendChild(b),b.classList.add("description");const g=document.createElement("div");o.appendChild(g),g.classList.add("description");const C=document.createElement("h2");C.innerHTML="PIZZA",p.appendChild(C);const v=document.createElement("h2");v.innerHTML="APPETIZERS",E.appendChild(v);const A=document.createElement("h2");A.innerHTML="PASTA",L.appendChild(A);const T=document.createElement("h2");T.innerHTML="BBQ",h.appendChild(T);const H=document.createElement("h2");H.innerHTML="DESSERTS",b.appendChild(H);const M=document.createElement("h2");M.innerHTML="COCKTAILS",g.appendChild(M)};(function(){const t=document.createElement("h1");t.innerHTML="PIPPO'S HOME KITCHEN";const e=document.createElement("div");e.setAttribute("id","buttonDiv"),document.body.prepend(e),document.body.prepend(t);const n=document.createElement("button");n.innerHTML="HOME",n.setAttribute("id","homeButton");const c=document.createElement("button");c.innerHTML="CONTACT",c.setAttribute("id","contactButton");const d=document.createElement("button");d.innerHTML="MENU",d.setAttribute("id","menuButton"),e.append(n,d,c),n.classList.add("navbuttons"),c.classList.add("navbuttons"),d.classList.add("navbuttons")})(),t(),function(){const c=document.getElementById("homeButton"),d=document.getElementById("contactButton"),i=document.getElementById("menuButton");c.addEventListener("click",t),d.addEventListener("click",e),i.addEventListener("click",n)}()})();