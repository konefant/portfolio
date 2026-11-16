/* ==== PROJETS : affichage des cartes + fenêtre de détail ==== */
let cur=-1,last=null,SRC=P;
const T=(a)=>a[L],UI={more:["Voir en détail","View details"],close:["Fermer","Close"],did:["Ce que j’ai fait","What I did"],ctx:["Contexte","Context"],res:["Résultats","Results"]};
function render(){
  $("#pj").innerHTML=P.map((p,i)=>`<article class="proj ${p.c}${p.big?" big":""}"><div><p class="ctx">${T(p.x)}</p><h3>${T(p.t)}</h3><p>${T(p.a)}</p><ul class="chips">${p.s.map(s=>`<li>${s}</li>`).join("")}</ul></div><button class="more" data-i="${i}">${T(UI.more)}</button></article>`).join("");
  if(cur>=0)fill();
}
function fill(){const p=SRC[cur],hd=k=>`<h3 class="dsec">${T(UI[k])}</h3>`,ch=p.s.map(s=>`<li>${s}</li>`).join("");
  $("#dc").innerHTML=`<div class="dh ${p.c}"><button class="x" id="dx" aria-label="${T(UI.close)}">×</button><p class="ctx">${T(p.x)}</p><h3 id="dt">${T(p.t)}</h3></div><div class="db">${p.ctx?hd("ctx")+`<p>${T(p.ctx)}</p>`:""}${p.d?`<p>${T(p.d)}</p>`:""}${hd("did")}<ul>${p.b[L].map(b=>`<li>${b}</li>`).join("")}</ul>${p.res?hd("res")+`<div class="kpis">${p.res.map(r=>`<div class="kpi"><b>${r.n}</b><span>${T(r.l)}</span></div>`).join("")}</div>`:""}${p.rb?`<ul>${p.rb[L].map(b=>`<li>${b}</li>`).join("")}</ul>`:""}<ul class="chips">${ch}</ul></div>`;$("#dx").onclick=()=>$("#dlg").close()}
$("#pj").addEventListener("click",e=>{const b=e.target.closest(".more");if(!b)return;SRC=P;cur=+b.dataset.i;last=b;fill();$("#dlg").showModal();document.body.style.overflow="hidden"});
$("#dlg").addEventListener("click",e=>{if(e.target===$("#dlg"))$("#dlg").close()});
$("#dlg").addEventListener("close",()=>{cur=-1;document.body.style.overflow="";last&&last.focus({preventScroll:true})});
$(".xp").addEventListener("click",e=>{const b=e.target.closest(".xmore");if(!b)return;SRC=XPD;cur=+b.dataset.i;last=b;fill();$("#dlg").showModal();document.body.style.overflow="hidden"});
