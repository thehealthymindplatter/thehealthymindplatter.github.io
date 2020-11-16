var i=0;
function expand(){
  if(i==0){
document.getElementById("menu").style.transform="scale(3)"; 
    i=1;
  }
  else{   document.getElementById("menu").style.transform="scale(0)"; 
    i=0;
  }
}
