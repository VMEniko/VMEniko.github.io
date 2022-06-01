function calcQuantity()
{
    let price = 20;
    let amountInput = document.querySelector ("input[name='quantity']")
    let amountNumber = parseInt(amountInput.value);
    
    amountNumber = isNaN(amountNumber) ? 0 :amountNumber;
    
    showSumPrice(price, amountNumber)
    
}

function showSumPrice (price, amountNumber) {
    let showAmount = document.querySelector ("span.show-amount");
            
            if( amountNumber > 10 || amountNumber < 2 )
              {
              alert("minimum 2 maximum 10 chinchillas avaliable!");
              return;
          } else if (amountNumber %2 != 0)
              {
              alert("chinchillas in pairs are required!");
              return;
          } else {
        
        let amount = amountNumber * price;
        showAmount.innerHTML = amount;
          }              
}

function checkValidation() {
  const inpObj = document.getElementById("quantity");
  if (!inpObj.checkValidity()) {
    document.getElementById("selector").innerHTML = inpObj.validationMessage;
  }
}

Element.prototype.setUrgent = function () {
  this.style.border = "solid 2px red";
}

