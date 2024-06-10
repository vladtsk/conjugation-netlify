// https://docs.stripe.com/billing/quickstart
//https://firebase.google.com/docs/database/admin/retrieve-data#node.js

import dotenv from 'dotenv';
import express, { Router } from "express";

import Stripe from "stripe";

//import { set, ref, onAuthStateChanged, getAuth, getDatabase, fetchFirebaseConfig, onValue } from "../../src/firebaseConfig.js"


//import { set, ref } from "../../src/firebaseConfig.js";

//import { getDatabase } from 'firebase-admin/database';
import admin from "./admin-init.js";

import {
  handleSubscriptionDeleted,
  handleSubscriptionCreated,
  handleSubscriptionUpdated,
} from "./subscriptionHandler.js";

/*
import {
  getUser,
  getStripeCustomerId
} from "../../src/readDbData.js"

import { addStripeCustomerIdToDb, updateStripeStatus } from "../../src/addDataDb.js"; 
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
      const { email } = req.body;
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            price: process.env.STRIPE_PRICE_ID,
            quantity: quantity,
          },
        ],
        mode: "subscription",
        customer_email: email,
        success_url: `${process.env.CLIENT_URL}/success.html`, 
        cancel_url: `${process.env.CLIENT_URL}/cancel.html`,
        //customer_creation: 'always',
      });
  
      //const userId = await getUser();
      console.log(email);
      const sessionId = session.id;
      console.log("session id: ", sessionId);

      //Get the reference to Firebase DB
      const subscriptionRef = database.ref('subscription');
      /*subscriptionRef.set({
        email: {
          date_of_birth: 'June 23, 1912',
          full_name: 'Alan Turing'
        }
    });*/

      // Saving the session ID in the DB
      /*const customerId = session.customer;
      console.log("customer ID: ", customerId);*/

      //Replace the dots with commas to use it as a key in Firebase
      const emailWithoutDots = email.replace(/\./g, ',');

      subscriptionRef.child(`${emailWithoutDots}`).set({
        userEmail: `${email}`
      });
  
      
  
      //addStripeCustomerIdToDb(userId, customerId);
  
      //res.json({ url: session.url });
      res.redirect(303, session.url);

    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  });
  
  
  /*
  async function getSubscriptionData() {

      const app = await fetchFirebaseConfig();
      auth = getAuth(app);
      database = getDatabase(app);

    try {
      userId = await getUser();
      if (userId) {
        // Reference to the 'subscription' node
        const subsRef = ref(database, "users/" + userId + "/subscription");
  
        const subsData = await readSubsDataFromDb(subsRef);
      } else {
        console.log("User is signed out");
      }
  
      return { subsData, userId };
    } catch (error) {
      console.error(error.message);
    }
  }

  async function getUser() {
    const app = await fetchFirebaseConfig();
    auth = getAuth(app);

    console.log(auth);

    return new Promise((resolve) => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          //userId = auth.currentUser.uid;
          resolve(auth.currentUser.uid);
        } else {
          resolve(null);
        }
      });
    });
  }
  
  async function getStripeCustomerId(userId) {

    const app = await fetchFirebaseConfig();
    database = getDatabase(app);

    try {
      // Reference to the 'Stripe customer ID' node
      const stripeCustomerIdRef = ref(
        database,
        "users/" + userId + "/subscription/stripeCustomerId"
      );
  
      const stripeCustomerId = await readSubsDataFromDb(stripeCustomerIdRef);
  
      return stripeCustomerId;
    } catch (error) {
      console.error(error.message);
    }
  }

  function readSubsDataFromDb(ref) {
    return new Promise((resolve) => {
      onValue(
        ref,
        (snapshot) => {
          const dbSubsData = snapshot.val();
  
          if (dbSubsData) {
            resolve(dbSubsData);
          } else {
            resolve([]);
          }
        },
        {
          onlyOnce: true,
        }
      );
    });
  }*/

  export default checkoutRouter;
