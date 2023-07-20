function calculatetip() {
 var billAmt=document.getElementById("billamt"). value ;
var serviceRating=document.getElementById("servicerating").value;
  
var personSharing=document.getElementById("personsharing"). value ;
  if(billAmt===""||serviceRating == 0){
    
      alert("please enter the values");
      return;
      }
  var total=(billAmt*serviceRating)/personSharing;
  total=Math.round(total);
  total=total.toFixed(2);
  document.getElementById("span").innerHTML=total;
  }
  document.getElementById("calculate").onclick=function(){
    calculatetip();
    }
  




