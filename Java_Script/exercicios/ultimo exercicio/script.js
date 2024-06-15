let num = document.querySelector("input#fnum");
let lista = document.querySelector("select#flista");
let res = document.querySelector("div#res");
let valores = [];

function isNumero(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true;
  } else {
    return false;
  }
}
function inLista(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true;
  } else {
    return false;
  }
}

function adicionar() {
  if (isNumero(num.value) && !inLista(num.value, valores)) {
    valores.push(Number(num.value));
    let item = document.createElement("option");
    item.text = `valor ${num.value} adicionado ! `;
    lista.appendChild(item);
    res.innerHTML = "";
  } else {
    alert("[ERRO] Numero invalido ou já esta na lista");
  }
  num.value = "";
  num.focus();
}
function finalizar() {
  if (valores.length == 0) {
    alert("[ERRO] Não tem valor na lista ! ");
  } else {
    let tot = valores.length;
    let maior = valores[0];
    let menor = valores[0];
    let soma = 0;
    let média = 0;

    for (let i = 0; i < valores.length; i++) {
      if (valores[i] > maior) {
        maior = valores[i];
      }
      if (valores[i] < menor) {
        menor = valores[i];
      }
      soma += valores[i];
      média = soma / valores.length; // podia ser a variavel tot tmb...
    }

    res.innerHTML = "";
    res.innerHTML += `<p> Temos <strong>${tot}</strong> númersos adicionados </p>`;
    res.innerHTML += `<p> O maior valor informado foi <strong>${maior}</strong></p>`;
    res.innerHTML += `<p> O menor valor informado foi <strong>${menor}</strong></p>`;
    res.innerHTML += `<p> A soma total foi de <strong>${soma}</strong></p>`;
    res.innerHTML += `<p> A média toa é de <strong>${média}</strong></p>`;
  }
}
