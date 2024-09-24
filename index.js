// console.log('legeche Angta mamma');

// add event donation button

  const donateBtnNoakhali=document.getElementById('donate-noakhali');
  donateBtnNoakhali.addEventListener('click', function(){
const getAmountNk=parseFloat(document.getElementById('amount-noakhali').value) ;
const noakFundBalance=parseFloat(document.getElementById('fund-nk').innerText);
const noakfundNewbalance=getAmountNk+noakFundBalance;


    console.log(updatefund);
  })

