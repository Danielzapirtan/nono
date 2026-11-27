const nrNoteLuate = document.getElementById("numar-note-luate");
const noteLuate = document.getElementById("note-luate");
const nrNoteDeLuat = document.getElementById("nr-note-de-luat");
const noteDeLuat = document.getElementById("note-de-luat");

var currtab = 0;

function switchTab(tabno) {
  const tab1 = document.getElementById("tab1");
  const tab2 = document.getElementById("tab2");
  tab1.classList.add("disabled");
  tab2.classList.add("disabled");
  if (tabno == 0) tab1.classList.remove("disabled");
  else if (tabno == 1) tab2.classList.remove("disabled");
}

function back() {
  currtab = (currtab + 1) % 2;
  switchTab(currtab);
}

function fwd() {
  currtab = (currtab + 1) % 2;
  switchTab(currtab);
}

function addDigit(el, min, max) {
  const lt = document.createElement("div");
  lt.classList.add("button nav");
  const cifra = document.createElement("div");
  cifra.classList.add("digit");
  cifra.style.min = 7;
  cifra.style.max = 10;
  cifra.innerHTML = `${6}`;
  const gt = document.createElement("div");
  gt.classList.add("button nav");
  el.appendChild(lt);
  el.appendChild(cifra);
  el.appendChild(gt);
}

function addNumber(el) {
  addDigit(el, 1, 4);
}

function addDigits(el, number, baseMark) {
  for (let i = 0; i < number; i++)
    addDigit(el, baseMark + 1, 10);
}

function loadPage() {
  addNumber(nrNoteLuate);
  addDigits(noteLuate, 1, 6);
  addNumber(nrNoteDeLuat);
  addDigits(noteDeLuat, 1, 7);
}

loadPage();

