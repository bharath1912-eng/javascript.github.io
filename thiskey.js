 
 // this keyword is a referrance variable which refers to the currrent object
 
 let myInfo={
     name:"bharath",
     Role :"developer",
     Adddress:"chennai",
     getInfo(){
          console.log(this.name);
          console.log(this.Role);
          console.log(this.Adddress);
     }
 }
 myInfo.getObj= function() {
     console.log(this);
     
 }
 myInfo.getObj();
 myInfo.getInfo();

 // Inline call back function

 let myShop={
     shopName:"SathyaInfoTech",
     product:["html","csss","javascript"],
     shopproduct(){
          this.product.forEach(function (myProduct) {
               console.log(this.shopName," - ",myProduct);  
          },this);
     }
 }
 myShop.shopproduct();