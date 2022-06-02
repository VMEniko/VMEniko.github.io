function goBack() {
    window.history.back()
  }

let agree = document.getElementById("agr")
    agree.addEventListener("!IsChecked", function(){
      alert("YOU MAY PAY YOUR SACRIFICES")
    });

function sacrifice(){
  
  let checkbox = document.getElementById("agr") 

      if (!checkbox.checked){
        alert("Y'ALL GONNA DO YOUR SACRIFICES");
      }
      else { 
        goBack();
      }
    }