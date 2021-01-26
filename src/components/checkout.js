import React, { useState } from "react";
import {
  Elements,
  CheckoutForm,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";


const Check = () => {
  const stripe = loadStripe(
    "pk_test_***"
  );
  return (
      <div><Elements stripe={stripe}>
      <CheckoutForm />
    </Elements></div>
    
  );
};

export default Check