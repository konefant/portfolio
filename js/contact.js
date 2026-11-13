/* ==== FORMULAIRE : ouvre la messagerie du visiteur avec le message prérempli (rien n’est stocké sur le site) ==== */
$("#cf").addEventListener("submit",e=>{e.preventDefault();
  const f=new FormData(e.target),g=k=>(f.get(k)||"").toString().trim();
  const sub=g("sujet")||(L?"Message from the portfolio":"Message depuis le portfolio");
  const body=(L?"Name: ":"Nom : ")+g("prenom")+" "+g("nom")+"\n"+(g("tel")?(L?"Phone: ":"Téléphone : ")+g("tel")+"\n":"")+"Email : "+g("email")+"\n\n"+g("message");
  location.href="mailto:fantakonelah@gmail.com?subject="+encodeURIComponent(sub)+"&body="+encodeURIComponent(body);
  $("#cs").textContent=L?"Your email app should open with the message ready to send.":"Votre messagerie va s’ouvrir avec le message prêt à envoyer."});
