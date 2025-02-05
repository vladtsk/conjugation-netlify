
import {createRequire as ___nfyCreateRequire} from "module";
import {fileURLToPath as ___nfyFileURLToPath} from "url";
import {dirname as ___nfyPathDirname} from "path";
let __filename=___nfyFileURLToPath(import.meta.url);
let __dirname=___nfyPathDirname(___nfyFileURLToPath(import.meta.url));
let require=___nfyCreateRequire(import.meta.url);


// .netlify/functions/stripeCheckOutRouter.js
import dotenv from "dotenv";
import express, { Router } from "express";
import Stripe from "stripe";

// .netlify/functions/admin-init.js
import admin from "firebase-admin";
admin.initializeApp({
  credential: admin.credential.cert({
    type: process.env.FIREBASE_TYPE,
    project_id: process.env.FIREBASE_PROJECT_ID,
    private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
    private_key: process.env.FIREBASE_PRIVATE_KEY.replace(
      /\\n/g,
      "\n"
    ),
    client_email: process.env.FIREBASE_CLIENT_EMAIL,
    client_id: process.env.FIREBASE_CLIENT_ID,
    auth_uri: process.env.FIREBASE_AUTH_URI,
    token_uri: process.env.FIREBASE_TOKEN_URI,
    auth_provider_x509_cert_url: process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
    client_x509_cert_url: process.env.FIREBASE_CLIENT_X509_CERT_URL,
    universe_domain: process.env.FIREBASE_UNIVERSE_DOMAIN
  }),
  databaseURL: process.env.FIREBASE_DATABASE_URL
});
var admin_init_default = admin;

// .netlify/functions/stripeCheckOutRouter.js
dotenv.config();
var checkoutRouter = Router();
var stripe = new Stripe(process.env.STRIPE_PRIVATE_KEY);
var database = admin_init_default.database();
var quantity = 1;
checkoutRouter.post("/create-checkout-session", async (req, res) => {
  try {
    const prices = await stripe.prices.list({
      lookup_keys: [req.body.lookup_key],
      expand: ["data.product"]
    });
    const { email } = req.body;
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          //price: process.env.STRIPE_PRICE_ID,
          price: prices.data[0].id,
          quantity
        }
      ],
      mode: "subscription",
      customer_email: email,
      success_url: `${process.env.CLIENT_URL}/success.html`,
      cancel_url: `${process.env.CLIENT_URL}/checkout.html`
    });
    console.log(email, "email check");
    const subscriptionRef = database.ref("subscription");
    const emailWithoutDots = email.replace(/\./g, ",");
    await subscriptionRef.child(`${emailWithoutDots}`).update({
      userEmail: `${email}`
    });
    console.log(email, "email updated");
    res.redirect(303, session.url);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});
var stripeCheckOutRouter_default = checkoutRouter;
export {
  stripeCheckOutRouter_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLm5ldGxpZnkvZnVuY3Rpb25zL3N0cmlwZUNoZWNrT3V0Um91dGVyLmpzIiwgIi5uZXRsaWZ5L2Z1bmN0aW9ucy9hZG1pbi1pbml0LmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvLyBodHRwczovL2RvY3Muc3RyaXBlLmNvbS9iaWxsaW5nL3F1aWNrc3RhcnRcclxuLy9odHRwczovL2ZpcmViYXNlLmdvb2dsZS5jb20vZG9jcy9kYXRhYmFzZS9hZG1pbi9yZXRyaWV2ZS1kYXRhI25vZGUuanNcclxuXHJcbmltcG9ydCBkb3RlbnYgZnJvbSAnZG90ZW52JztcclxuaW1wb3J0IGV4cHJlc3MsIHsgUm91dGVyIH0gZnJvbSBcImV4cHJlc3NcIjtcclxuXHJcbmltcG9ydCBTdHJpcGUgZnJvbSBcInN0cmlwZVwiO1xyXG5cclxuXHJcbmltcG9ydCBhZG1pbiBmcm9tIFwiLi9hZG1pbi1pbml0LmpzXCI7XHJcblxyXG4vKmltcG9ydCB7XHJcbiAgaGFuZGxlU3Vic2NyaXB0aW9uRGVsZXRlZCxcclxuICBoYW5kbGVTdWJzY3JpcHRpb25DcmVhdGVkLFxyXG4gIGhhbmRsZVN1YnNjcmlwdGlvblVwZGF0ZWQsXHJcbn0gZnJvbSBcIi4vc3Vic2NyaXB0aW9uSGFuZGxlci5qc1wiO1xyXG5cclxuKi9cclxuXHJcblxyXG5kb3RlbnYuY29uZmlnKCk7XHJcblxyXG5cclxuXHJcblxyXG4vL2NvbnN0IGFwcCA9IGV4cHJlc3MoKTtcclxuY29uc3QgY2hlY2tvdXRSb3V0ZXIgPSBSb3V0ZXIoKTtcclxuXHJcbmNvbnN0IHN0cmlwZSA9IG5ldyBTdHJpcGUocHJvY2Vzcy5lbnYuU1RSSVBFX1BSSVZBVEVfS0VZKTtcclxuXHJcbi8vY29uc3QgZGF0YWJhc2UgPSBnZXREYXRhYmFzZSgpO1xyXG5cclxuY29uc3QgZGF0YWJhc2UgPSAgYWRtaW4uZGF0YWJhc2UoKTtcclxuXHJcbmNvbnN0IHF1YW50aXR5ID0gMTtcclxuXHJcblxyXG4vLyBodHRwczovL2ZpcmViYXNlLmdvb2dsZS5jb20vZG9jcy9hZG1pbi9zZXR1cCN3aW5kb3dzXHJcblxyXG5cclxuY2hlY2tvdXRSb3V0ZXIucG9zdChcIi9jcmVhdGUtY2hlY2tvdXQtc2Vzc2lvblwiLCBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgIHRyeSB7XHJcblxyXG4gICAgICBjb25zdCBwcmljZXMgPSBhd2FpdCBzdHJpcGUucHJpY2VzLmxpc3Qoe1xyXG4gICAgICAgIGxvb2t1cF9rZXlzOiBbcmVxLmJvZHkubG9va3VwX2tleV0sXHJcbiAgICAgICAgZXhwYW5kOiBbJ2RhdGEucHJvZHVjdCddLFxyXG4gICAgICB9KTtcclxuXHJcblxyXG4gICAgICBjb25zdCB7IGVtYWlsIH0gPSByZXEuYm9keTtcclxuICAgICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IHN0cmlwZS5jaGVja291dC5zZXNzaW9ucy5jcmVhdGUoe1xyXG4gICAgICAgIGxpbmVfaXRlbXM6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgLy9wcmljZTogcHJvY2Vzcy5lbnYuU1RSSVBFX1BSSUNFX0lELFxyXG4gICAgICAgICAgICBwcmljZTogcHJpY2VzLmRhdGFbMF0uaWQsXHJcbiAgICAgICAgICAgIHF1YW50aXR5OiBxdWFudGl0eSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBtb2RlOiBcInN1YnNjcmlwdGlvblwiLFxyXG4gICAgICAgIGN1c3RvbWVyX2VtYWlsOiBlbWFpbCxcclxuICAgICAgICBzdWNjZXNzX3VybDogYCR7cHJvY2Vzcy5lbnYuQ0xJRU5UX1VSTH0vc3VjY2Vzcy5odG1sYCwgXHJcbiAgICAgICAgY2FuY2VsX3VybDogYCR7cHJvY2Vzcy5lbnYuQ0xJRU5UX1VSTH0vY2hlY2tvdXQuaHRtbGAsXHJcbiAgICAgIH0pO1xyXG4gIFxyXG4gICAgICBjb25zb2xlLmxvZyhlbWFpbCwgXCJlbWFpbCBjaGVja1wiKTtcclxuXHJcbiAgICAgIC8vR2V0IHRoZSByZWZlcmVuY2UgdG8gRmlyZWJhc2UgREJcclxuICAgICAgY29uc3Qgc3Vic2NyaXB0aW9uUmVmID0gZGF0YWJhc2UucmVmKCdzdWJzY3JpcHRpb24nKTtcclxuICAgICAgXHJcbiAgICBcclxuXHJcbiAgICAgIC8vUmVwbGFjZSB0aGUgZG90cyB3aXRoIGNvbW1hcyB0byB1c2UgaXQgYXMgYSBrZXkgaW4gRmlyZWJhc2VcclxuICAgICAgY29uc3QgZW1haWxXaXRob3V0RG90cyA9IGVtYWlsLnJlcGxhY2UoL1xcLi9nLCAnLCcpO1xyXG5cclxuXHJcblxyXG4gICAgICBhd2FpdCBzdWJzY3JpcHRpb25SZWYuY2hpbGQoYCR7ZW1haWxXaXRob3V0RG90c31gKS51cGRhdGUoe1xyXG4gICAgICAgIHVzZXJFbWFpbDogYCR7ZW1haWx9YFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc29sZS5sb2coZW1haWwsIFwiZW1haWwgdXBkYXRlZFwiKTtcclxuICAgICAgXHJcbi8qXHJcbiAgICAgIHN1YnNjcmlwdGlvblJlZi5jaGlsZChlbWFpbFdpdGhvdXREb3RzKS5vbmNlKFwidmFsdWVcIiwgKHNuYXBzaG90KSA9PiB7XHJcbiAgICAgICAgaWYgKHNuYXBzaG90LmV4aXN0cygpKSB7XHJcbiAgICAgICAgICAvL2NvbnN0IGRhdGEgPSBzbmFwc2hvdC52YWwoKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiVXNlciBFbWFpbCBhbHJlYWR5IGluIERCXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkVtYWlsIG5vdCBpbiBEQlwiKTtcclxuICAgICAgICAgIHN1YnNjcmlwdGlvblJlZi5jaGlsZChgJHtlbWFpbFdpdGhvdXREb3RzfWApLnNldCh7XHJcbiAgICAgICAgICAgIHVzZXJFbWFpbDogYCR7ZW1haWx9YFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlbWFpbCwgXCJlbWFpbCBzZXRcIilcclxuICAgICAgICB9XHJcbiAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjaGVja2luZyBlbWFpbCk6XCIsIGVycm9yKTtcclxuICAgICAgfSk7Ki9cclxuICAgICAgXHJcbiAgICAgIHJlcy5yZWRpcmVjdCgzMDMsIHNlc3Npb24udXJsKTtcclxuXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6IGUubWVzc2FnZSB9KTtcclxuICAgIH1cclxuICB9KTtcclxuICBcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2hlY2tvdXRSb3V0ZXI7XHJcbiIsICJpbXBvcnQgYWRtaW4gZnJvbSAnZmlyZWJhc2UtYWRtaW4nO1xyXG5cclxuYWRtaW4uaW5pdGlhbGl6ZUFwcCh7XHJcbiAgICBjcmVkZW50aWFsOiBhZG1pbi5jcmVkZW50aWFsLmNlcnQoe1xyXG4gICAgICB0eXBlOiBwcm9jZXNzLmVudi5GSVJFQkFTRV9UWVBFLFxyXG4gICAgICBwcm9qZWN0X2lkOiBwcm9jZXNzLmVudi5GSVJFQkFTRV9QUk9KRUNUX0lELFxyXG4gICAgICBwcml2YXRlX2tleV9pZDogcHJvY2Vzcy5lbnYuRklSRUJBU0VfUFJJVkFURV9LRVlfSUQsXHJcbiAgICAgIHByaXZhdGVfa2V5OiBwcm9jZXNzLmVudi5GSVJFQkFTRV9QUklWQVRFX0tFWS5yZXBsYWNlKFxyXG4gICAgICAgIC9cXFxcbi9nLFxyXG4gICAgICAgJ1xcbicsXHJcbiAgICAgICksXHJcbiAgICAgIGNsaWVudF9lbWFpbDogcHJvY2Vzcy5lbnYuRklSRUJBU0VfQ0xJRU5UX0VNQUlMLFxyXG4gICAgICBjbGllbnRfaWQ6IHByb2Nlc3MuZW52LkZJUkVCQVNFX0NMSUVOVF9JRCxcclxuICAgICAgYXV0aF91cmk6IHByb2Nlc3MuZW52LkZJUkVCQVNFX0FVVEhfVVJJLFxyXG4gICAgICB0b2tlbl91cmk6IHByb2Nlc3MuZW52LkZJUkVCQVNFX1RPS0VOX1VSSSxcclxuICAgICAgYXV0aF9wcm92aWRlcl94NTA5X2NlcnRfdXJsOiBwcm9jZXNzLmVudi5GSVJFQkFTRV9BVVRIX1BST1ZJREVSX1g1MDlfQ0VSVF9VUkwsXHJcbiAgICAgIGNsaWVudF94NTA5X2NlcnRfdXJsOiBwcm9jZXNzLmVudi5GSVJFQkFTRV9DTElFTlRfWDUwOV9DRVJUX1VSTCxcclxuICAgICAgdW5pdmVyc2VfZG9tYWluOiBwcm9jZXNzLmVudi5GSVJFQkFTRV9VTklWRVJTRV9ET01BSU4sXHJcbiAgICB9KSxcclxuICAgIGRhdGFiYXNlVVJMOiBwcm9jZXNzLmVudi5GSVJFQkFTRV9EQVRBQkFTRV9VUkwsXHJcbiAgfSk7XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IGFkbWluO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7O0FBR0EsT0FBTyxZQUFZO0FBQ25CLE9BQU8sV0FBVyxjQUFjO0FBRWhDLE9BQU8sWUFBWTs7O0FDTm5CLE9BQU8sV0FBVztBQUVsQixNQUFNLGNBQWM7QUFBQSxFQUNoQixZQUFZLE1BQU0sV0FBVyxLQUFLO0FBQUEsSUFDaEMsTUFBTSxRQUFRLElBQUk7QUFBQSxJQUNsQixZQUFZLFFBQVEsSUFBSTtBQUFBLElBQ3hCLGdCQUFnQixRQUFRLElBQUk7QUFBQSxJQUM1QixhQUFhLFFBQVEsSUFBSSxxQkFBcUI7QUFBQSxNQUM1QztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDQSxjQUFjLFFBQVEsSUFBSTtBQUFBLElBQzFCLFdBQVcsUUFBUSxJQUFJO0FBQUEsSUFDdkIsVUFBVSxRQUFRLElBQUk7QUFBQSxJQUN0QixXQUFXLFFBQVEsSUFBSTtBQUFBLElBQ3ZCLDZCQUE2QixRQUFRLElBQUk7QUFBQSxJQUN6QyxzQkFBc0IsUUFBUSxJQUFJO0FBQUEsSUFDbEMsaUJBQWlCLFFBQVEsSUFBSTtBQUFBLEVBQy9CLENBQUM7QUFBQSxFQUNELGFBQWEsUUFBUSxJQUFJO0FBQzNCLENBQUM7QUFFRCxJQUFPLHFCQUFROzs7QURGakIsT0FBTyxPQUFPO0FBTWQsSUFBTSxpQkFBaUIsT0FBTztBQUU5QixJQUFNLFNBQVMsSUFBSSxPQUFPLFFBQVEsSUFBSSxrQkFBa0I7QUFJeEQsSUFBTSxXQUFZLG1CQUFNLFNBQVM7QUFFakMsSUFBTSxXQUFXO0FBTWpCLGVBQWUsS0FBSyw0QkFBNEIsT0FBTyxLQUFLLFFBQVE7QUFDaEUsTUFBSTtBQUVGLFVBQU0sU0FBUyxNQUFNLE9BQU8sT0FBTyxLQUFLO0FBQUEsTUFDdEMsYUFBYSxDQUFDLElBQUksS0FBSyxVQUFVO0FBQUEsTUFDakMsUUFBUSxDQUFDLGNBQWM7QUFBQSxJQUN6QixDQUFDO0FBR0QsVUFBTSxFQUFFLE1BQU0sSUFBSSxJQUFJO0FBQ3RCLFVBQU0sVUFBVSxNQUFNLE9BQU8sU0FBUyxTQUFTLE9BQU87QUFBQSxNQUNwRCxZQUFZO0FBQUEsUUFDVjtBQUFBO0FBQUEsVUFFRSxPQUFPLE9BQU8sS0FBSyxDQUFDLEVBQUU7QUFBQSxVQUN0QjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsTUFDQSxNQUFNO0FBQUEsTUFDTixnQkFBZ0I7QUFBQSxNQUNoQixhQUFhLEdBQUcsUUFBUSxJQUFJLFVBQVU7QUFBQSxNQUN0QyxZQUFZLEdBQUcsUUFBUSxJQUFJLFVBQVU7QUFBQSxJQUN2QyxDQUFDO0FBRUQsWUFBUSxJQUFJLE9BQU8sYUFBYTtBQUdoQyxVQUFNLGtCQUFrQixTQUFTLElBQUksY0FBYztBQUtuRCxVQUFNLG1CQUFtQixNQUFNLFFBQVEsT0FBTyxHQUFHO0FBSWpELFVBQU0sZ0JBQWdCLE1BQU0sR0FBRyxnQkFBZ0IsRUFBRSxFQUFFLE9BQU87QUFBQSxNQUN4RCxXQUFXLEdBQUcsS0FBSztBQUFBLElBQ3JCLENBQUM7QUFDRCxZQUFRLElBQUksT0FBTyxlQUFlO0FBa0JsQyxRQUFJLFNBQVMsS0FBSyxRQUFRLEdBQUc7QUFBQSxFQUUvQixTQUFTLEdBQUc7QUFDVixRQUFJLE9BQU8sR0FBRyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDO0FBQUEsRUFDM0M7QUFDRixDQUFDO0FBR0QsSUFBTywrQkFBUTsiLAogICJuYW1lcyI6IFtdCn0K
