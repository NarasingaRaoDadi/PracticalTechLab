import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Razorpay from "razorpay";
import crypto from "crypto";

import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore, FieldValue } from "firebase-admin/firestore";

dotenv.config();

const serviceAccount = JSON.parse(
  process.env.FIREBASE_SERVICE_ACCOUNT
);

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();

const app = express();

app.use(cors());
app.use(express.json());

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

app.get("/", (req, res) => {
  res.send("Practical Tech Lab Backend Running...");
});

app.post("/create-order", async (req, res) => {
  try {
    const { moduleId, price } = req.body;

    const options = {
      amount: price * 100,
      currency: "INR",
      receipt: `${moduleId}_${Date.now()}`
    };

    const order = await razorpay.orders.create(options);

    res.json(order);

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: "Unable to create Razorpay order"
    });

  }
});

app.post("/verify-payment", async (req, res) => {

  try {

    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      userId,
      moduleId
    } = req.body;

    if (
      !razorpay_order_id ||
      !razorpay_payment_id ||
      !razorpay_signature ||
      !userId
    ) {
      return res.status(400).json({
        success: false,
        message: "Missing payment details"
      });
    }

    const body =
      razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(body.toString())
      .digest("hex");

    if (expectedSignature !== razorpay_signature) {
      return res.status(400).json({
        success: false
      });
    }

    await db.collection("ptl_users")
      .doc(userId)
      .update({
        purchasedModules: FieldValue.arrayUnion(moduleId)
      });

    res.json({
      success: true
    });

  } catch (err) {

    console.error(err);

    res.status(500).json({
      success: false,
      message: "Verification failed"
    });

  }

});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


