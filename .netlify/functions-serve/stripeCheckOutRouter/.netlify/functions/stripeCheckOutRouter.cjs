var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// .netlify/functions/stripeCheckOutRouter.js
var stripeCheckOutRouter_exports = {};
__export(stripeCheckOutRouter_exports, {
  default: () => stripeCheckOutRouter_default
});
module.exports = __toCommonJS(stripeCheckOutRouter_exports);
var import_dotenv = __toESM(require("dotenv"));
var import_express = __toESM(require("express"));
var import_stripe = __toESM(require("stripe"));
import_dotenv.default.config();
var checkoutRouter = (0, import_express.Router)();
var stripe = new import_stripe.default(process.env.STRIPE_PRIVATE_KEY);
var quantity = 1;
checkoutRouter.post("/create-checkout-session", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: process.env.STRIPE_PRICE_ID,
          quantity
        }
      ],
      mode: "subscription",
      success_url: `${process.env.CLIENT_URL}/success.html`,
      cancel_url: `${process.env.CLIENT_URL}/cancel.html`
    });
    res.json({ url: session.url });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});
var stripeCheckOutRouter_default = checkoutRouter;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLm5ldGxpZnkvZnVuY3Rpb25zL3N0cmlwZUNoZWNrT3V0Um91dGVyLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvLyBodHRwczovL2RvY3Muc3RyaXBlLmNvbS9iaWxsaW5nL3N1YnNjcmlwdGlvbnMvYnVpbGQtc3Vic2NyaXB0aW9ucz91aT1zdHJpcGUtaG9zdGVkXHJcblxyXG5pbXBvcnQgZG90ZW52IGZyb20gJ2RvdGVudic7XHJcbmltcG9ydCBleHByZXNzLCB7IFJvdXRlciB9IGZyb20gXCJleHByZXNzXCI7XHJcblxyXG5pbXBvcnQgU3RyaXBlIGZyb20gXCJzdHJpcGVcIjtcclxuXHJcbi8vaW1wb3J0IHsgc2V0LCByZWYgfSBmcm9tIFwiLi4vLi4vc3JjL2ZpcmViYXNlQ29uZmlnLmpzXCI7XHJcbi8qXHJcbmltcG9ydCB7XHJcbiAgaGFuZGxlU3Vic2NyaXB0aW9uRGVsZXRlZCxcclxuICBoYW5kbGVTdWJzY3JpcHRpb25DcmVhdGVkLFxyXG4gIGhhbmRsZVN1YnNjcmlwdGlvblVwZGF0ZWQsXHJcbn0gZnJvbSBcIi4vc3Vic2NyaXB0aW9uSGFuZGxlci5qc1wiO1xyXG5cclxuaW1wb3J0IHtcclxuICBnZXRVc2VyLFxyXG4gIGdldFN0cmlwZUN1c3RvbWVySWRcclxufSBmcm9tIFwiLi4vLi4vc3JjL3JlYWREYkRhdGEuanNcIlxyXG5cclxuaW1wb3J0IHsgYWRkU3RyaXBlQ3VzdG9tZXJJZFRvRGIsIHVwZGF0ZVN0cmlwZVN0YXR1cyB9IGZyb20gXCIuLi8uLi9zcmMvYWRkRGF0YURiLmpzXCI7ICovXHJcblxyXG5kb3RlbnYuY29uZmlnKCk7XHJcblxyXG4vL2NvbnN0IGFwcCA9IGV4cHJlc3MoKTtcclxuY29uc3QgY2hlY2tvdXRSb3V0ZXIgPSBSb3V0ZXIoKTtcclxuXHJcbmNvbnN0IHN0cmlwZSA9IG5ldyBTdHJpcGUocHJvY2Vzcy5lbnYuU1RSSVBFX1BSSVZBVEVfS0VZKTtcclxuXHJcbmNvbnN0IHF1YW50aXR5ID0gMTtcclxuXHJcbi8qIEluaXRpYWxpemUgRmlyZWJhc2UgKGh0dHBzOi8vZmlyZWJhc2UuZ29vZ2xlLmNvbS9kb2NzL2FkbWluL3NldHVwKVxyXG5jb25zdCB7IGluaXRpYWxpemVBcHAgfSA9IHJlcXVpcmUoJ2ZpcmViYXNlLWFkbWluL2FwcCcpO1xyXG5jb25zdCBhcHAgPSBpbml0aWFsaXplQXBwKCk7Ki9cclxuXHJcbi8vIGh0dHBzOi8vZmlyZWJhc2UuZ29vZ2xlLmNvbS9kb2NzL2FkbWluL3NldHVwI3dpbmRvd3NcclxuXHJcblxyXG5jaGVja291dFJvdXRlci5wb3N0KFwiL2NyZWF0ZS1jaGVja291dC1zZXNzaW9uXCIsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IHN0cmlwZS5jaGVja291dC5zZXNzaW9ucy5jcmVhdGUoe1xyXG4gICAgICAgIGxpbmVfaXRlbXM6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgcHJpY2U6IHByb2Nlc3MuZW52LlNUUklQRV9QUklDRV9JRCxcclxuICAgICAgICAgICAgcXVhbnRpdHk6IHF1YW50aXR5LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIG1vZGU6IFwic3Vic2NyaXB0aW9uXCIsXHJcbiAgICAgICAgc3VjY2Vzc191cmw6IGAke3Byb2Nlc3MuZW52LkNMSUVOVF9VUkx9L3N1Y2Nlc3MuaHRtbGAsXHJcbiAgICAgICAgY2FuY2VsX3VybDogYCR7cHJvY2Vzcy5lbnYuQ0xJRU5UX1VSTH0vY2FuY2VsLmh0bWxgLFxyXG4gICAgICB9KTtcclxuICBcclxuICAgICAgLypjb25zdCB1c2VySWQgPSBhd2FpdCBnZXRVc2VyKCk7XHJcbiAgICAgIC8vY29uc3Qgc2Vzc2lvbklkID0gc2Vzc2lvbi5pZDtcclxuICAgICAgLy9jb25zb2xlLmxvZyhcInNlc3Npb24gaWQ6IFwiLCBzZXNzaW9uSWQpO1xyXG4gIFxyXG4gICAgICBjb25zdCBjdXN0b21lcklkID0gc2Vzc2lvbi5jdXN0b21lcjtcclxuICAgICAgY29uc29sZS5sb2coXCJjdXN0b21lciBJRDogXCIsIGN1c3RvbWVySWQpO1xyXG4gIFxyXG4gICAgICAvLyBTYXZpbmcgdGhlIGN1c3RvbWVyIElEIGluIHRoZSBEQlxyXG4gICAgICBhZGRTdHJpcGVDdXN0b21lcklkVG9EYih1c2VySWQsIGN1c3RvbWVySWQpOyovXHJcbiAgXHJcbiAgICAgIHJlcy5qc29uKHsgdXJsOiBzZXNzaW9uLnVybCB9KTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogZS5tZXNzYWdlIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIFxyXG5cclxuICBleHBvcnQgZGVmYXVsdCBjaGVja291dFJvdXRlcjtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUEsb0JBQW1CO0FBQ25CLHFCQUFnQztBQUVoQyxvQkFBbUI7QUFpQm5CLGNBQUFBLFFBQU8sT0FBTztBQUdkLElBQU0scUJBQWlCLHVCQUFPO0FBRTlCLElBQU0sU0FBUyxJQUFJLGNBQUFDLFFBQU8sUUFBUSxJQUFJLGtCQUFrQjtBQUV4RCxJQUFNLFdBQVc7QUFTakIsZUFBZSxLQUFLLDRCQUE0QixPQUFPLEtBQUssUUFBUTtBQUNoRSxNQUFJO0FBQ0YsVUFBTSxVQUFVLE1BQU0sT0FBTyxTQUFTLFNBQVMsT0FBTztBQUFBLE1BQ3BELFlBQVk7QUFBQSxRQUNWO0FBQUEsVUFDRSxPQUFPLFFBQVEsSUFBSTtBQUFBLFVBQ25CO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxNQUNBLE1BQU07QUFBQSxNQUNOLGFBQWEsR0FBRyxRQUFRLElBQUksVUFBVTtBQUFBLE1BQ3RDLFlBQVksR0FBRyxRQUFRLElBQUksVUFBVTtBQUFBLElBQ3ZDLENBQUM7QUFZRCxRQUFJLEtBQUssRUFBRSxLQUFLLFFBQVEsSUFBSSxDQUFDO0FBQUEsRUFDL0IsU0FBUyxHQUFHO0FBQ1YsUUFBSSxPQUFPLEdBQUcsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQztBQUFBLEVBQzNDO0FBQ0YsQ0FBQztBQUdELElBQU8sK0JBQVE7IiwKICAibmFtZXMiOiBbImRvdGVudiIsICJTdHJpcGUiXQp9Cg==
