function goBack() {
    window.history.back()
  };

function sacrifice(){
  
  let checkBox = document.getElementById("agr") 

      if (!checkBox.checked){
        alert("Y'ALL GONNA DO YOUR SACRIFICES");
      }
      else { 
        goBack();
      }
    };
