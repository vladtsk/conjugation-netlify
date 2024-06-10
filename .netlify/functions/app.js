// https://docs.netlify.com/frameworks/express/
// https://firebase.google.com/docs/database/admin/start#node.js

import express, { Router } from "express";
import serverless from "serverless-http";
import checkoutRouter from "./stripeCheckOutRouter.js";
import portalSessionRouter from "./stripePortalSessionRouter.js";
import webhookRouter from "./stripeWebhookRouter.js";
import cors from "cors";
import bodyParser from 'body-parser';

const app = express();

/*const router = Router();
router.get("/hello", (req, res) => res.send("Hello World!"));
app.use("/api/", router)
*/

app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/", checkoutRouter);
app.use("/api/", portalSessionRouter);
app.use("/api/", webhookRouter);

app.use(
    cors()
    );
    

export const handler = serverless(app);

