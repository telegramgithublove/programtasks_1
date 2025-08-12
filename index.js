

const decrease = document.getElementById('decrease');
const reset = document.getElementById('reset');
const increase = document.getElementById('increase');
const countLabel = document.getElementById('countLabel');

let countNumber = 0;

increase.onclick = function () {
    countNumber++;
    countLabel.textContent = countNumber;
}

decrease.onclick = function () {
  countNumber--;
  countLabel.textContent = countNumber;
}


reset.onclick = function () {
  countNumber = 0;
  countLabel.textContent = countNumber;
}