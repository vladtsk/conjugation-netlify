// https://docs.stripe.com/billing/quickstart
//https://firebase.google.com/docs/database/admin/retrieve-data#node.js

import dotenv from 'dotenv';
import express, { Router } from "express";

import Stripe from "stripe";


import admin from "./admin-init.js";

/*import {
  handleSubscriptionDeleted,
  handleSubscriptionCreated,
  handleSubscriptionUpdated,
} from "./subscriptionHandler.js";

*/


dotenv.config();




//const app = express();
const checkoutRouter = Router();

const stripe = new Stripe(process.env.STRIPE_PRIVATE_KEY);

//const database = getDatabase();

const database =  admin.database();

const quantity = 1;


// https://firebase.google.com/docs/admin/setup#windows


checkoutRouter.post("/create-checkout-session", async (req, res) => {
    try {

      const prices = await stripe.prices.list({
        lookup_keys: [req.body.lookup_key],
        expand: ['data.product'],
      });

      console.log(prices)

      const { email } = req.body;
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            //price: process.env.STRIPE_PRICE_ID,
            price: prices.data[0].id,
            quantity: quantity,
          },
        ],
        mode: "subscription",
        customer_email: email,
        success_url: `${process.env.CLIENT_URL}/success.html`, 
        cancel_url: `${process.env.CLIENT_URL}/checkout.html`,
      });
  
      //const sessionId = session.id;

      //Get the reference to Firebase DB
      const subscriptionRef = database.ref('subscription');
      
    

      //Replace the dots with commas to use it as a key in Firebase
      const emailWithoutDots = email.replace(/\./g, ',');

      // Check if the email is already in DB

      subscriptionRef.child(emailWithoutDots).once("value", (snapshot) => {
        if (snapshot.exists()) {
          //const data = snapshot.val();
          console.log("User Email already in DB");
        } else {
          console.log("Email not in DB");
          subscriptionRef.child(`${emailWithoutDots}`).set({
            userEmail: `${email}`
          });

        }
      }).catch((error) => {
        console.error("Error checking email):", error);
      });
      
      res.redirect(303, session.url);

    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  });
  

  export default checkoutRouter;
