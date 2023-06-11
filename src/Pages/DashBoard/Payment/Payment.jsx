import { Helmet } from "react-helmet-async";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import useCart from "../../../Hooks/useCart";



const stripePromise = loadStripe(import.meta.env.VITE_payment_gateway_pk);
const Payment = () => {
    const [cart] = useCart();
    
    const total = cart.reduce((sum, item) => item.price + sum, 0);
    const price = parseFloat(total.toFixed(2))
    return (
        <div>
             <Helmet>
                <title>language learning | Payment</title>
            </Helmet>
          <Elements stripe={stripePromise}>
          <CheckoutForm cart={cart} price={price}></CheckoutForm>
          </Elements>
        </div>
    );
};

export default Payment;