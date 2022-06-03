function goBack() {
    window.history.back()
  };

let agree = document.getElementById("agr")
    agree.addEventListener("!IsChecked", function(){
      alert("YOU MAY PAY YOUR SACRIFICES")
    });

function sacrifice(){
  
  let checkBox = document.getElementById("agr") 

      if (!checkBox.checked){
        alert("Y'ALL GONNA DO YOUR SACRIFICES");
      }
      else { 
        goBack();
      }
    };