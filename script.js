async function convert() {
    const amount = document.getElementById("amount").value;
    const res = await fetch("https://api.exchangerate-api.com/v4/latest/USD");
    const data = await res.json();
    const rate = data.rates["VND"];
    document.getElementById("result").innerText = `${amount} USD = ${(
      amount * rate
    ).toFixed(0)} VND`;
  }
  