const compute = document.getElementsByTagName("li")[0];


compute.onclick= funCompute; 

const nBegin= parseInt(compute.innerHTML);

let sum= 0; 

function funCompute(e){


for (let i= nBegin; i<1000; i++){
    if(i%2!=0){
        sum += i;
    }
}
document.getElementById("sum").innerHTML= "Sum of odd numbers from "+nBegin+" to 1000 is "+sum; 

}
