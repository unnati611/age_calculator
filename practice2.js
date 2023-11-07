function year(){
    let u = document.getElementById("birth").value
     u = Number.parseInt(u);
    let v = document.getElementById("current").value
   v = Number.parseInt(v);
   
    let c = v - u ;
    document.getElementById("age").innerHTML = "your age is " + c
   
   
    }