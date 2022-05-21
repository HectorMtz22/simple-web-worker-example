const number = document.querySelector("#number");
const buttonCalc = document.querySelector("#calc");
const myWorker = new Worker("js/worker.js");

buttonCalc.addEventListener("click", working);

function working() {
  myWorker.postMessage("aver");
}

myWorker.onmessage = function (e) {
  number.innerHTML = e.data;
};
