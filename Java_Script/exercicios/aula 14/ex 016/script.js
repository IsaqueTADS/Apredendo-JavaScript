function contar() {
  var txti = document.getElementById("txti");
  var txtf = document.getElementById("txtf");
  var txtp = document.getElementById("txtp");
  var inc = Number(txti.value);
  var fim = Number(txtf.value);
  var pass = Number(txtp.value);
  var res = document.getElementById("res");

  if (txti.value == "") {
    res.innerHTML = "[ERRO] (caixa vazia obrigatória ) Impossivel contar! ";

    return;
  } else if (txtf.value == "") {
    res.innerHTML = "[ERRO] (caixa vazia obrigatória ) Impossivel contar! ";
    return;
  } else if (txtp.value == "") {
    res.innerHTML = "[ERRO] (caixa vazia obrigatória ) Impossivel contar! ";
    return;
  } else if (txtp.value == "0") {
    alert("[ERRO] Valor 0 para fim é invalido, considerando o valor 1!");
    pass = 1;
  } else if (txtf.value == "0") {
    alert("[ERRO] Valor 0 para fim é invalido, considerando o valor 1!");
    fim = 1;
  }
  //location.reload();
  res.innerHTML = "";
  for (inc; inc <= fim; inc++) {
    res.innerHTML += "👉 " + inc;
  }
  res.innerHTML += "👉 🏁";
}
