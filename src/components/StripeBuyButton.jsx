import React, { useEffect } from 'react';

export default function StripeBuyButton() {
  useEffect(() => {
    // Stripe buy button should initialize automatically when the script loads
    if (window.Stripe) {
      window.Stripe.registerAppInfo({
        name: 'Arunodth Portfolio',
        version: '1.0.0'
      });
    }
  }, []);

  return (
    <div className="flex justify-center items-center py-8">
      <stripe-buy-button
        buy-button-id="buy_btn_1TA0n8RllJpIFvP5jarEXjtC"
        publishable-key="pk_test_51T9yK5RllJpIFvP5kD6y02xshwarQF0rMDL9RmfYHpRXF8owIQxheu2pohw9WV9OYb3puBVcyCMSmeTGbG4os4B400jE6V1Ihj"
      ></stripe-buy-button>
    </div>
  );
}
