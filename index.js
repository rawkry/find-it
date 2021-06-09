


   /* set number*/
      function setNumber(){
        var getnumber=document.getElementById("yourNumber").value;

        
        if(getnumber >= 10){
          document.getElementById("selectedNumber").innerHTML="Don't be so stupid  &#128520;";
        }
        else if (getnumber>=8){
          document.getElementById("selectedNumber").innerHTML="you select:&#128522; <br>" + getnumber;
        }
         
        else if (getnumber>=6){
          document.getElementById("selectedNumber").innerHTML="you select:&#128521; <br>" + getnumber;
        }
        else if (getnumber>=4){
          document.getElementById("selectedNumber").innerHTML="you select:&#128559; <br>" + getnumber;
        }

        else if (getnumber>=2){
          document.getElementById("selectedNumber").innerHTML="you select:&#128523; <br>" + getnumber;
        }
        else if (getnumber>=1){
          document.getElementById("selectedNumber").innerHTML="you select: &#128526; <br>" + getnumber;
        }
        else if (getnumber==0){
          document.getElementById("selectedNumber").innerHTML="sorry 0 is not available now &#129488; <br>" + getnumber;
        }
        
       else {
        document.getElementById("selectedNumber").innerHTML=  "you select:<br>" + getnumber;
      }}

      setNumber();

    /*generate random number*/

 
    
function generate(){
  
    getnumber=document.getElementById("yourNumber").value;
     
    const randomNUMBER= Math.floor( Math.random()*9 +1);

 
    
    console.log(randomNUMBER)
    document.getElementById("root").innerHTML=randomNUMBER;
     
    if( randomNUMBER == getnumber){
     document.getElementById("comparing").innerHTML="CONGRATULATION!! you match the number &#128076 :" +getnumber;
     alert("select another number");
    }
    else if( randomNUMBER < getnumber){
      document.getElementById("comparing").innerHTML="you will not get your number &#129325; <br>:" ;
     
     }
     else if (getnumber==0){
      document.getElementById("comparing").innerHTML="Please Select number &#129488; <br>" ;
    }
    else{
      
      document.getElementById("comparing").innerHTML="Finding.....YOUR  &#128559;  NUMBER <br>&#128560;...........:";
      
    }


    }
    
function reset(){
  
  

  var getnumber ='';
 var randomNUMBER='';
 document.getElementById("comparing").innerHTML=getnumber; 
 document.getElementById("selectedNumber").innerHTML=randomNUMBER ;

}
 