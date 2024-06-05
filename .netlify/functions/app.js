// https://docs.netlify.com/frameworks/express/

import express, { Router } from "express";
import serverless from "serverless-http";
import checkoutRouter from "./stripeCheckOutRouter.js";
import cors from "cors";

const app = express();

/*const router = Router();
router.get("/hello", (req, res) => res.send("Hello World!"));*/

app.use("/api/", checkoutRouter);
app.use(
    cors()
    );

export const handler = serverless(app);

