// https://docs.stripe.com/billing/subscriptions/build-subscriptions?ui=stripe-hosted

import dotenv from 'dotenv';
import express, { Router } from "express";

import Stripe from "stripe";

//import { set, ref } from "../../src/firebaseConfig.js";
/*
import {
  handleSubscriptionDeleted,
  handleSubscriptionCreated,
  handleSubscriptionUpdated,
} from "./subscriptionHandler.js";

import {
  getUser,
  getStripeCustomerId
} from "../../src/readDbData.js"

import { addStripeCustomerIdToDb, updateStripeStatus } from "../../src/addDataDb.js"; */

dotenv.config();

//const app = express();
const checkoutRouter = Router();

const stripe = new Stripe(process.env.STRIPE_PRIVATE_KEY);

const quantity = 1;

/* Initialize Firebase (https://firebase.google.com/docs/admin/setup)
const { initializeApp } = require('firebase-admin/app');
const app = initializeApp();*/

// https://firebase.google.com/docs/admin/setup#windows


checkoutRouter.post("/create-checkout-session", async (req, res) => {
    try {
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            price: process.env.STRIPE_PRICE_ID,
            quantity: quantity,
          },
        ],
        mode: "subscription",
        success_url: `${process.env.CLIENT_URL}/success.html`,
        cancel_url: `${process.env.CLIENT_URL}/cancel.html`,
      });
  
      /*const userId = await getUser();
      //const sessionId = session.id;
      //console.log("session id: ", sessionId);
  
      const customerId = session.customer;
      console.log("customer ID: ", customerId);
  
      // Saving the customer ID in the DB
      addStripeCustomerIdToDb(userId, customerId);*/
  
      res.json({ url: session.url });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  });
  

  export default checkoutRouter;
