/* Logique commune : en-tête, thèmes, langue FR/EN, fond interactif, fenêtre de détail des projets */
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)],R=document.documentElement;
let L=0,TH=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";
try{L=localStorage.getItem("l")==="1"?1:0;TH=localStorage.getItem("t")||TH}catch(e){}
const NAV=[["index.html","Accueil","Home"],["projets.html","Projets","Projects"],["parcours.html","Parcours et compétences","Experience & skills"],["engagement.html","Engagement","Community"],["contact.html","Contact",null]];
function layout(){
  const here=location.pathname.split("/").pop()||"index.html";
  $("#hdr").innerHTML=`<header><a class="logo" href="index.html">Fanta Kone</a><nav aria-label="Navigation">${NAV.map(n=>`<a href="${n[0]}"${n[0]===here?' aria-current="page"':""}${n[2]?` data-en="${n[2]}"`:""}>${n[1]}</a>`).join("")}</nav><div class="ctl"><div class="seg" id="th" role="group" aria-label="Thème"><button data-t="light" data-en="Day">Jour</button><button data-t="dark" data-en="Night">Nuit</button><button data-t="neon">Néon</button></div><div class="seg" id="lg" role="group" aria-label="Langue"><button data-l="0">FR</button><button data-l="1">EN</button></div></div></header>`;
  $("#ftr").innerHTML=`<footer>© Fanta Kone, 2026</footer>`}
layout();
let cur=-1,last=null;
const T=(a)=>a[L],UI={more:["Voir en détail","View details"],close:["Fermer","Close"],did:["Ce que j’ai fait","What I did"]};
function render(){
  if(!$("#pj"))return;
  $("#pj").innerHTML=P.map((p,i)=>`<article class="proj ${p.c}${p.big?" big":""}"><div><p class="ctx">${T(p.x)}</p><h3>${T(p.t)}</h3><p>${T(p.a)}</p><ul class="chips">${p.s.map(s=>`<li>${s}</li>`).join("")}</ul></div><button class="more" data-i="${i}">${T(UI.more)}</button></article>`).join("");
  if(cur>=0)fill();
}
function fill(){const p=P[cur];$("#dc").innerHTML=`<div class="dh ${p.c}"><button class="x" id="dx" aria-label="${T(UI.close)}">×</button><p class="ctx">${T(p.x)}</p><h3 id="dt">${T(p.t)}</h3></div><div class="db"><p>${T(p.d)}</p><h3 style="font-size:1.1rem">${T(UI.did)}</h3><ul>${p.b[L].map(b=>`<li>${b}</li>`).join("")}</ul><ul class="chips">${p.s.map(s=>`<li>${s}</li>`).join("")}</ul></div>`;$("#dx").onclick=()=>$("#dlg").close()}
$("#pj")&&$("#pj").addEventListener("click",e=>{const b=e.target.closest(".more");if(!b)return;cur=+b.dataset.i;last=b;fill();$("#dlg").showModal();document.body.style.overflow="hidden"});
$("#dlg")&&$("#dlg").addEventListener("click",e=>{if(e.target===$("#dlg"))$("#dlg").close()});
$("#dlg")&&$("#dlg").addEventListener("close",()=>{cur=-1;document.body.style.overflow="";last&&last.focus({preventScroll:true})});
function lang(n){L=n;R.lang=n?"en":"fr";try{localStorage.setItem("l",n)}catch(e){}
  $$("[data-en]").forEach(el=>{if(el.dataset.fr===undefined)el.dataset.fr=el.textContent;el.textContent=n?el.dataset.en:el.dataset.fr});
  $$("#lg button").forEach(b=>b.setAttribute("aria-pressed",+b.dataset.l===n));render()}
function theme(t){TH=t;R.dataset.theme=t;try{localStorage.setItem("t",t)}catch(e){}
  $$("#th button").forEach(b=>b.setAttribute("aria-pressed",b.dataset.t===t));pal()}
$("#th").addEventListener("click",e=>{const b=e.target.closest("button");b&&theme(b.dataset.t)});
$("#lg").addEventListener("click",e=>{const b=e.target.closest("button");b&&lang(+b.dataset.l)});

/* Fond interactif : bulles qui fuient le pointeur, confettis au clic */
const cv=$("#bg"),cx=cv.getContext("2d"),RM=matchMedia("(prefers-reduced-motion: reduce)").matches;
let W,H,cols=[],B=[],F=[],m={x:-999,y:-999};
function pal(){const s=getComputedStyle(R);cols=["--violet","--coral","--sun","--mint"].map(v=>s.getPropertyValue(v).trim());RM&&draw()}
function size(){W=cv.width=innerWidth;H=cv.height=innerHeight;B=Array.from({length:Math.min(34,W/32|0)},()=>({x:Math.random()*W,y:Math.random()*H,r:12+Math.random()*34,vx:(Math.random()-.5)*.5,vy:(Math.random()-.5)*.5,px:0,py:0,c:Math.random()*4|0}));RM&&draw()}
function draw(){cx.clearRect(0,0,W,H);
  for(const b of B){const dx=b.x-m.x,dy=b.y-m.y,d=Math.hypot(dx,dy)||1;
    if(!RM){b.px*=.93;b.py*=.93;if(d<170){b.px+=dx/d*.7;b.py+=dy/d*.7}b.x+=b.vx+b.px;b.y+=b.vy+b.py;
      if(b.x<-60)b.x=W+60;if(b.x>W+60)b.x=-60;if(b.y<-60)b.y=H+60;if(b.y>H+60)b.y=-60}
    cx.globalAlpha=.3;cx.fillStyle=cols[b.c];cx.beginPath();cx.arc(b.x,b.y,b.r,0,7);cx.fill()}
  F=F.filter(f=>f.l>0);for(const f of F){f.x+=f.vx;f.y+=f.vy;f.vy+=.12;f.l-=.018;cx.globalAlpha=Math.max(f.l,0);cx.fillStyle=cols[f.c];cx.fillRect(f.x,f.y,8,8)}
  cx.globalAlpha=1;RM||requestAnimationFrame(draw)}
addEventListener("pointermove",e=>{m.x=e.clientX;m.y=e.clientY});
addEventListener("pointerdown",e=>{if(RM||e.target.closest("a,button,dialog"))return;
  for(let i=0;i<18;i++){const a=Math.random()*6.28,s=2+Math.random()*4;F.push({x:e.clientX,y:e.clientY,vx:Math.cos(a)*s,vy:Math.sin(a)*s-2,l:1,c:Math.random()*4|0})}});
addEventListener("resize",size);
theme(TH);size();lang(L);if(!RM)draw();
