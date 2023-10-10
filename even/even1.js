const  days = ['Sun', 'Mon', 'Tue', 'Thu']; 

document.getElementsByTagName("input")[0].onclick= showDays;

function showDays(e){

    const div = document.getElementsByTagName("div");
    days[4]= "Fri";

    for (let i=0; i<days.length; i++){
     div[i].innerHTML= days[i];
    }
    
 

}