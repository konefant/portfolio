/* ==== PHOTOS : un clic sur une photo l’agrandit ==== */
const LB=$("#lb");
$$(".mi").forEach(b=>b.addEventListener("click",()=>{const i=$("img",b);$("#lbi").src=i.src;$("#lbi").alt=i.alt;LB.showModal()}));
LB.addEventListener("click",e=>{if(e.target!==$("#lbi"))LB.close()});
