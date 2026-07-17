import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import "../css/Payment.css";
import axios from "axios";
import { auth } from "../firebase/firebaseConfig";

import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

import { getModule } from "../data/courses";

export default function Payment() {

  const navigate = useNavigate();
  const location = useLocation();

  

const defaultModule = getModule(
  "playwright-typescript",
  "module1"
);

const paymentData = location.state ?? {

  course: defaultModule.course,

  moduleName: defaultModule.moduleName,

  moduleId: defaultModule.id,

  price: defaultModule.price

};

const [loading, setLoading] = useState(false);

  const handlePayment = async () => {

    if (loading) return;

setLoading(true);

  const user = auth.currentUser;
  

  if (!user) {
    setLoading(false);
    navigate("/login", {
      state: {
        from: location.pathname,
        paymentData
      }
    });

    return;

  }

  const docSnap = await getDoc(
  doc(db, "ptl_users", user.uid)
);

const purchased =
  docSnap.data()?.purchasedModules || [];

if (purchased.includes(paymentData.moduleId)) {

  alert("You already own this module.");

  setLoading(false);
  navigate("/dashboard");

  return;

}
  try {
    
 
      const { data: order } = await axios.post(
        `${import.meta.env.VITE_API_URL}/create-order`,
        {
          moduleId: paymentData.moduleId,
          price: paymentData.price
        }
      );

     const options = {
  key: import.meta.env.VITE_RAZORPAY_KEY_ID,
  amount: order.amount,
  currency: order.currency,
  name: "Practical Tech Lab",
  description: `${paymentData.course} - ${paymentData.moduleName}`,
  order_id: order.id,

  handler: async function (response) {

    try {

      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/verify-payment`,
        {
          razorpay_order_id: response.razorpay_order_id,
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_signature: response.razorpay_signature,
          userId: user.uid,
          moduleId: paymentData.moduleId
        }
      );

      if (data.success) {

        alert(`🎉 ${paymentData.moduleName} unlocked successfully!`);

        setLoading(false);

        navigate("/dashboard");

      } else {

        alert("Payment verification failed. Please contact support if payment was deducted.");
        setLoading(false);
      }

    } catch (err) {

      console.error(err);

      alert("Something went wrong while verifying your payment.");
      setLoading(false);

    }

  },

  

  theme: {
    color: "#2962ff"
  },

  retry: {
  enabled: true
},
  
modal: {
  ondismiss: function () {
    console.log("Payment cancelled by user");
    setLoading(false);
  }
},

prefill: {
  name: user.displayName || "",
  email: user.email,
},

//contact: user.phoneNumber || ""

};

const razorpay = new window.Razorpay(options);

razorpay.open();

    } catch (error) {

      console.error(error);

      alert("Unable to start payment. Please try again.");

      setLoading(false);

    }

  };

  return (

    <div className="payment-page">

      <div className="payment-card">

        <h1>Order Summary</h1>

        <hr />

        <div className="payment-row">
          <span>Course</span>
          <span>{paymentData.course}</span>
        </div>

        <div className="payment-row">
          <span>Module</span>
          <span>{paymentData.moduleName}</span>
        </div>

        <div className="payment-row">
          <span>Price</span>
          <span>₹{paymentData.price}</span>
        </div>

        <div className="payment-row">
          <span>Access</span>
          <span>Lifetime</span>
        </div>

        <hr />

        <button
          className="pay-btn"
          disabled={loading}
          onClick={handlePayment}
        >
          {loading ? "Processing..." : "Pay with Razorpay"}
        </button>

        <button
          className="cancel-btn"
          onClick={() => navigate("/dashboard")}
        >
          Cancel
        </button>

      </div>

    </div>

  );

}