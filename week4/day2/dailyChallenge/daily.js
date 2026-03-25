

async function printCurrency() {
    try {
        const response = await fetch("https://v6.exchangerate-api.com/v6/2687efb8fc0624dbbc20f7a2/latest/USD");
        if(!response.ok){
            throw new Error("couldn't load");
        }
        const data = await response.json();
        const currencyObjKeys = Object.keys(data.conversion_rates);
        const fromCurrency = document.getElementById('fromCurrency');
        const toCurrency = document.getElementById('toCurrency');
        
        currencyObjKeys.forEach((curr) => {
            fromCurrency.innerHTML += `<option>${curr}</option>`;
            toCurrency.innerHTML += `<option>${curr}</option>`;
        })
        
    }
    catch(err) {
        console.log(err);
    };
}


    const to = document.getElementById('toCurrency');
    const from = document.getElementById('fromCurrency');
    const amountInput = document.getElementById('amount');
    const endAmount = document.getElementById('endAmount');
    const btn = document.getElementById('convert');
    
    btn.addEventListener('click', calculate);

    async function calculate() {
        const chosen = from.value;

        const amount = Number(amountInput.value);

        if (isNaN(amount) || amount <= 0) {
    endAmount.innerText = 'please enter a valid number';
    return;
  }

  try {
    const res = await fetch(`https://v6.exchangerate-api.com/v6/2687efb8fc0624dbbc20f7a2/latest/${chosen}`);
    const val = await res.json();

    const rate = val.conversion_rates[to.value];

    const result = amount * rate;

    endAmount.innerText = `${result} ${to.value}`;

  } catch (err) {
    console.log(err);
  }
}


    


printCurrency();
