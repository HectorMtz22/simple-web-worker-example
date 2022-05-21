const calcFib = (n) => {
  let n1 = 1;
  let n2 = 1;
  if (n === 0) return n;
  if (n <= 1) return n1;
  while (n > 1) {
    let temp = n1;
    n1 = n2;
    n2 = temp + n2;
    n--;
  }
  return n1;
};

onmessage = function (e) {
  console.log(`Worker: Message received from main script ${e.data}`);
  this.postMessage("Cargando");
  const res = calcFib(1000000000);
  postMessage(res);
};
