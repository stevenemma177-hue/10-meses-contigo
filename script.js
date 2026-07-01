// CAMBIA AQUÍ TU FECHA REAL DE ANIVERSARIO
let fecha = { dia: 21, mes: 6, anio: 25 }; 

// VARIABLE GLOBAL PARA EL PLAYER DE YOUTUBE
let player;

function cambiar(tipo, valor) {
  if(tipo === 'dia') {
    fecha.dia += valor;
    if(fecha.dia > 31) fecha.dia = 1;
    if(fecha.dia < 1) fecha.dia = 31;
  }
  if(tipo === 'mes') {
    fecha.mes += valor;
    if(fecha.mes > 12) fecha.mes = 1;
    if(fecha.mes < 1) fecha.mes = 12;
  }
  if(tipo === 'anio') {
    fecha.anio += valor;
    if(fecha.anio > 99) fecha.anio = 0;
    if(fecha.anio < 0) fecha.anio = 99;
  }
  actualizarRueda();
}

function actualizarRueda() {
  document.getElementById('dia').innerText = String(fecha.dia).padStart(2, '0');
  document.getElementById('mes').innerText = String(fecha.mes).padStart(2, '0');
  document.getElementById('anio').innerText = String(fecha.anio).padStart(2, '0');
}

// ESTA FUNCIÓN LA PIDE YOUTUBE AUTOMÁTICO
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player-brillas', {
    events: {
      'onReady': onPlayerReady
    }
  });
}

function onPlayerReady(event) {
  event.target.setVolume(30); // volumen 30% al inicio
}

function verificarCandado() {
  const correcta = { dia: 26, mes: 8, anio: 25 }; 
  
  if(fecha.dia === correcta.dia && fecha.mes === correcta.mes && fecha.anio === correcta.anio) {
    document.getElementById('pantalla-candado').style.transition = 'opacity 0.8s';
    document.getElementById('pantalla-candado').style.opacity = '0';
    setTimeout(() => {
      document.getElementById('pantalla-candado').style.display = 'none';
      document.body.style.overflow = 'auto';
      document.body.style.background = '#fff5fa';
      document.getElementById('contenido-principal').style.display = 'block';
      window.scrollTo(0, 0);
      document.body.focus();
    }, 800);
  } else {
    document.getElementById('error-candado').style.display = 'block';
    setTimeout(() => document.getElementById('error-candado').style.display = 'none', 2000);
  }
}

function abrirCarta(elemento) {
  if(elemento.classList.contains('abierta')) {
    elemento.classList.remove('abierta');
    return;
  }
  document.querySelectorAll('.carta.abierta').forEach(c => {
    c.classList.remove('abierta');
  });
  elemento.classList.add('abierta');
}

