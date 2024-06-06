// https://docs.netlify.com/frameworks/express/
// https://firebase.google.com/docs/database/admin/start#node.js

import express, { Router } from "express";
import serverless from "serverless-http";
import checkoutRouter from "./stripeCheckOutRouter.js";
import portalSessionRouter from "./stripePortalSessionRouter.js";
import webhookRouter from "./stripeWebhookRouter.js";
import cors from "cors";

//import { initializeApp } from 'firebase-admin/app';

//import admin from 'firebase-admin';

// Initialize Firebase Admin SDK 

//const firebaseApp = initializeApp();

/*admin.initializeApp({
    credential: admin.credential.cert({
      type: process.env.FIREBASE_TYPE,
      project_id: process.env.FIREBASE_PROJECT_ID,
      private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
      private_key: process.env.FIREBASE_PRIVATE_KEY.replace(
        /\\n/g,
       '\n',
      ),
      client_email: process.env.FIREBASE_CLIENT_EMAIL,
      client_id: process.env.FIREBASE_CLIENT_ID,
      auth_uri: process.env.FIREBASE_AUTH_URI,
      token_uri: process.env.FIREBASE_TOKEN_URI,
      auth_provider_x509_cert_url: process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
      client_x509_cert_url: process.env.FIREBASE_CLIENT_X509_CERT_URL,
      universe_domain: process.env.FIREBASE_UNIVERSE_DOMAIN,
    }),
    databaseURL: process.env.FIREBASE_DATABASE_URL,
  });*/


const app = express();

/*const router = Router();
router.get("/hello", (req, res) => res.send("Hello World!"));
app.use("/api/", router)
*/

app.use("/api/", checkoutRouter);
app.use("/api/", portalSessionRouter);
app.use("/api/", webhookRouter);

app.use(
    cors()
    );
    

export const handler = serverless(app);

