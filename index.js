
let hor = document.getElementById("crhor");
let min = document.getElementById("crmin");
let seg = document.getElementById("crseg");
const alerta = document.querySelector("div#alerta")


const audio = document.getElementById("audio")
 
let h, m, s;
let meuIntervalo = null;

function contagem() {
  if (meuIntervalo !== null) {
    clearInterval(meuIntervalo);
  }
  meuIntervalo = setInterval(function cronometro() {
    if (s > 0) {
      s--;
    }
    if (s === 0 && m > 0) {
      s = 59;
      m--;
    }

    if (s === 0 && m === 0 && h > 0) {
      m = 59;
      s = 59;
      h--;
    }

    hora1.innerHTML = String(`${h}:`).padStart(3, "0");
    minuto1.innerHTML = String(`${m}:`).padStart(3, "0");
    segundo1.innerHTML = String(`${s}`).padStart(2, "0");

    if (s === 0 && m === 0 && h === 0) {
      audio.play()
      clearInterval(meuIntervalo);
      meuIntervalo = null;
      alerta.insertAdjacentHTML("afterbegin",`<p>O tempo acabou!</p>`)
      alerta.style.padding = '15px'

      setTimeout(() => {
      alerta.remove()
    }, 3000);

    }


  }, 1000);
  return h,m,s
}

function limparvalores() {
  crhor.value = ""
  crmin.value = ""
  crseg.value = ""
}

function iniciar() {

  h = Number(hor.value);
  m = Number(min.value);
  s = Number(seg.value);

  hora1.innerHTML = String(`${h}:`).padStart(3, "0");
  minuto1.innerHTML = String(`${m}:`).padStart(3, "0");
  segundo1.innerHTML = String(`${s}`).padStart(2, "0");

  if (h > 23 || h < 0 || m > 59 || m < 0 || s > 59 || s < 0) {
    window.alert("Valor invalido");
  } else if (h <= 0 && m <= 0 && s <= 0) {
    window.alert("Valor invalido");
  } else {

  crhor.value = ""
  crmin.value = ""
  crseg.value = ""
  
  valini = contagem()
  }
}

function parar() {
  if (meuIntervalo !== null) {
    clearInterval(meuIntervalo)
  }
}

function retornar() {
  if (meuIntervalo !== null) {
    retorno = contagem()
  }
}

function finalizar() {
  if (meuIntervalo !== null) {
    clearInterval(meuIntervalo)
    meuIntervalo == null 
    hora1.innerHTML = ("00:")
    minuto1.innerHTML = ("00:")
    segundo1.innerHTML = ("00")
  }
}
