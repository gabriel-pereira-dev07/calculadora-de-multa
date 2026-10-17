let Peso_peixe = Number(prompt("Para a leitura, digite o peso dos peixes: "));
if (Peso_peixe > 50) {
  let excesso = Peso_peixe - 50;
  alert("Excesso: " + excesso + " reais");
  let multa = excesso * 4;
  alert("Multa a ser paga: " + multa + " reais");
} else {
  alert("Você não deve pagar nada !");
}
