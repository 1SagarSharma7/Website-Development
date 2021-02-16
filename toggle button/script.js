var inner = document.getElementById("inner-toggle");
var word = document.getElementById("word");
var outer = document.getElementById("outer-toggle");

var count = 1;

inner.addEventListener("click", function tog(){
    count++;
    if(count%2 == 0)
    {
    word.style.color = " white";    
    document.body.style.backgroundColor = "black";
    inner.style.marginLeft = "100px";
    outer.style.backgroundColor = "white";
}
    else{
        word.style.color = " black";    
        document.body.style.backgroundColor = "white";
        inner.style.marginLeft = "-0.5px";
    }
})          