let wrapper = document.getElementById("wrapper");
let left = document.getElementById("triangle-left");
let right = document.getElementById("triangle-right");
let leftCounter = 0;
let rightCounter = 0;
let lSpan = document.getElementById("lefts");
let rSpan = document.getElementById("rights");

wrapper.addEventListener("click", (event) => {
  let jimmy = Math.floor(Math.random()*2);
  if (jimmy === 1){
    leftCounter++;
    left.classList.remove('hidden');
    right.setAttribute("class", 'hidden');
    lSpan.innerHTML = "Lefts :" + leftCounter;
  } else {
    rightCounter++;
    right.classList.remove('hidden');
    left.setAttribute("class", 'hidden');    
    rSpan.innerHTML = "Rights :" + rightCounter;
  }
});