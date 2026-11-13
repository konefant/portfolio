/* ==== FOND INTERACTIF : réseau de points reliés ; le pointeur attire et relie les points proches ==== */
const cv=$("#bg"),cx=cv.getContext("2d"),RM=matchMedia("(prefers-reduced-motion: reduce)").matches;
let W,H,cols=[],N=[],m={x:-999,y:-999};
function pal(){const s=getComputedStyle(R);cols=["--violet","--coral","--mint","--sun"].map(v=>s.getPropertyValue(v).trim());RM&&draw()}
function size(){W=cv.width=innerWidth;H=cv.height=innerHeight;
  N=Array.from({length:Math.min(80,Math.round(W*H/16000))},()=>({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.35,vy:(Math.random()-.5)*.35,r:1.6+Math.random()*1.8,c:Math.random()*4|0}));RM&&draw()}
function draw(){cx.clearRect(0,0,W,H);cx.lineWidth=1;
  for(const a of N){
    if(!RM){const dx=m.x-a.x,dy=m.y-a.y,d=Math.hypot(dx,dy);if(d<180&&d>1){a.x+=dx/d*.35;a.y+=dy/d*.35}
      a.x+=a.vx;a.y+=a.vy;if(a.x<0||a.x>W)a.vx*=-1;if(a.y<0||a.y>H)a.vy*=-1}}
  for(let i=0;i<N.length;i++){const a=N[i];
    for(let j=i+1;j<N.length;j++){const b=N[j],d=Math.hypot(a.x-b.x,a.y-b.y);
      if(d<140){cx.globalAlpha=(1-d/140)*.35;cx.strokeStyle=cols[0];cx.beginPath();cx.moveTo(a.x,a.y);cx.lineTo(b.x,b.y);cx.stroke()}}
    const dm=Math.hypot(a.x-m.x,a.y-m.y);
    if(dm<180){cx.globalAlpha=(1-dm/180)*.6;cx.strokeStyle=cols[1];cx.beginPath();cx.moveTo(a.x,a.y);cx.lineTo(m.x,m.y);cx.stroke()}
    cx.globalAlpha=.75;cx.fillStyle=cols[a.c];cx.beginPath();cx.arc(a.x,a.y,a.r,0,7);cx.fill()}
  cx.globalAlpha=1;RM||requestAnimationFrame(draw)}
addEventListener("pointermove",e=>{m.x=e.clientX;m.y=e.clientY});
addEventListener("resize",size);
