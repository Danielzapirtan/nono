function solve(notaMea, dorinta, n) {
  const solel = document.querySelector(".solutie");
  solel.innerHTML = `<p>`;
  const average = (dorinta - 0.50) * (n + 1) - notaMea;
  const nota = notaMea + 1;
  const notb = 10;
  for (let notx = nota; notx <= notb; notx++) {
    if (n * notx >= average) {
      solel.innerHTML += `Ia ${n} note de ${notx}`;
      solel.innerHTML += `</p>`;
    }
  }
}

function solutie(notaMea, dorinta) {
  for (let n = 1; n = 5; n++) {
    solve(notaMea, dorinta, n);
  }
}

solutie(6, 9);
