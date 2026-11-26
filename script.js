const materii = [];
const module = [];
const medii = [];
const note = [];

const threshold = 9.00;

function calc_medii() { }
function renderAll() { }

var currtab = 0;
var sold;
var db;

function saveToLocalStorage() {
  const bcv = {
    sold: sold,
    db: db,
  };
  localStorage.setItem("bc", JSON.stringify(bcv));
}

function switchTab(tabno) {
  const tab1 = document.getElementById("tab1");
  const tab2 = document.getElementById("tab2");
  const tab3 = document.getElementById("tab3");
  tab1.classList.add("disabled");
  tab2.classList.add("disabled");
  tab3.classList.add("disabled");
  if (tabno == 0) tab1.classList.remove("disabled");
  else if (tabno == 1) tab2.classList.remove("disabled");
  else if (tabno == 2) tab3.classList.remove("disabled");
}

function back() {
  currtab = (currtab + 2) % 3;
  switchTab(currtab);
}

function fwd() {
  currtab = (currtab + 1) % 3;
  switchTab(currtab);
}

