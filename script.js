// Compte à rebours jusqu'au début du festival
const dateFestival = new Date("2027-07-17T18:00:00");

function majCompteARebours() {
  let reste = dateFestival - new Date();
  if (reste < 0) reste = 0;
  const s = Math.floor(reste / 1000);
  document.getElementById("d").textContent = Math.floor(s / 86400);
  document.getElementById("h").textContent = Math.floor((s % 86400) / 3600);
  document.getElementById("m").textContent = Math.floor((s % 3600) / 60);
  document.getElementById("s").textContent = s % 60;
}
majCompteARebours();
setInterval(majCompteARebours, 1000);

// Validation du formulaire d'inscription
document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();
  const nom = document.getElementById("nom");
  const email = document.getElementById("email");
  const pass = document.getElementById("pass");
  const msg = document.getElementById("msg");
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value);

  nom.classList.toggle("err", nom.value.trim().length < 3);
  email.classList.toggle("err", !emailOk);
  pass.classList.toggle("err", pass.value === "");

  if (nom.value.trim().length < 3 || !emailOk || pass.value === "") {
    msg.textContent = "Vérifiez votre nom, votre e-mail et le pass choisi.";
    msg.className = "ko";
  } else {
    msg.textContent = "Merci " + nom.value.trim() + ", votre inscription est enregistrée.";
    msg.className = "ok";
    this.reset();
  }
});
