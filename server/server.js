import { set, ref } from "../client/src/config.js";

import {
  handleSubscriptionDeleted,
  handleSubscriptionCreated,
  handleSubscriptionUpdated,
} from "./subscriptionHandler.js";

import {
  getUser,
  addStripeCustomerIdToDb,
  getStripeCustomerId,
  updateStripeStatus,
} from "../client/src/readDbData.js";

/*require("dotenv").config();
const express = require("express");
const cors = require("cors");*/

import dotenv from "dotenv";
import express from "express";
import cors from "cors";

dotenv.config();

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5500",
  })
);

//origin: "http://conjug.netlify.app",

//const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_PRIVATE_KEY);

const quantity = 1;

app.post("/create-checkout-session", async (req, res) => {
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

    const userId = await getUser();
    //const sessionId = session.id;
    //console.log("session id: ", sessionId);

    const customerId = session.customer;
    console.log("customer ID: ", customerId);

    // Saving the customer ID in the DB
    addStripeCustomerIdToDb(userId, customerId);

    res.json({ url: session.url });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.post("/create-portal-session", async (req, res) => {
  // For demonstration purposes, we're using the Checkout session to retrieve the customer ID.
  // Typically this is stored alongside the authenticated user in your database.
  //const { session_id } = req.body;
  //const checkoutSession = await stripe.checkout.sessions.retrieve(session_id);
  const userId = await getUser();
  const stripeCustomerId = await getStripeCustomerId(userId);
  console.log("Stripe Customer ID: ", stripeCustomerId);

  // This is the url to which the customer will be redirected when they are done
  // managing their billing with the portal.
  const returnUrl = "https://conjug.netlify.app/";

  const portalSession = await stripe.billingPortal.sessions.create({
    customer: stripeCustomerId,
    return_url: returnUrl,
  });

  res.redirect(303, portalSession.url);
});

app.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  async (request, response) => {
    let event = request.body;

    // Get the signature sent by Stripe
    const signature = request.headers["stripe-signature"];
    try {
      event = stripe.webhooks.constructEvent(
        request.body,
        signature,
        STRIPE_WEBHOOK_SECRET
      );
    } catch (err) {
      console.log(`⚠️  Webhook signature verification failed.`, err.message);
      return response.sendStatus(400);
    }

    let subscription;
    let status;

    const userId = await getUser();
    // Handle the event
    switch (event.type) {
      case "customer.subscription.deleted":
        subscription = event.data.object;
        status = subscription.status;
        console.log(`Subscription status is ${status}.`);
        // Then define and call a method to handle the subscription deleted.
        // handleSubscriptionDeleted(subscriptionDeleted);

        updateStripeStatus(userId, status);

        break;
        npm;
      case "customer.subscription.created":
        subscription = event.data.object;
        status = subscription.status;
        console.log(`Subscription status is ${status}.`);
        // Then define and call a method to handle the subscription created.
        // handleSubscriptionCreated(subscription);

        updateStripeStatus(userId, status);
        break;
      case "customer.subscription.updated":
        subscription = event.data.object;
        status = subscription.status;
        console.log(`Subscription status is ${status}.`);
        // Then define and call a method to handle the subscription update.
        // handleSubscriptionUpdated(subscription);

        updateStripeStatus(userId, status);

        break;
      /*case "customer.subscription.trial_will_end":
        subscription = event.data.object;
        status = subscription.status;
        console.log(`Subscription status is ${status}.`);
        // Then define and call a method to handle the subscription trial ending.
        // handleSubscriptionTrialEnding(subscription);
        break;
        */
      default:
        // Unexpected event type
        console.log(`Unhandled event type ${event.type}.`);
    }
    // Return a 200 response to acknowledge receipt of the event
    response.send();
  }
);

app.listen(3000);
