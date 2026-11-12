/* ==== FOND INTERACTIF : bulles qui fuient le pointeur, confettis au clic ==== */
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
