var globalScop=10;//Global Execution context

function add() { //outer environment
    var vale=10; //ER
    function multiply() { // function execution context
        let functionScop=10;
        console.log(globalScop+vale*functionScop);//
    }
}
add();