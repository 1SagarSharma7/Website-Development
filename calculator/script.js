var dis = document.getElementById("dis");
var buts = document.getElementsByClassName("button");
var res = document.getElementsByClassName("equal");

var op1 = 0;
var op2 = null;
var opr = null;


for(var i = 0; i < buts.length; i++){
    buts[i].addEventListener("click", function(){  /* for / arr / var -> combo with set of if else   */
        var val = this.getAttribute("data-value");

       
        
        if(val == "+" || val == "-" ||val == "/"||val == "*" ||val == "%"  ){
            // window.alert("hey");
            opr = val; 
            op1 = parseFloat(dis.textContent);
            dis.innerText = "";

        }else if (val == "-1")
        {
            dis.innerText = eval(parseFloat(dis.textContent) + "*" + val);
        }
        else if(val == "AC"){
            dis.innerText = "";
        }
        else if(val == "="){
            op2 = parseFloat(dis.textContent);
            dis.innerText = eval(op1 + opr + op2);
        }
        else{
            dis.innerText += val;
        }


    });
}

