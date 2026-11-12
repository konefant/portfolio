/* ==== THÈMES Jour / Nuit / Néon ==== */
function theme(t){TH=t;R.dataset.theme=t;try{localStorage.setItem("t",t)}catch(e){}
  $$("#th button").forEach(b=>b.setAttribute("aria-pressed",b.dataset.t===t));pal()}
$("#th").addEventListener("click",e=>{const b=e.target.closest("button");b&&theme(b.dataset.t)});
