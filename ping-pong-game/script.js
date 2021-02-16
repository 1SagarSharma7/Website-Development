var ball = document.getElementById("ball");
var ad = document.getElementsByClassName("w-dabake");

function green() {
  ball.style.backgroundColor = "green";
}

function yellow() {
  ball.style.backgroundColor = "yellow";
}

function chamcham() {
  var x = 0;

  setInterval(() => {
    if (x % 2 != 0) {
      x++;
      console.log("even");
      green();
    } else {
      x++;
      console.log("odd");
      yellow();
    }
  }, 100);
}

function ad_function() {
  console.log("chal be");
}

ball.addEventListener("click", chamcham);
ad.addEventListener("onkeypress", ad_function);
