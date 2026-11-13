/* ==== LANGUE FR / EN ==== */
function lang(n){L=n;R.lang=n?"en":"fr";try{localStorage.setItem("l",n)}catch(e){}
  $$("[data-en]").forEach(el=>{if(el.dataset.fr===undefined)el.dataset.fr=el.textContent;el.textContent=n?el.dataset.en:el.dataset.fr});
  $$("[data-enp]").forEach(el=>{if(el.dataset.frp===undefined)el.dataset.frp=el.placeholder;el.placeholder=n?el.dataset.enp:el.dataset.frp});
  $("#lg").textContent=n?"EN":"FR";render()}
$("#lg").addEventListener("click",()=>lang(L?0:1));
