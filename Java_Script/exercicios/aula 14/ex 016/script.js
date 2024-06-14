function contar() {
  let txti = document.getElementById("txti");
  let txtf = document.getElementById("txtf");
  let txtp = document.getElementById("txtp");
  let res = document.getElementById("res");
  let inc = Number(txti.value);
  let fim = Number(txtf.value);
  let pass = Number(txtp.value);
  if (txti.value == "" || (txtf.value == "") | (txtp.value == "")) {
    res.innerHTML = "[ERRO] (caixa vazia obrigatória ) Impossivel contar! ";
  } else if (txtp.value == "0") {
    alert("[ERRO] Valor 0 para passo é invalido, considerando o valor 1!");
    pass = 1;

    if (inc < fim) {
      //contagem crescente
      res.innerHTML = "";
      for (inc; inc <= fim; inc += pass) {
        res.innerHTML += "👉 " + inc;
      }
      res.innerHTML += "👉 🏁";
    }
    if (inc > fim) {
      //contagem regressiva
      for (inc; inc >= fim; inc -= pass) res.innerHTML += "👉 " + inc;
    }
    res.innerHTML += "👉 🚩";
  }
}
//location.reload();
