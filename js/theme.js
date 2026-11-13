/* ==== THÈMES Jour / Nuit / Néon ==== */
const THEMES=["light","dark","neon"];
function theme(t){TH=t;R.dataset.theme=t;try{localStorage.setItem("t",t)}catch(e){}pal()}
$("#th").addEventListener("click",()=>theme(THEMES[(THEMES.indexOf(TH)+1)%3]));
