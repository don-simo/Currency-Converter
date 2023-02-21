const rates = {
    USD: 1,
    EUR: 0.93,
    GBP: 0.83,
    PLN: 4.36
  };
  
  const convertBtn = document.querySelector('#convert-btn');
  const input = document.querySelector('#input');
  const from = document.querySelector('#from');
  const to = document.querySelector('#to');
  const output = document.querySelector('#output');
  
  convertBtn.addEventListener('click', function() {
    let amount = input.value;
    let fromRate = rates[from.value];
    let toRate = rates[to.value];
    let converted = (amount * toRate) / fromRate;
  
    output.textContent = converted.toFixed(2) + ' ' + to.value;
  });
  