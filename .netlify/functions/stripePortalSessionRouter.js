import dotenv from "dotenv";
import express, { Router } from "express";

import Stripe from "stripe";

dotenv.config();

const portalSessionRouter = Router();

const stripe = new Stripe(process.env.STRIPE_PRIVATE_KEY);

portalSessionRouter.post("/create-portal-session", async (req, res) => {
  //https://docs.stripe.com/customer-management/integrate-customer-portal
  const { stripeCustomerID } = req.body;

  // This is the url to which the customer will be redirected when they are done managing their billing with the portal.
  const returnUrl = process.env.CLIENT_URL;

  if (stripeCustomerID) {
    try {
      const portalSession = await stripe.billingPortal.sessions.create({
        customer: stripeCustomerID,
        return_url: returnUrl,
      });

      res.redirect(303, portalSession.url);
    } catch (error) {
      console.error("Error creating Stripe billing portal session:", error);
      // Redirect to an error page or return an error response
      res.redirect(303, `${returnUrl}/error.html`);
    }
  } else {
    // Redirect to an error page if stripeCustomerID is not provided
    res.redirect(303, `${returnUrl}/error.html`);
  }
});

export default portalSessionRouter;
