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
