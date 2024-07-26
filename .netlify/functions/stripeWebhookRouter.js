import dotenv from 'dotenv';
import express, { Router } from "express";

import Stripe from "stripe";

import admin from 'firebase-admin';

dotenv.config();

const webhookRouter = Router();

const database =  admin.database();

const stripe = new Stripe(process.env.STRIPE_PRIVATE_KEY);

webhookRouter.post(
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
          process.env.STRIPE_WEBHOOK_SECRET
        );
      } catch (err) {
        console.log(`⚠️  Webhook signature verification failed.`, err.message);
        return response.sendStatus(400);
      }
  
      let subscription;
      let status;
      let subscriptionId;
      let stripeCustomerId;
      let subType;
  
      // Handle the event
      switch (event.type) {

        case "checkout.session.completed":
          const session = event.data.object;
    
          // Get customer ID
          stripeCustomerId = session.customer;
          //stripeCustomerId = subscription.customer;

          // Retrieve customer information
          try {
            const customer = await stripe.customers.retrieve(stripeCustomerId);
            const email = customer.email;

            console.log("checkout session completed");
          
            console.log(`Customer ID: ${stripeCustomerId}`);
            console.log(`Customer Email: ${email}`);

            // Store customer information in Firebase
            const emailWithoutDots = email.replace(/\./g, ',');

            const subscriptionRef = database.ref('subscription');
            subscriptionRef.child(`${emailWithoutDots}`).update({
              customerId: `${stripeCustomerId}`,
            });

          } catch (error) {
            console.error("Error retrieving customer from 'checkout session complete': ", error)
          }
            break;

        case "customer.subscription.created":
          subscription = event.data.object;
          status = subscription.status;
          const creationDate = subscription.created;
          subscriptionId = subscription.id;
          subType = subscription.items.data[0].plan.interval;

          // Get customer ID
          stripeCustomerId = subscription.customer;
          // Retrieve customer information
          try {
            const customer = await stripe.customers.retrieve(stripeCustomerId);
            const email = customer.email;

            console.log("customer subscription created");
            console.log(`subscription id:  ${subscriptionId}`);
            console.log(`status:  ${status}`);
            console.log(`Customer ID: ${stripeCustomerId}`);
            console.log(`Customer Email: ${email}`);
            console.log(`Subscription Created: ${creationDate}`);
            console.log(`Subscription type: ${subType}`)

            // Store customer information in Firebase
            const emailWithoutDots = email.replace(/\./g, ',');

            const subscriptionRef = database.ref('subscription');
            subscriptionRef.child(`${emailWithoutDots}`).update({
              customerId: `${stripeCustomerId}`,
              status: `${status}`,
              subId: `${subscriptionId}`,
              type: `${subType}`,
              subDateCreated: `${creationDate}`
            });

          } catch (error) {
            console.error("Error retrieving customer from 'customer subscription created': ", error)
          }

          
          // Then define and call a method to handle the subscription created.
          // handleSubscriptionCreated(subscription);
  
          //updateStripeStatus(userId, status);
          break;

        case "customer.subscription.deleted":
          subscription = event.data.object;
          status = subscription.status;
          stripeCustomerId = subscription.customer;
          
          
          try {
            const customer = await stripe.customers.retrieve(stripeCustomerId);
            const email = customer.email;

            // Store customer information in Firebase
            const emailWithoutDots = email.replace(/\./g, ',');

            const subscriptionRef = database.ref('subscription');
            subscriptionRef.child(`${emailWithoutDots}`).update({
              status: `${status}`,
            });

          } catch (error) {
            console.error("Error deleting subscription", error)
          }
  
          break;
        
        case "customer.subscription.updated":
          subscription = event.data.object;
          status = subscription.status;
          stripeCustomerId = subscription.customer;
          subType = subscription.items.data[0].plan.interval;
          
          try {
            const customer = await stripe.customers.retrieve(stripeCustomerId);
            const email = customer.email;

            console.log("customer subscription updated");
            console.log(`subscription id:  ${subscriptionId}`);
            console.log(`status:  ${status}`);
            console.log(`Customer ID: ${stripeCustomerId}`);
            console.log(`Customer Email: ${email}`);

            // Store customer information in Firebase
            const emailWithoutDots = email.replace(/\./g, ',');

            const subscriptionRef = database.ref('subscription');
            subscriptionRef.child(`${emailWithoutDots}`).update({
              status: `${status}`,
              customerId: `${stripeCustomerId}`,
              subId: `${subscriptionId}`,
              type: `${subType}`,
            });

          } catch (error) {
            console.error("Error updating subscription", error)
          }


         
          // Then define and call a method to handle the subscription update.
          // handleSubscriptionUpdated(subscription);
  
          //updateStripeStatus(userId, status);
  
          break;
        
        default:
          // Unexpected event type
          console.log(`Unhandled event type ${event.type}.`);
      }
      // Return a 200 response to acknowledge receipt of the event
      response.send();
    }
  );

  export default webhookRouter;