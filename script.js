// variable declaration and asigned we can also reassign
var a ;
var b;
var c;
var d;
  function functionscope() {
    a=10;
    b=20;
    c=30;
    d=null;
    console.log("a+b = "+a);
    console.log(b);
    console.log(c);
    console.log(d);
}
functionscope()
// let once declared we can`t redeclare but reassign 
function blockscope(){
    let a=10;
    if(a==100)
    {
        let b=20;
        console.log(b);
    }
    else{
        a=300;
        console.log(a);

    }                                                                        
}
blockscope()
// const once declared we can`t declared and reassign
function get(){
    const a=10;
    console.log(a);
}
 get();
  //synchronous function
   let e="Bharath";
  let f="24";
  let g="BCA";
 function sync(){
    console.log("Name = "+e);
    console.log("Age = "+f);
    
 }
 sync();
// Asynchronus function
 setTimeout(
    function fun(){
        console.log("Task finished after 3 seconds.");
    },3000
 )

setTimeout(
    function fun(){
        console.log("Task finished after 2 seconds.");
    },2000
 )
 console.log("Education = "+g);