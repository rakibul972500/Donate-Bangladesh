// BlogPage Onclick
document.getElementById('blog-btn').addEventListener('click', function () {
  window.location.href = './faq.html';
});

// Section Declare
const historySection = document.getElementById('history-section');
const donationSection = document.getElementById('donate-section');

// History Button
const historyButton = document.getElementById('history-section-btn');
historyButton.addEventListener('click', function () {
  historySection.classList.remove('hidden');
  donationSection.classList.add('hidden');
  historyButton.classList.add('bg-secondary');
  donationButton.classList.remove('bg-secondary');
});

// Donation Button

const donationButton = document.getElementById('donation-section-btn');
donationButton.addEventListener('click', function () {
  historySection.classList.add('hidden');
  donationSection.classList.remove('hidden');
  donationButton.classList.add('bg-secondary');
  historyButton.classList.remove('bg-secondary');
});

// modal
const modal = document.getElementById('my_modal');

// Donate For Noakhali Flood
document
  .getElementById('noakhali-donate-btn')
  .addEventListener('click', function () {
    const myBalance = getInnerTextById('my-balance');
    const noakhaliBalance = getInnerTextById('noakhali-balance');

    const noakhaliInput = getValueById('noakhali-donate-input');

    if (isNaN(noakhaliInput)) {
      alert('Input Must be A Number');
    } else if (noakhaliInput < 1) {
      alert('Input Minimum 1 Taka');
    } else if (myBalance < noakhaliInput) {
      alert('Insufficient Balance');
    } else {
      const totalnoakhaliBalance = noakhaliBalance + noakhaliInput;

      const myNewBalance = myBalance - noakhaliInput;

      document.getElementById('my-balance').innerText = myNewBalance;
      document.getElementById('noakhali-balance').innerText =
        totalnoakhaliBalance;

      // for add History
      const newDiv = document.createElement('div');
      newDiv.innerHTML = `<div class="p-4 border-1 shadow-md  bg-secondary flex flex-col items-center text-center">
        <p class="text-xl md:text-2xl">${noakhaliInput} Taka is Donated for "Donate for Flood at Noakhali, Bangladesh"</p>
        <p class="text-xl md:text-xl">Current balance: ${myNewBalance}Tk</p>
        <p class="text-xl md:text-2xl">${new Date().toLocaleString()}</p>
      </div>`;

      historySection.insertBefore(newDiv, historySection.firstChild);
      document.getElementById('my_modal_1').showModal();
      document.getElementById('modal-noakhali-amount').innerText =
        noakhaliInput;
    }
  });

// Donate For Feni Float
document
  .getElementById('feni-donate-btn')
  .addEventListener('click', function () {
    const myBalance = getInnerTextById('my-balance');
    const feniBalance = getInnerTextById('feni-balance');

    const feniInput = getValueById('feni-donate-input');

    if (isNaN(feniInput)) {
      alert('Input Must be A Number');
    } else if (feniInput < 1) {
      alert('Input Minimum 1 Taka');
    } else if (myBalance < feniInput) {
      alert('Insufficient Balance');
    } else {
      const totalFeniBalance = feniBalance + feniInput;

      const myNewBalance = myBalance - feniInput;

      document.getElementById('my-balance').innerText = myNewBalance;
      document.getElementById('feni-balance').innerText = totalFeniBalance;

      const newDiv = document.createElement('div');
      newDiv.innerHTML = `<div class="p-4 border-1 shadow-md  bg-secondary flex flex-col items-center text-center">
        <p class="text-xl md:text-2xl">${feniInput} Taka is Donated for "Donate for Flood Relief in Feni,Bangladesh"</p>
        <p class="text-xl md:text-xl">Current balance: ${myNewBalance}Tk</p>
        <p class="text-xl md:text-2xl">${new Date().toLocaleString()}</p>
      </div>`;
      historySection.insertBefore(newDiv, historySection.firstChild);
      document.getElementById('my_modal_2').showModal();
      document.getElementById('modal-feni-amount').innerText = feniInput;
    }
  });

// Donate For Quata Protest
document
  .getElementById('quota-donate-btn')
  .addEventListener('click', function () {
    const myBalance = getInnerTextById('my-balance');
    const quataBalance = getInnerTextById('quata-balance');

    const quataInput = getValueById('quata-donate-input');

    if (isNaN(quataInput)) {
      alert('Input Must be A Number');
    } else if (quataInput < 1) {
      alert('Input Minimum 1 Taka');
    } else if (myBalance < quataInput) {
      alert('Insufficient Balance');
    } else {
      const totalQuataBalance = quataBalance + quataInput;

      const myNewBalance = myBalance - quataInput;

      document.getElementById('my-balance').innerText = myNewBalance;
      document.getElementById('quata-balance').innerText = totalQuataBalance;
      const newDiv = document.createElement('div');
      newDiv.innerHTML = `<div class="p-4 border-1 shadow-md  bg-secondary flex flex-col items-center text-center">
        <p class="text-xl md:text-2xl">${quataInput} Taka is Donated for "Aid for Injured in the Quota Movement"</p>
        <p class="text-xl md:text-xl">Current balance: ${myNewBalance}Tk</p>
        <p class="text-xl md:text-2xl">${new Date().toLocaleString()}</p>
      </div>`;
      historySection.insertBefore(newDiv, historySection.firstChild);
      document.getElementById('my_modal_3').showModal();
      document.getElementById('modal-quata-amount').innerText = quataInput;
    }
  });