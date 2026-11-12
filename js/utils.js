/* ==== OUTILS COMMUNS : raccourcis $ et $$, langue (L) et thème (TH) mémorisés ==== */
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)],R=document.documentElement;
let L=0,TH=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";
try{L=localStorage.getItem("l")==="1"?1:0;TH=localStorage.getItem("t")||TH}catch(e){}
