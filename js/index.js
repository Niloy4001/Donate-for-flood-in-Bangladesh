
const donationSection = document.getElementById('donation-section');
const historySection = document.getElementById('history-section');
const toggleHistoryBtn = document.getElementById('toggle-history-btn');
const toggleDonationBtn = document.getElementById('toggle-donation-btn');
toggleHistoryBtn.addEventListener('click',function(){
    toggleDonationBtn.classList.remove('text-black1', 'bg-primary', 'border-none');
    toggleHistoryBtn.classList.remove('text-black1/[0.7]', 'bg-white');
    toggleHistoryBtn.classList.add('text-black1', 'bg-primary', 'border-none');
    donationSection.classList.add('hidden');
    historySection.classList.remove('hidden');
    
    
})
toggleDonationBtn.addEventListener('click',function(){
    toggleHistoryBtn.classList.remove('text-black1', 'bg-primary', 'border-none');
    toggleDonationBtn.classList.remove('text-black1/[0.7]', 'bg-white');
    toggleDonationBtn.classList.add('text-black1', 'bg-primary', 'border-none');
    donationSection.classList.remove('hidden');
    historySection.classList.add('hidden');
    
    
})


let accountBalance = document.getElementById('account-balance');
let divForHistoryAdding = document.getElementById('add-history-div');
let date = new Date();



function getNumberFromString(text) {
    const result = parseFloat(text);
    return result;
}


function donateMoney(event) {
    let donateHeading = event.target.parentElement.parentElement.children[1].innerText.slice(7);
    
    let fundedBalance = event.target.parentElement.parentElement.children[0].children[0].children[1];
    let fundedNumberBalance = getNumberFromString(fundedBalance.innerText); 

    let accountNumberBalance = getNumberFromString(accountBalance.innerText);

    let donateInputAmount = event.target.parentElement.previousElementSibling;
    let donateAmountNumber = getNumberFromString(donateInputAmount.value);

    let modalBox = event.target.parentElement;
    modalBox.setAttribute("onclick", "my_modal_5.showModal()");

    let arr = donateInputAmount.value.split('');
    for(item of arr){
       if (isNaN(item)) {
        modalBox.removeAttribute("onclick");
        alert('Invalid Input');
        return;
        
       }
        
    }
    

    if (donateAmountNumber > accountNumberBalance || donateAmountNumber <= 0 || donateInputAmount.value === '') {
        modalBox.removeAttribute("onclick");
        alert('Invalid Input');
       
        return;
    }
           

    fundedBalance.innerText = fundedNumberBalance + donateAmountNumber;
    accountBalance.innerText = accountNumberBalance - donateAmountNumber;
    divForHistoryAdding.innerHTML += `
            <div class="p-4 lg:p-8 border border-black1/[0.1] border-solid shadow-sm rounded-2xl">
            <h1 class="font-bold text-base lg:text-xl text-black1 mb-4">${donateAmountNumber} Taka is Donated ${donateHeading}</h1>
            <p class="font-light text-sm lg:text-base text-black1/[0.7]">Date : ${date}</p>
          </div>
    `;
    
    
}






