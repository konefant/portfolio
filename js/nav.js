/* ==== MENU : lien actif selon la section affichée, menu mobile, bouton « haut de page » ==== */
const NAVA=$$("#menu a"),SECS=NAVA.map(a=>$(a.getAttribute("href")));
function spy(){const y=innerHeight*.35;let k=-1;
  SECS.forEach((s,i)=>{if(s&&s.getBoundingClientRect().top<=y)k=i});
  if(innerHeight+scrollY>=document.documentElement.scrollHeight-4)k=SECS.length-1;
  NAVA.forEach((a,i)=>{a.classList.toggle("on",i===k);i===k?a.setAttribute("aria-current","true"):a.removeAttribute("aria-current")});
  $("#up").classList.toggle("show",scrollY>500)}
addEventListener("scroll",spy,{passive:true});addEventListener("resize",spy);spy();
$("#bm").addEventListener("click",()=>{const o=$("#nav").classList.toggle("open");$("#bm").setAttribute("aria-expanded",o)});
NAVA.forEach(a=>a.addEventListener("click",()=>{$("#nav").classList.remove("open");$("#bm").setAttribute("aria-expanded",false)}));
$("#up").addEventListener("click",()=>scrollTo({top:0,behavior:RM?"auto":"smooth"}));
