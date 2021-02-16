/* 1164 */
// "use strict";

let exp = document.getElementById("exp");

function smooth() {
  let a = 10;

  function smooth2() {
    if (a >= 1310) {
      clearInterval(id);
    } else {
      window.scrollBy(0, 10);
      a = a + 10;
    }
  }
  var id = setInterval(smooth2, 10);
}

exp.addEventListener("click", smooth);
