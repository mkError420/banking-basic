/* console.log('money here'); */


document.getElementById('deposit-button').addEventListener('click', function(){
 const depositInputField= document.getElementById('deposit-input');
 /* console.log(depositInputField); */

  const depositeText = depositInputField.value;
  /* console.log(depositeText); */
  const newDepositeAmmount = parseFloat(depositeText);

//Deposite
  const depositTotal= document.getElementById('deposit-total');
  const oldDepositTotalText = depositTotal.innerText;

  const newDepositeTotal  = parseFloat (oldDepositTotalText);


  const updateDepositeTotal = newDepositeAmmount +  newDepositeTotal;
  depositTotal.innerText = updateDepositeTotal;
  
  depositInputField.value= '';


  //update balance 

  const oldUpdateBalamce = document.getElementById('balace-total');
  const oldUpdateBalanceText = oldUpdateBalamce.innerText;

  const oldUpdateBalanceTotal= parseFloat (oldUpdateBalanceText);
  oldUpdateBalamce.innerText = oldUpdateBalanceTotal;

  const newUpdateTotalBalance=oldUpdateBalanceTotal+newDepositeAmmount; 
  oldUpdateBalamce.innerText=newUpdateTotalBalance;

})

//Withdraw Button
document.getElementById('withdra-button').addEventListener('click',function(){

   const addWithdrawAmmount= document.getElementById('withdraw-input');
       
   const withdrawTotalText= addWithdrawAmmount.value
   /* console.log(withdrawTotalText); */
   const newWithdrawTotal = parseFloat(withdrawTotalText);
   /* console.log(newWithdrawTotal); */

    //Withdraw
    const newWithdraw = document.getElementById('withdraw-total');
          
    const updateWithdrawTotal = newWithdraw.innerText;
   const finalWithdrawTotal = parseFloat(updateWithdrawTotal);
  
    const finalTotalWithdrawAmmount = newWithdrawTotal + finalWithdrawTotal;

    newWithdraw.innerText = finalTotalWithdrawAmmount;
    addWithdrawAmmount.value = '';

//after withdraw balance

    const oldUpdateBalamce = document.getElementById('balace-total');
    const oldUpdateBalanceText = oldUpdateBalamce.innerText;
  
    const oldUpdateBalanceTotal= parseFloat (oldUpdateBalanceText);
    /* oldUpdateBalamce.innerText = oldUpdateBalanceTotal; */

    const finalOldBalanceUpdate=oldUpdateBalanceTotal-finalTotalWithdrawAmmount;
    oldUpdateBalamce.innerText=finalOldBalanceUpdate;

})

