var arguments = [1,2,3];

var arr = () => arguments[2];
arr();

function foo(n){
  var f = () => arguments[0] + n;
  return f();
}

foo(3);

/*var sum = function add(){
   console.log("1");
};

sum();

// var mul = sum();



/*function makeArmy(){
  let shooters = [];
  let i = 0;
  while(i < 10) {
    let shooter = function() {
      console.log(i);
    };
    shooters.push(shooter);
    i++;
  }
  console.log("1");
  return shooters;
}


var army = makeArmy();

army[0]();
army[9]();

/*function Con(name, age){
    this.name = name;
    this.age = age;
}

//   Con.prototype.education = "engineering";
  Con.prototype.getName = function(){
          return this.name;
  };

  var con1 = new Con("sagar",20);
  var con2 = new Con("viraj",19);
   
/*for (let i = 1; i <= 5; i ++){
    setTimeout( function(){console.log(i)} , 1000);
}; 

/* var a = 30;
const b = 40;

console.log(a);
 
b = a;
 */
