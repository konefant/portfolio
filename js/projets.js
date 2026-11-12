/* ==== PROJETS : affichage des cartes + fenêtre de détail ==== */
let cur=-1,last=null;
const T=(a)=>a[L],UI={more:["Voir en détail","View details"],close:["Fermer","Close"],did:["Ce que j’ai fait","What I did"]};
function render(){
  $("#pj").innerHTML=P.map((p,i)=>`<article class="proj ${p.c}${p.big?" big":""}"><div><p class="ctx">${T(p.x)}</p><h3>${T(p.t)}</h3><p>${T(p.a)}</p><ul class="chips">${p.s.map(s=>`<li>${s}</li>`).join("")}</ul></div><button class="more" data-i="${i}">${T(UI.more)}</button></article>`).join("");
  if(cur>=0)fill();
}
function fill(){const p=P[cur];$("#dc").innerHTML=`<div class="dh ${p.c}"><button class="x" id="dx" aria-label="${T(UI.close)}">×</button><p class="ctx">${T(p.x)}</p><h3 id="dt">${T(p.t)}</h3></div><div class="db"><p>${T(p.d)}</p><h3 style="font-size:1.1rem">${T(UI.did)}</h3><ul>${p.b[L].map(b=>`<li>${b}</li>`).join("")}</ul><ul class="chips">${p.s.map(s=>`<li>${s}</li>`).join("")}</ul></div>`;$("#dx").onclick=()=>$("#dlg").close()}
$("#pj").addEventListener("click",e=>{const b=e.target.closest(".more");if(!b)return;cur=+b.dataset.i;last=b;fill();$("#dlg").showModal();document.body.style.overflow="hidden"});
$("#dlg").addEventListener("click",e=>{if(e.target===$("#dlg"))$("#dlg").close()});
$("#dlg").addEventListener("close",()=>{cur=-1;document.body.style.overflow="";last&&last.focus({preventScroll:true})});
