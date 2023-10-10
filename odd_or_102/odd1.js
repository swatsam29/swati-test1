const sum = document.getElementById("start");

sum.onchange= function Calculate(){
    const num1= parseInt(document.getElementById("start").value);
    let num2= num1+50; 
    let result= 0; 
    for (let i= num1; i<=num2; i++){
        if(i%2 == 0){
            result += i;
            console.log(i)
        }
    
    }
    document.getElementById("result").innerHTML= "Sum of even numbers from "+num1+" to "+num2+" is "+result; 
    
    }



