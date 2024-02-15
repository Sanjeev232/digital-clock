const jsClockElement = document.querySelector("#jsClock");
const jsClockElement2 = document.querySelector("#jsClock2");

function tick(clockElement) {
  const time = new Date().toLocaleString();
  clockElement.innerHTML = time;
}

function runClocks() {
  const seconds = new Date().getSeconds();

  seconds % 2 === 0 ? tick(jsClockElement) : tick(jsClockElement2);
}

setInterval(runClocks, 1000);
