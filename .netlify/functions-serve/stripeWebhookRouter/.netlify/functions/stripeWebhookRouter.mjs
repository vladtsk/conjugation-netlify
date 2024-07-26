
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
    let subType;
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
        subType = subscription.items.data[0].plan.interval;
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
            customerId: `${stripeCustomerId}`,
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
        subType = subscription.items.data[0].plan.interval;
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
            status: `${status}`,
            customerId: `${stripeCustomerId}`,
            subId: `${subscriptionId}`,
            type: `${subType}`
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLm5ldGxpZnkvZnVuY3Rpb25zL3N0cmlwZVdlYmhvb2tSb3V0ZXIuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCBkb3RlbnYgZnJvbSAnZG90ZW52JztcclxuaW1wb3J0IGV4cHJlc3MsIHsgUm91dGVyIH0gZnJvbSBcImV4cHJlc3NcIjtcclxuXHJcbmltcG9ydCBTdHJpcGUgZnJvbSBcInN0cmlwZVwiO1xyXG5cclxuaW1wb3J0IGFkbWluIGZyb20gJ2ZpcmViYXNlLWFkbWluJztcclxuXHJcbmRvdGVudi5jb25maWcoKTtcclxuXHJcbmNvbnN0IHdlYmhvb2tSb3V0ZXIgPSBSb3V0ZXIoKTtcclxuXHJcbmNvbnN0IGRhdGFiYXNlID0gIGFkbWluLmRhdGFiYXNlKCk7XHJcblxyXG5jb25zdCBzdHJpcGUgPSBuZXcgU3RyaXBlKHByb2Nlc3MuZW52LlNUUklQRV9QUklWQVRFX0tFWSk7XHJcblxyXG53ZWJob29rUm91dGVyLnBvc3QoXHJcbiAgICBcIi93ZWJob29rXCIsXHJcbiAgICBleHByZXNzLnJhdyh7IHR5cGU6IFwiYXBwbGljYXRpb24vanNvblwiIH0pLFxyXG4gICAgYXN5bmMgKHJlcXVlc3QsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIGxldCBldmVudCA9IHJlcXVlc3QuYm9keTtcclxuICBcclxuICAgICAgLy8gR2V0IHRoZSBzaWduYXR1cmUgc2VudCBieSBTdHJpcGVcclxuICAgICAgY29uc3Qgc2lnbmF0dXJlID0gcmVxdWVzdC5oZWFkZXJzW1wic3RyaXBlLXNpZ25hdHVyZVwiXTtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBldmVudCA9IHN0cmlwZS53ZWJob29rcy5jb25zdHJ1Y3RFdmVudChcclxuICAgICAgICAgIHJlcXVlc3QuYm9keSxcclxuICAgICAgICAgIHNpZ25hdHVyZSxcclxuICAgICAgICAgIHByb2Nlc3MuZW52LlNUUklQRV9XRUJIT09LX1NFQ1JFVFxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBcdTI2QTBcdUZFMEYgIFdlYmhvb2sgc2lnbmF0dXJlIHZlcmlmaWNhdGlvbiBmYWlsZWQuYCwgZXJyLm1lc3NhZ2UpO1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5zZW5kU3RhdHVzKDQwMCk7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgbGV0IHN1YnNjcmlwdGlvbjtcclxuICAgICAgbGV0IHN0YXR1cztcclxuICAgICAgbGV0IHN1YnNjcmlwdGlvbklkO1xyXG4gICAgICBsZXQgc3RyaXBlQ3VzdG9tZXJJZDtcclxuICAgICAgbGV0IHN1YlR5cGU7XHJcbiAgXHJcbiAgICAgIC8vIEhhbmRsZSB0aGUgZXZlbnRcclxuICAgICAgc3dpdGNoIChldmVudC50eXBlKSB7XHJcblxyXG4gICAgICAgIGNhc2UgXCJjaGVja291dC5zZXNzaW9uLmNvbXBsZXRlZFwiOlxyXG4gICAgICAgICAgY29uc3Qgc2Vzc2lvbiA9IGV2ZW50LmRhdGEub2JqZWN0O1xyXG4gICAgXHJcbiAgICAgICAgICAvLyBHZXQgY3VzdG9tZXIgSURcclxuICAgICAgICAgIHN0cmlwZUN1c3RvbWVySWQgPSBzZXNzaW9uLmN1c3RvbWVyO1xyXG4gICAgICAgICAgLy9zdHJpcGVDdXN0b21lcklkID0gc3Vic2NyaXB0aW9uLmN1c3RvbWVyO1xyXG5cclxuICAgICAgICAgIC8vIFJldHJpZXZlIGN1c3RvbWVyIGluZm9ybWF0aW9uXHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBjdXN0b21lciA9IGF3YWl0IHN0cmlwZS5jdXN0b21lcnMucmV0cmlldmUoc3RyaXBlQ3VzdG9tZXJJZCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGVtYWlsID0gY3VzdG9tZXIuZW1haWw7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNoZWNrb3V0IHNlc3Npb24gY29tcGxldGVkXCIpO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBDdXN0b21lciBJRDogJHtzdHJpcGVDdXN0b21lcklkfWApO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgQ3VzdG9tZXIgRW1haWw6ICR7ZW1haWx9YCk7XHJcblxyXG4gICAgICAgICAgICAvLyBTdG9yZSBjdXN0b21lciBpbmZvcm1hdGlvbiBpbiBGaXJlYmFzZVxyXG4gICAgICAgICAgICBjb25zdCBlbWFpbFdpdGhvdXREb3RzID0gZW1haWwucmVwbGFjZSgvXFwuL2csICcsJyk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzdWJzY3JpcHRpb25SZWYgPSBkYXRhYmFzZS5yZWYoJ3N1YnNjcmlwdGlvbicpO1xyXG4gICAgICAgICAgICBzdWJzY3JpcHRpb25SZWYuY2hpbGQoYCR7ZW1haWxXaXRob3V0RG90c31gKS51cGRhdGUoe1xyXG4gICAgICAgICAgICAgIGN1c3RvbWVySWQ6IGAke3N0cmlwZUN1c3RvbWVySWR9YCxcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHJldHJpZXZpbmcgY3VzdG9tZXIgZnJvbSAnY2hlY2tvdXQgc2Vzc2lvbiBjb21wbGV0ZSc6IFwiLCBlcnJvcilcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgXCJjdXN0b21lci5zdWJzY3JpcHRpb24uY3JlYXRlZFwiOlxyXG4gICAgICAgICAgc3Vic2NyaXB0aW9uID0gZXZlbnQuZGF0YS5vYmplY3Q7XHJcbiAgICAgICAgICBzdGF0dXMgPSBzdWJzY3JpcHRpb24uc3RhdHVzO1xyXG4gICAgICAgICAgY29uc3QgY3JlYXRpb25EYXRlID0gc3Vic2NyaXB0aW9uLmNyZWF0ZWQ7XHJcbiAgICAgICAgICBzdWJzY3JpcHRpb25JZCA9IHN1YnNjcmlwdGlvbi5pZDtcclxuICAgICAgICAgIHN1YlR5cGUgPSBzdWJzY3JpcHRpb24uaXRlbXMuZGF0YVswXS5wbGFuLmludGVydmFsO1xyXG5cclxuICAgICAgICAgIC8vIEdldCBjdXN0b21lciBJRFxyXG4gICAgICAgICAgc3RyaXBlQ3VzdG9tZXJJZCA9IHN1YnNjcmlwdGlvbi5jdXN0b21lcjtcclxuICAgICAgICAgIC8vIFJldHJpZXZlIGN1c3RvbWVyIGluZm9ybWF0aW9uXHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBjdXN0b21lciA9IGF3YWl0IHN0cmlwZS5jdXN0b21lcnMucmV0cmlldmUoc3RyaXBlQ3VzdG9tZXJJZCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGVtYWlsID0gY3VzdG9tZXIuZW1haWw7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImN1c3RvbWVyIHN1YnNjcmlwdGlvbiBjcmVhdGVkXCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgc3Vic2NyaXB0aW9uIGlkOiAgJHtzdWJzY3JpcHRpb25JZH1gKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYHN0YXR1czogICR7c3RhdHVzfWApO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgQ3VzdG9tZXIgSUQ6ICR7c3RyaXBlQ3VzdG9tZXJJZH1gKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYEN1c3RvbWVyIEVtYWlsOiAke2VtYWlsfWApO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgU3Vic2NyaXB0aW9uIENyZWF0ZWQ6ICR7Y3JlYXRpb25EYXRlfWApO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgU3Vic2NyaXB0aW9uIHR5cGU6ICR7c3ViVHlwZX1gKVxyXG5cclxuICAgICAgICAgICAgLy8gU3RvcmUgY3VzdG9tZXIgaW5mb3JtYXRpb24gaW4gRmlyZWJhc2VcclxuICAgICAgICAgICAgY29uc3QgZW1haWxXaXRob3V0RG90cyA9IGVtYWlsLnJlcGxhY2UoL1xcLi9nLCAnLCcpO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc3Vic2NyaXB0aW9uUmVmID0gZGF0YWJhc2UucmVmKCdzdWJzY3JpcHRpb24nKTtcclxuICAgICAgICAgICAgc3Vic2NyaXB0aW9uUmVmLmNoaWxkKGAke2VtYWlsV2l0aG91dERvdHN9YCkudXBkYXRlKHtcclxuICAgICAgICAgICAgICBjdXN0b21lcklkOiBgJHtzdHJpcGVDdXN0b21lcklkfWAsXHJcbiAgICAgICAgICAgICAgc3RhdHVzOiBgJHtzdGF0dXN9YCxcclxuICAgICAgICAgICAgICBzdWJJZDogYCR7c3Vic2NyaXB0aW9uSWR9YCxcclxuICAgICAgICAgICAgICB0eXBlOiBgJHtzdWJUeXBlfWAsXHJcbiAgICAgICAgICAgICAgc3ViRGF0ZUNyZWF0ZWQ6IGAke2NyZWF0aW9uRGF0ZX1gXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciByZXRyaWV2aW5nIGN1c3RvbWVyIGZyb20gJ2N1c3RvbWVyIHN1YnNjcmlwdGlvbiBjcmVhdGVkJzogXCIsIGVycm9yKVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLy8gVGhlbiBkZWZpbmUgYW5kIGNhbGwgYSBtZXRob2QgdG8gaGFuZGxlIHRoZSBzdWJzY3JpcHRpb24gY3JlYXRlZC5cclxuICAgICAgICAgIC8vIGhhbmRsZVN1YnNjcmlwdGlvbkNyZWF0ZWQoc3Vic2NyaXB0aW9uKTtcclxuICBcclxuICAgICAgICAgIC8vdXBkYXRlU3RyaXBlU3RhdHVzKHVzZXJJZCwgc3RhdHVzKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIFwiY3VzdG9tZXIuc3Vic2NyaXB0aW9uLmRlbGV0ZWRcIjpcclxuICAgICAgICAgIHN1YnNjcmlwdGlvbiA9IGV2ZW50LmRhdGEub2JqZWN0O1xyXG4gICAgICAgICAgc3RhdHVzID0gc3Vic2NyaXB0aW9uLnN0YXR1cztcclxuICAgICAgICAgIHN0cmlwZUN1c3RvbWVySWQgPSBzdWJzY3JpcHRpb24uY3VzdG9tZXI7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgY3VzdG9tZXIgPSBhd2FpdCBzdHJpcGUuY3VzdG9tZXJzLnJldHJpZXZlKHN0cmlwZUN1c3RvbWVySWQpO1xyXG4gICAgICAgICAgICBjb25zdCBlbWFpbCA9IGN1c3RvbWVyLmVtYWlsO1xyXG5cclxuICAgICAgICAgICAgLy8gU3RvcmUgY3VzdG9tZXIgaW5mb3JtYXRpb24gaW4gRmlyZWJhc2VcclxuICAgICAgICAgICAgY29uc3QgZW1haWxXaXRob3V0RG90cyA9IGVtYWlsLnJlcGxhY2UoL1xcLi9nLCAnLCcpO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc3Vic2NyaXB0aW9uUmVmID0gZGF0YWJhc2UucmVmKCdzdWJzY3JpcHRpb24nKTtcclxuICAgICAgICAgICAgc3Vic2NyaXB0aW9uUmVmLmNoaWxkKGAke2VtYWlsV2l0aG91dERvdHN9YCkudXBkYXRlKHtcclxuICAgICAgICAgICAgICBzdGF0dXM6IGAke3N0YXR1c31gLFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZGVsZXRpbmcgc3Vic2NyaXB0aW9uXCIsIGVycm9yKVxyXG4gICAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY2FzZSBcImN1c3RvbWVyLnN1YnNjcmlwdGlvbi51cGRhdGVkXCI6XHJcbiAgICAgICAgICBzdWJzY3JpcHRpb24gPSBldmVudC5kYXRhLm9iamVjdDtcclxuICAgICAgICAgIHN0YXR1cyA9IHN1YnNjcmlwdGlvbi5zdGF0dXM7XHJcbiAgICAgICAgICBzdHJpcGVDdXN0b21lcklkID0gc3Vic2NyaXB0aW9uLmN1c3RvbWVyO1xyXG4gICAgICAgICAgc3ViVHlwZSA9IHN1YnNjcmlwdGlvbi5pdGVtcy5kYXRhWzBdLnBsYW4uaW50ZXJ2YWw7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1c3RvbWVyID0gYXdhaXQgc3RyaXBlLmN1c3RvbWVycy5yZXRyaWV2ZShzdHJpcGVDdXN0b21lcklkKTtcclxuICAgICAgICAgICAgY29uc3QgZW1haWwgPSBjdXN0b21lci5lbWFpbDtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY3VzdG9tZXIgc3Vic2NyaXB0aW9uIHVwZGF0ZWRcIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBzdWJzY3JpcHRpb24gaWQ6ICAke3N1YnNjcmlwdGlvbklkfWApO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgc3RhdHVzOiAgJHtzdGF0dXN9YCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBDdXN0b21lciBJRDogJHtzdHJpcGVDdXN0b21lcklkfWApO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgQ3VzdG9tZXIgRW1haWw6ICR7ZW1haWx9YCk7XHJcblxyXG4gICAgICAgICAgICAvLyBTdG9yZSBjdXN0b21lciBpbmZvcm1hdGlvbiBpbiBGaXJlYmFzZVxyXG4gICAgICAgICAgICBjb25zdCBlbWFpbFdpdGhvdXREb3RzID0gZW1haWwucmVwbGFjZSgvXFwuL2csICcsJyk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzdWJzY3JpcHRpb25SZWYgPSBkYXRhYmFzZS5yZWYoJ3N1YnNjcmlwdGlvbicpO1xyXG4gICAgICAgICAgICBzdWJzY3JpcHRpb25SZWYuY2hpbGQoYCR7ZW1haWxXaXRob3V0RG90c31gKS51cGRhdGUoe1xyXG4gICAgICAgICAgICAgIHN0YXR1czogYCR7c3RhdHVzfWAsXHJcbiAgICAgICAgICAgICAgY3VzdG9tZXJJZDogYCR7c3RyaXBlQ3VzdG9tZXJJZH1gLFxyXG4gICAgICAgICAgICAgIHN1YklkOiBgJHtzdWJzY3JpcHRpb25JZH1gLFxyXG4gICAgICAgICAgICAgIHR5cGU6IGAke3N1YlR5cGV9YCxcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHVwZGF0aW5nIHN1YnNjcmlwdGlvblwiLCBlcnJvcilcclxuICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICBcclxuICAgICAgICAgIC8vIFRoZW4gZGVmaW5lIGFuZCBjYWxsIGEgbWV0aG9kIHRvIGhhbmRsZSB0aGUgc3Vic2NyaXB0aW9uIHVwZGF0ZS5cclxuICAgICAgICAgIC8vIGhhbmRsZVN1YnNjcmlwdGlvblVwZGF0ZWQoc3Vic2NyaXB0aW9uKTtcclxuICBcclxuICAgICAgICAgIC8vdXBkYXRlU3RyaXBlU3RhdHVzKHVzZXJJZCwgc3RhdHVzKTtcclxuICBcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAvLyBVbmV4cGVjdGVkIGV2ZW50IHR5cGVcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGBVbmhhbmRsZWQgZXZlbnQgdHlwZSAke2V2ZW50LnR5cGV9LmApO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIFJldHVybiBhIDIwMCByZXNwb25zZSB0byBhY2tub3dsZWRnZSByZWNlaXB0IG9mIHRoZSBldmVudFxyXG4gICAgICByZXNwb25zZS5zZW5kKCk7XHJcbiAgICB9XHJcbiAgKTtcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgd2ViaG9va1JvdXRlcjsiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7O0FBQUEsT0FBTyxZQUFZO0FBQ25CLE9BQU8sV0FBVyxjQUFjO0FBRWhDLE9BQU8sWUFBWTtBQUVuQixPQUFPLFdBQVc7QUFFbEIsT0FBTyxPQUFPO0FBRWQsSUFBTSxnQkFBZ0Is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
