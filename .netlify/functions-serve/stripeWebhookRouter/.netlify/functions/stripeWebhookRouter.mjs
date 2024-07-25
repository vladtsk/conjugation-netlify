
import {createRequire as ___nfyCreateRequire} from "module";
import {fileURLToPath as ___nfyFileURLToPath} from "url";
import {dirname as ___nfyPathDirname} from "path";
let __filename=___nfyFileURLToPath(import.meta.url);
let __dirname=___nfyPathDirname(___nfyFileURLToPath(import.meta.url));
let require=___nfyCreateRequire(import.meta.url);


// .netlify/functions/stripeWebhookRouter.js
import dotenv from "dotenv";
import express, { Router } from "express";
import Stripe from "stripe";
import admin from "firebase-admin";
dotenv.config();
var webhookRouter = Router();
var database = admin.database();
var stripe = new Stripe(process.env.STRIPE_PRIVATE_KEY);
webhookRouter.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  async (request, response) => {
    let event = request.body;
    const signature = request.headers["stripe-signature"];
    try {
      event = stripe.webhooks.constructEvent(
        request.body,
        signature,
        process.env.STRIPE_WEBHOOK_SECRET
      );
    } catch (err) {
      console.log(`\u26A0\uFE0F  Webhook signature verification failed.`, err.message);
      return response.sendStatus(400);
    }
    let subscription;
    let status;
    let subscriptionId;
    let stripeCustomerId;
    switch (event.type) {
      case "checkout.session.completed":
        const session = event.data.object;
        stripeCustomerId = session.customer;
        try {
          const customer = await stripe.customers.retrieve(stripeCustomerId);
          const email = customer.email;
          console.log("checkout session completed");
          console.log(`Customer ID: ${stripeCustomerId}`);
          console.log(`Customer Email: ${email}`);
          const emailWithoutDots = email.replace(/\./g, ",");
          const subscriptionRef = database.ref("subscription");
          subscriptionRef.child(`${emailWithoutDots}`).update({
            customerId: `${stripeCustomerId}`
          });
        } catch (error) {
          console.error("Error retrieving customer from 'checkout session complete': ", error);
        }
        break;
      case "customer.subscription.created":
        subscription = event.data.object;
        status = subscription.status;
        const creationDate = subscription.created;
        subscriptionId = subscription.id;
        const subType = subscription.items.data[0].plan.interval;
        stripeCustomerId = subscription.customer;
        try {
          const customer = await stripe.customers.retrieve(stripeCustomerId);
          const email = customer.email;
          console.log("customer subscription created");
          console.log(`subscription id:  ${subscriptionId}`);
          console.log(`status:  ${status}`);
          console.log(`Customer ID: ${stripeCustomerId}`);
          console.log(`Customer Email: ${email}`);
          console.log(`Subscription Created: ${creationDate}`);
          console.log(`Subscription type: ${subType}`);
          const emailWithoutDots = email.replace(/\./g, ",");
          const subscriptionRef = database.ref("subscription");
          subscriptionRef.child(`${emailWithoutDots}`).update({
            status: `${status}`,
            subId: `${subscriptionId}`,
            type: `${subType}`,
            subDateCreated: `${creationDate}`
          });
        } catch (error) {
          console.error("Error retrieving customer from 'customer subscription created': ", error);
        }
        break;
      case "customer.subscription.deleted":
        subscription = event.data.object;
        status = subscription.status;
        stripeCustomerId = subscription.customer;
        try {
          const customer = await stripe.customers.retrieve(stripeCustomerId);
          const email = customer.email;
          const emailWithoutDots = email.replace(/\./g, ",");
          const subscriptionRef = database.ref("subscription");
          subscriptionRef.child(`${emailWithoutDots}`).update({
            status: `${status}`
          });
        } catch (error) {
          console.error("Error deleting subscription", error);
        }
        break;
      case "customer.subscription.updated":
        subscription = event.data.object;
        status = subscription.status;
        stripeCustomerId = subscription.customer;
        try {
          const customer = await stripe.customers.retrieve(stripeCustomerId);
          const email = customer.email;
          console.log("customer subscription updated");
          console.log(`subscription id:  ${subscriptionId}`);
          console.log(`status:  ${status}`);
          console.log(`Customer ID: ${stripeCustomerId}`);
          console.log(`Customer Email: ${email}`);
          const emailWithoutDots = email.replace(/\./g, ",");
          const subscriptionRef = database.ref("subscription");
          subscriptionRef.child(`${emailWithoutDots}`).update({
            status: `${status}`
          });
        } catch (error) {
          console.error("Error updating subscription", error);
        }
        break;
      default:
        console.log(`Unhandled event type ${event.type}.`);
    }
    response.send();
  }
);
var stripeWebhookRouter_default = webhookRouter;
export {
  stripeWebhookRouter_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLm5ldGxpZnkvZnVuY3Rpb25zL3N0cmlwZVdlYmhvb2tSb3V0ZXIuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCBkb3RlbnYgZnJvbSAnZG90ZW52JztcclxuaW1wb3J0IGV4cHJlc3MsIHsgUm91dGVyIH0gZnJvbSBcImV4cHJlc3NcIjtcclxuXHJcbmltcG9ydCBTdHJpcGUgZnJvbSBcInN0cmlwZVwiO1xyXG5cclxuaW1wb3J0IGFkbWluIGZyb20gJ2ZpcmViYXNlLWFkbWluJztcclxuXHJcbmRvdGVudi5jb25maWcoKTtcclxuXHJcbmNvbnN0IHdlYmhvb2tSb3V0ZXIgPSBSb3V0ZXIoKTtcclxuXHJcbmNvbnN0IGRhdGFiYXNlID0gIGFkbWluLmRhdGFiYXNlKCk7XHJcblxyXG5jb25zdCBzdHJpcGUgPSBuZXcgU3RyaXBlKHByb2Nlc3MuZW52LlNUUklQRV9QUklWQVRFX0tFWSk7XHJcblxyXG53ZWJob29rUm91dGVyLnBvc3QoXHJcbiAgICBcIi93ZWJob29rXCIsXHJcbiAgICBleHByZXNzLnJhdyh7IHR5cGU6IFwiYXBwbGljYXRpb24vanNvblwiIH0pLFxyXG4gICAgYXN5bmMgKHJlcXVlc3QsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIGxldCBldmVudCA9IHJlcXVlc3QuYm9keTtcclxuICBcclxuICAgICAgLy8gR2V0IHRoZSBzaWduYXR1cmUgc2VudCBieSBTdHJpcGVcclxuICAgICAgY29uc3Qgc2lnbmF0dXJlID0gcmVxdWVzdC5oZWFkZXJzW1wic3RyaXBlLXNpZ25hdHVyZVwiXTtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBldmVudCA9IHN0cmlwZS53ZWJob29rcy5jb25zdHJ1Y3RFdmVudChcclxuICAgICAgICAgIHJlcXVlc3QuYm9keSxcclxuICAgICAgICAgIHNpZ25hdHVyZSxcclxuICAgICAgICAgIHByb2Nlc3MuZW52LlNUUklQRV9XRUJIT09LX1NFQ1JFVFxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBcdTI2QTBcdUZFMEYgIFdlYmhvb2sgc2lnbmF0dXJlIHZlcmlmaWNhdGlvbiBmYWlsZWQuYCwgZXJyLm1lc3NhZ2UpO1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5zZW5kU3RhdHVzKDQwMCk7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgbGV0IHN1YnNjcmlwdGlvbjtcclxuICAgICAgbGV0IHN0YXR1cztcclxuICAgICAgbGV0IHN1YnNjcmlwdGlvbklkO1xyXG4gICAgICBsZXQgc3RyaXBlQ3VzdG9tZXJJZDtcclxuICBcclxuICAgICAgLy8gSGFuZGxlIHRoZSBldmVudFxyXG4gICAgICBzd2l0Y2ggKGV2ZW50LnR5cGUpIHtcclxuXHJcbiAgICAgICAgY2FzZSBcImNoZWNrb3V0LnNlc3Npb24uY29tcGxldGVkXCI6XHJcbiAgICAgICAgICBjb25zdCBzZXNzaW9uID0gZXZlbnQuZGF0YS5vYmplY3Q7XHJcbiAgICBcclxuICAgICAgICAgIC8vIEdldCBjdXN0b21lciBJRFxyXG4gICAgICAgICAgc3RyaXBlQ3VzdG9tZXJJZCA9IHNlc3Npb24uY3VzdG9tZXI7XHJcbiAgICAgICAgICAvL3N0cmlwZUN1c3RvbWVySWQgPSBzdWJzY3JpcHRpb24uY3VzdG9tZXI7XHJcblxyXG4gICAgICAgICAgLy8gUmV0cmlldmUgY3VzdG9tZXIgaW5mb3JtYXRpb25cclxuICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1c3RvbWVyID0gYXdhaXQgc3RyaXBlLmN1c3RvbWVycy5yZXRyaWV2ZShzdHJpcGVDdXN0b21lcklkKTtcclxuICAgICAgICAgICAgY29uc3QgZW1haWwgPSBjdXN0b21lci5lbWFpbDtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2hlY2tvdXQgc2Vzc2lvbiBjb21wbGV0ZWRcIik7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYEN1c3RvbWVyIElEOiAke3N0cmlwZUN1c3RvbWVySWR9YCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBDdXN0b21lciBFbWFpbDogJHtlbWFpbH1gKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFN0b3JlIGN1c3RvbWVyIGluZm9ybWF0aW9uIGluIEZpcmViYXNlXHJcbiAgICAgICAgICAgIGNvbnN0IGVtYWlsV2l0aG91dERvdHMgPSBlbWFpbC5yZXBsYWNlKC9cXC4vZywgJywnKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHN1YnNjcmlwdGlvblJlZiA9IGRhdGFiYXNlLnJlZignc3Vic2NyaXB0aW9uJyk7XHJcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvblJlZi5jaGlsZChgJHtlbWFpbFdpdGhvdXREb3RzfWApLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgY3VzdG9tZXJJZDogYCR7c3RyaXBlQ3VzdG9tZXJJZH1gLFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgcmV0cmlldmluZyBjdXN0b21lciBmcm9tICdjaGVja291dCBzZXNzaW9uIGNvbXBsZXRlJzogXCIsIGVycm9yKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSBcImN1c3RvbWVyLnN1YnNjcmlwdGlvbi5jcmVhdGVkXCI6XHJcbiAgICAgICAgICBzdWJzY3JpcHRpb24gPSBldmVudC5kYXRhLm9iamVjdDtcclxuICAgICAgICAgIHN0YXR1cyA9IHN1YnNjcmlwdGlvbi5zdGF0dXM7XHJcbiAgICAgICAgICBjb25zdCBjcmVhdGlvbkRhdGUgPSBzdWJzY3JpcHRpb24uY3JlYXRlZDtcclxuICAgICAgICAgIHN1YnNjcmlwdGlvbklkID0gc3Vic2NyaXB0aW9uLmlkO1xyXG4gICAgICAgICAgY29uc3Qgc3ViVHlwZSA9IHN1YnNjcmlwdGlvbi5pdGVtcy5kYXRhWzBdLnBsYW4uaW50ZXJ2YWw7XHJcblxyXG4gICAgICAgICAgLy8gR2V0IGN1c3RvbWVyIElEXHJcbiAgICAgICAgICBzdHJpcGVDdXN0b21lcklkID0gc3Vic2NyaXB0aW9uLmN1c3RvbWVyO1xyXG4gICAgICAgICAgLy8gUmV0cmlldmUgY3VzdG9tZXIgaW5mb3JtYXRpb25cclxuICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1c3RvbWVyID0gYXdhaXQgc3RyaXBlLmN1c3RvbWVycy5yZXRyaWV2ZShzdHJpcGVDdXN0b21lcklkKTtcclxuICAgICAgICAgICAgY29uc3QgZW1haWwgPSBjdXN0b21lci5lbWFpbDtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY3VzdG9tZXIgc3Vic2NyaXB0aW9uIGNyZWF0ZWRcIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBzdWJzY3JpcHRpb24gaWQ6ICAke3N1YnNjcmlwdGlvbklkfWApO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgc3RhdHVzOiAgJHtzdGF0dXN9YCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBDdXN0b21lciBJRDogJHtzdHJpcGVDdXN0b21lcklkfWApO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgQ3VzdG9tZXIgRW1haWw6ICR7ZW1haWx9YCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBTdWJzY3JpcHRpb24gQ3JlYXRlZDogJHtjcmVhdGlvbkRhdGV9YCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBTdWJzY3JpcHRpb24gdHlwZTogJHtzdWJUeXBlfWApXHJcblxyXG4gICAgICAgICAgICAvLyBTdG9yZSBjdXN0b21lciBpbmZvcm1hdGlvbiBpbiBGaXJlYmFzZVxyXG4gICAgICAgICAgICBjb25zdCBlbWFpbFdpdGhvdXREb3RzID0gZW1haWwucmVwbGFjZSgvXFwuL2csICcsJyk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzdWJzY3JpcHRpb25SZWYgPSBkYXRhYmFzZS5yZWYoJ3N1YnNjcmlwdGlvbicpO1xyXG4gICAgICAgICAgICBzdWJzY3JpcHRpb25SZWYuY2hpbGQoYCR7ZW1haWxXaXRob3V0RG90c31gKS51cGRhdGUoe1xyXG4gICAgICAgICAgICAgIHN0YXR1czogYCR7c3RhdHVzfWAsXHJcbiAgICAgICAgICAgICAgc3ViSWQ6IGAke3N1YnNjcmlwdGlvbklkfWAsXHJcbiAgICAgICAgICAgICAgdHlwZTogYCR7c3ViVHlwZX1gICxcclxuICAgICAgICAgICAgICBzdWJEYXRlQ3JlYXRlZDogYCR7Y3JlYXRpb25EYXRlfWBcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHJldHJpZXZpbmcgY3VzdG9tZXIgZnJvbSAnY3VzdG9tZXIgc3Vic2NyaXB0aW9uIGNyZWF0ZWQnOiBcIiwgZXJyb3IpXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAvLyBUaGVuIGRlZmluZSBhbmQgY2FsbCBhIG1ldGhvZCB0byBoYW5kbGUgdGhlIHN1YnNjcmlwdGlvbiBjcmVhdGVkLlxyXG4gICAgICAgICAgLy8gaGFuZGxlU3Vic2NyaXB0aW9uQ3JlYXRlZChzdWJzY3JpcHRpb24pO1xyXG4gIFxyXG4gICAgICAgICAgLy91cGRhdGVTdHJpcGVTdGF0dXModXNlcklkLCBzdGF0dXMpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgXCJjdXN0b21lci5zdWJzY3JpcHRpb24uZGVsZXRlZFwiOlxyXG4gICAgICAgICAgc3Vic2NyaXB0aW9uID0gZXZlbnQuZGF0YS5vYmplY3Q7XHJcbiAgICAgICAgICBzdGF0dXMgPSBzdWJzY3JpcHRpb24uc3RhdHVzO1xyXG4gICAgICAgICAgc3RyaXBlQ3VzdG9tZXJJZCA9IHN1YnNjcmlwdGlvbi5jdXN0b21lcjtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBjdXN0b21lciA9IGF3YWl0IHN0cmlwZS5jdXN0b21lcnMucmV0cmlldmUoc3RyaXBlQ3VzdG9tZXJJZCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGVtYWlsID0gY3VzdG9tZXIuZW1haWw7XHJcblxyXG4gICAgICAgICAgICAvLyBTdG9yZSBjdXN0b21lciBpbmZvcm1hdGlvbiBpbiBGaXJlYmFzZVxyXG4gICAgICAgICAgICBjb25zdCBlbWFpbFdpdGhvdXREb3RzID0gZW1haWwucmVwbGFjZSgvXFwuL2csICcsJyk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzdWJzY3JpcHRpb25SZWYgPSBkYXRhYmFzZS5yZWYoJ3N1YnNjcmlwdGlvbicpO1xyXG4gICAgICAgICAgICBzdWJzY3JpcHRpb25SZWYuY2hpbGQoYCR7ZW1haWxXaXRob3V0RG90c31gKS51cGRhdGUoe1xyXG4gICAgICAgICAgICAgIHN0YXR1czogYCR7c3RhdHVzfWAsXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBkZWxldGluZyBzdWJzY3JpcHRpb25cIiwgZXJyb3IpXHJcbiAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBcclxuICAgICAgICBjYXNlIFwiY3VzdG9tZXIuc3Vic2NyaXB0aW9uLnVwZGF0ZWRcIjpcclxuICAgICAgICAgIHN1YnNjcmlwdGlvbiA9IGV2ZW50LmRhdGEub2JqZWN0O1xyXG4gICAgICAgICAgc3RhdHVzID0gc3Vic2NyaXB0aW9uLnN0YXR1cztcclxuICAgICAgICAgIHN0cmlwZUN1c3RvbWVySWQgPSBzdWJzY3JpcHRpb24uY3VzdG9tZXI7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1c3RvbWVyID0gYXdhaXQgc3RyaXBlLmN1c3RvbWVycy5yZXRyaWV2ZShzdHJpcGVDdXN0b21lcklkKTtcclxuICAgICAgICAgICAgY29uc3QgZW1haWwgPSBjdXN0b21lci5lbWFpbDtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY3VzdG9tZXIgc3Vic2NyaXB0aW9uIHVwZGF0ZWRcIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBzdWJzY3JpcHRpb24gaWQ6ICAke3N1YnNjcmlwdGlvbklkfWApO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgc3RhdHVzOiAgJHtzdGF0dXN9YCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBDdXN0b21lciBJRDogJHtzdHJpcGVDdXN0b21lcklkfWApO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgQ3VzdG9tZXIgRW1haWw6ICR7ZW1haWx9YCk7XHJcblxyXG4gICAgICAgICAgICAvLyBTdG9yZSBjdXN0b21lciBpbmZvcm1hdGlvbiBpbiBGaXJlYmFzZVxyXG4gICAgICAgICAgICBjb25zdCBlbWFpbFdpdGhvdXREb3RzID0gZW1haWwucmVwbGFjZSgvXFwuL2csICcsJyk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzdWJzY3JpcHRpb25SZWYgPSBkYXRhYmFzZS5yZWYoJ3N1YnNjcmlwdGlvbicpO1xyXG4gICAgICAgICAgICBzdWJzY3JpcHRpb25SZWYuY2hpbGQoYCR7ZW1haWxXaXRob3V0RG90c31gKS51cGRhdGUoe1xyXG4gICAgICAgICAgICAgIHN0YXR1czogYCR7c3RhdHVzfWAsXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciB1cGRhdGluZyBzdWJzY3JpcHRpb25cIiwgZXJyb3IpXHJcbiAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgXHJcbiAgICAgICAgICAvLyBUaGVuIGRlZmluZSBhbmQgY2FsbCBhIG1ldGhvZCB0byBoYW5kbGUgdGhlIHN1YnNjcmlwdGlvbiB1cGRhdGUuXHJcbiAgICAgICAgICAvLyBoYW5kbGVTdWJzY3JpcHRpb25VcGRhdGVkKHN1YnNjcmlwdGlvbik7XHJcbiAgXHJcbiAgICAgICAgICAvL3VwZGF0ZVN0cmlwZVN0YXR1cyh1c2VySWQsIHN0YXR1cyk7XHJcbiAgXHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgLy8gVW5leHBlY3RlZCBldmVudCB0eXBlXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhgVW5oYW5kbGVkIGV2ZW50IHR5cGUgJHtldmVudC50eXBlfS5gKTtcclxuICAgICAgfVxyXG4gICAgICAvLyBSZXR1cm4gYSAyMDAgcmVzcG9uc2UgdG8gYWNrbm93bGVkZ2UgcmVjZWlwdCBvZiB0aGUgZXZlbnRcclxuICAgICAgcmVzcG9uc2Uuc2VuZCgpO1xyXG4gICAgfVxyXG4gICk7XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHdlYmhvb2tSb3V0ZXI7Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7OztBQUFBLE9BQU8sWUFBWTtBQUNuQixPQUFPLFdBQVcsY0FBYztBQUVoQyxPQUFPLFlBQVk7QUFFbkIsT0FBTyxXQUFXO0FBRWxCLE9BQU8sT0FBTztBQUVkLElBQU0sZ0JBQWdCLE9BQU87QUFFN0IsSUFBTSxXQUFZLE1BQU0sU0FBUztBQUVqQyxJQUFNLFNBQVMsSUFBSSxPQUFPLFFBQVEsSUFBSSxrQkFBa0I7QUFFeEQsY0FBYztBQUFBLEVBQ1Y7QUFBQSxFQUNBLFFBQVEsSUFBSSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFBQSxFQUN4QyxPQUFPLFNBQVMsYUFBYTtBQUMzQixRQUFJLFFBQVEsUUFBUTtBQUdwQixVQUFNLFlBQVksUUFBUSxRQUFRLGtCQUFrQjtBQUNwRCxRQUFJO0FBQ0YsY0FBUSxPQUFPLFNBQVM7QUFBQSxRQUN0QixRQUFRO0FB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
