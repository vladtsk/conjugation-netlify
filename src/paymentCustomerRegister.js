const paymentEmail = document.getElementById("paymentEmail");

fetch("/create-customer", {
  method: "post",
  headers: {
    "Content-type": "application/json",
  },
  body: JSON.stringify({
    email: paymentEmail.value,
  }),
}).then((response) => response.json());
