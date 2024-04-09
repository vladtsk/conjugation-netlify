// Set your secret key. Remember to switch to your live secret key in production.
// See your keys here: https://dashboard.stripe.com/apikeys
/*const stripe = require("stripe")(
  "sk_test_51HD7zmGnDk1xYafa1wDmfmVjvxuqm0uslF9mMP0GnbTtuQqXrwMOSzfCsa9CqnUvRcatXUjE2EhQugWfj6a2eWlY00gC5aQIAl"
);*/

import stripe from "stripe";

const stripeInstance = stripe(
  "sk_test_51HD7zmGnDk1xYafa1wDmfmVjvxuqm0uslF9mMP0GnbTtuQqXrwMOSzfCsa9CqnUvRcatXUjE2EhQugWfj6a2eWlY00gC5aQIAl"
);

const elements = stripe.elements({
  clientSecret: "CLIENT_SECRET",
});

const paymentElement = elements.create("payment");

// Create the Address Element in billing mode
let addressElement = elements.create("address", {
  mode: "billing",
});

/*var addressElement = elements.getElement('address');

addressElement.getValue()
.then(function(result) {
  if (result.complete) {
    // Allow user to proceed to the next step
    // Optionally, use value to store the address details
  }
})
*/

const element = elements.create("issuingCardNumberDisplay", {
  issuingCard: "ic_1ITi6XKYfU8ZP6raDAXem8ql",
  nonce: "ephkn_priv_v9QGxPyA1F1VHjB4dpLhHfw4",
  ephemeralKeySecret: "ek_live_YWNjdF8xSmtzQWtQbUd...",
});

const cardElement = elements.create("card");

cardElement.mount("#card-element");

/*
// Update an element with details collected elsewhere on your page
var myPostalCodeField = document.querySelector('input[name="my-postal-code"]');
myPostalCodeField.addEventListener('change', function(event) {
  cardElement.update({value: {postalCode: event.target.value}});
});

*/

/*
const customer = await stripeInstance.customers.create({
  email: "{{CUSTOMER_EMAIL}}",
  name: "{{CUSTOMER_NAME}}",
  shipping: {
    address: {
      city: "Brothers",
      country: "US",
      line1: "27 Fredrick Ave",
      postal_code: "97712",
      state: "CA",
    },
    name: "{{CUSTOMER_NAME}}",
  },
  address: {
    city: "Brothers",
    country: "US",
    line1: "27 Fredrick Ave",
    postal_code: "97712",
    state: "CA",
  },
});

app.post("/create-subscription", async (req, res) => {
  const customerId = req.cookies["customer"];
  const priceId = req.body.priceId;

  try {
    // Create the subscription. Note we're expanding the Subscription's
    // latest invoice and that invoice's payment_intent
    // so we can pass it to the front end to confirm the payment
    const subscription = await stripe.subscriptions.create({
      customer: customerId,
      items: [
        {
          price: priceId,
        },
      ],
      payment_behavior: "default_incomplete",
      payment_settings: { save_default_payment_method: "on_subscription" },
      expand: ["latest_invoice.payment_intent"],
    });

    res.send({
      subscriptionId: subscription.id,
      clientSecret: subscription.latest_invoice.payment_intent.client_secret,
    });
  } catch (error) {
    return res.status(400).send({ error: { message: error.message } });
  }
});
*/
