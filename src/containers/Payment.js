import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";

const Payment = ({ user }) => {
  const elements = useElements();
  const stripe = useStripe();
  const location = useLocation();
  const { title, price, picture } = location.state;
  const [completed, setCompleted] = useState(false);
  const amount = price * 100;

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const cardElement = elements.getElement(CardElement);
      const stripeResponse = await stripe.createToken(cardElement, {
        name: "l'id de l'utilisateur",
      });
      const stripeToken = stripeResponse.token.id;
      const response = await axios.post(
        "https://leboncoin-api.herokuapp.com/payment",
        {
          amount: amount,
          title: title,
          token: stripeToken,
        }
      );

      if (response.data.status === "succeeded") {
        setCompleted(true);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      {completed ? (
        <div className="done-payment">Paiement effectué !</div>
      ) : (
        <div className="content payment">
          <div className="payment-item">
            <div>Acheter en ligne</div>
            <div className="photo-list">
              <img alt={title} src={picture} />
            </div>
            <div>{title}</div>
            <div>{price}&nbsp;€</div>
            <div>Vos coordonnées bancaires</div>
            <form onSubmit={handleSubmit}>
              <CardElement className="card" />
              <button className="payment-button" type="submit">
                Procéder au paiement
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Payment;
