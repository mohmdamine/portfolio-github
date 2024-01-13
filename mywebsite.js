function verification(){
      
      
      var a=document.getElementById("text1").value;
      var b=document.getElementById("text2").value;
      var c=document.getElementById("text3").value;
      if(a==""){
        alert("enter youre name");
      }
      if(b.indexOf("@")==-1 || b.indexOf(".")==-1){
        alert("you should put @ and a point in youre email");
      }
      if(c==""){
        alert("enter a message");
      } 
           
    }