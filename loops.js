// While loop
let value=10;
while (value>=1) {
    console.log("value = "+value);
    value--;
}
// for loop
let count ;
 for(count=1;count<=10;count++){
    if(count%2!=0){
    console.log("Odd number = "+count);
    }  
 }
 // do while loop
 let loop=10;
 do {
    loop++;
    console.log('do-while loop is run atleast once before checking the condithion');
    
 } while (loop<=5);
   console.log(loop);

   // for in loop
   let myDetials={
    name:"Bharath",agr:"23",gender:"male"
   }
   for(let detials in myDetials){
    console.log(detials+" = "+myDetials[detials]);
   }

   // for of loop
   let color=['red','blue','green']
    for (const colour of color) {
        console.log(colour);
        
    }
    // forEach loop
    let values=[1,2,3,4,5];
    values.forEach((values)=>{
        console.log(values);
        
    })
   
    
 