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

  return (
    <div>
      {completed ? (
        <div>Paiement effectué !</div>
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
            <form>
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
