const  fruits = ['apple', 'orange', 'banana'];

document.getElementsByTagName("li")[0].onclick= addFruits; 

function addFruits(e){

    const p= document.getElementsByTagName("p");

    fruits[3]= "mango";

    for(let i=0; i<fruits.length; i++){
        p[i].innerHTML= fruits[i];
    }
    
}