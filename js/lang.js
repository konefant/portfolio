/* ==== LANGUE FR / EN ==== */
function lang(n){L=n;R.lang=n?"en":"fr";try{localStorage.setItem("l",n)}catch(e){}
  $$("[data-en]").forEach(el=>{if(el.dataset.fr===undefined)el.dataset.fr=el.textContent;el.textContent=n?el.dataset.en:el.dataset.fr});
  $$("#lg button").forEach(b=>b.setAttribute("aria-pressed",+b.dataset.l===n));render()}
$("#lg").addEventListener("click",e=>{const b=e.target.closest("button");b&&lang(+b.dataset.l)});
