let button=document.getElementById("btn");

button.addEventListener("click",performOperation);

function performOperation (){
    var first = document.getElementById("num1").value;
    var secound = document.getElementById("num2").value;
    var res = document.getElementById("result");
    var oper =document.getElementById("operator").value;

    if(isNaN(first)|| isNaN(secound))
    {
        res.textContent ="Please enter valid number";
        
    }
    else if(oper === "")
    {
        
        res.textContent ="please select a valid operator";
        
    }
  else{
    const final =calculate(parseFloat(first),parseFloat(secound),oper)
    res.textContent =" result is : "+ final;
  }
}


function calculate(num1,num2,operator)
{

     var result=0;

     if(operator == '+')
     {
      result= num1 + num2;
     }

     else if(operator == '-')
     {
       result=num1 - num2;
     }

     else if(operator=="*")
     {
       result = num1 * num2;
     }

     else if(operator == "/")
     {
       result=num1/num2;
     }
 
     return result;
}
