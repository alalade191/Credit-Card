//CRAD DETAILS
let cardNumber = document.querySelector("#card-number");
let cardName = document.querySelector("#card-name");
let cardMonth = document.querySelector("#card-month");
let cardYear = document.querySelector("#card-year");
let cardCvc = document.querySelector("#card-cvc")

// ERROR RESULT
let errormessage = document.querySelector(".first-span");
let secondErrorMessage = document.querySelector(".second-span")
let thirdErrorMessage = document.querySelector(".third-span")

//INPUT DETAILS
let formName = document.querySelector("#input-name");
let formNumber = document.querySelector("#input-number");
let formMonth = document.querySelector("#input-month");
let formYear = document.querySelector("#input-year");
let formCvc = document.querySelector("#input-cvc");
let action = document.querySelector("#submit");
let form = document.querySelector('#form')
let complete = document.querySelector('#complete')


formName.addEventListener("input", (e) => {
  let formNameResult = e.target.value;
  let regexName = /^[A-Z]+$/
  let endResult = regexName.test(formNameResult)
  if(!endResult){
    errormessage.style.display = 'block';
    formName.style.border = '1px solid red'
  }else{
    errormessage.style.display = 'none';
    formName.style.border = '1px solid green'
    cardName.textContent = formNameResult;
  }
});





// formNumber.addEventListener("input", (e) => {
//   let formNumResult = e.target.value;
//   Array(formNumResult).forEach((item) => {
//     if (isNaN(Number(item))) {
//       errormessage.style.display = "block";
//       formNumber.style.border = "1px solid red";
      
//     } else {
//       errormessage.style.display = "none";
//       formNumber.style.border = "1px solid green";
//       cardNumber.textContent = formNumResult
//     }
//   });
// });

formNumber.addEventListener('input', (e) => {
  let formNumResult = e.target.value;
  let express = /^[0-9]+$/
  let output = express.test(formNumResult)
  if(!output){
    errormessage.style.display = 'block';
    formNumber.style.border = '1px solid red'
  }else{
    errormessage.style.display = 'none';
    formNumber.style.border = '1px solid green'
    cardNumber.textContent = formNumResult
  }
})


formMonth.addEventListener('input', (e) => {
  let formMonResult = e.target.value
  let regexmonth  = /^[0-9]+$/
  let regexmonthresult = regexmonth.test(formMonResult)
  if(!regexmonthresult){
    formNumber.style.border = '1px solid red'
    secondErrorMessage.style.display = 'block'
  }else{
    formMonth.style.border = '1px solid green'
    secondErrorMessage.style.display = 'none'
    cardMonth.textContent = formMonResult
  }
})


formYear.addEventListener('input', (e) => {
  let formyearResult = e.target.value
  let regexyear  = /^[0-9]+$/
  let regexyearresult = regexyear.test(formyearResult)
  if(!regexyearresult){
    formNumber.style.border = '1px solid red'
    secondErrorMessage.style.display = 'block'
  }else{
    formYear.style.border = '1px solid green'
    secondErrorMessage.style.display = 'none'
    cardYear.textContent = formyearResult
  }
})


formYear.addEventListener('input', (e) => {
  let formyearResult = e.target.value
  let regexyear  = /^[0-9]+$/
  let regexyearresult = regexyear.test(formyearResult)
  if(!regexyearresult){
    formNumber.style.border = '1px solid red'
    secondErrorMessage.style.display = 'block'
  }else{
    formYear.style.border = '1px solid green'
    secondErrorMessage.style.display = 'none'
    cardYear.textContent = formyearResult
  }
})


formCvc.addEventListener('input', (e) => {
  let formcvc = e.target.value
  let regexcvc  = /^[0-9]+$/
  let regexcvcresult = regexcvc.test(formcvc)
  if(!regexcvcresult){
    formCvc.style.border = '1px solid red'
    thirdErrorMessage.style.display = 'block'
  }else{
    formCvc.style.border = '1px solid green'
    thirdErrorMessage.style.display = 'none'
    cardCvc.textContent = formcvc
  }
})


action.addEventListener('click', () => {
  form.style.display = 'none'
  complete.style.display = 'block'
  action.textContent = 'Continue'
})