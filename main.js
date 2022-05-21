const number = document.querySelector("#number");
const buttonCalc = document.querySelector("#calc");

if (window.Worker) {
  const myWorker = new Worker("worker.js");

  buttonCalc.addEventListener("click", working);

  function working() {
    myWorker.postMessage("aver");
  }

  myWorker.onmessage = function (e) {
    number.innerHTML = e.data;
  };
}
