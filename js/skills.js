/* ==== COMPÉTENCES : au clic, la carte reste « allumée » (un nouveau clic l’éteint) ==== */
const SK=$$(".sk");
SK.forEach(c=>c.addEventListener("click",()=>{const on=!c.classList.contains("on");
  SK.forEach(x=>{x.classList.remove("on");$(".ic",x).setAttribute("aria-pressed","false")});
  if(on){c.classList.add("on");$(".ic",c).setAttribute("aria-pressed","true")}}));
