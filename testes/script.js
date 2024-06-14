function calcular() {
  let txts = document.getElementById("txts");
  let num = Number(txts.value);
  let res = document.getElementById("res");
  if (txts.value == "") {
    //txts.value.length == 0
    //alert("[ERRO] Digite o valor do sálario!!");
    res.innerHTML = "[ERRO] Digite o valor do sálario!!";
  } else {
    let dizimo;
    dizimo = num * 0.1;
    res.innerHTML = `Seu dizimo é: ${dizimo.toLocaleString('Pt-BR')}`
    //res.innerHTML = 'Seu dizimo é: + dizimo'
  }
  
}
