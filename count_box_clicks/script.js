var count = 0;
var block = document.getElementById("box");
var text = document.getElementById("counter");


function add(){
    console.log(count);
     count++; 
     text.innerText = "Box Clicked " + count + "times";

}

block.addEventListener("click",add);

