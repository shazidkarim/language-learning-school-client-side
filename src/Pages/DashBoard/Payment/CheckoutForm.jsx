import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";

const CheckoutForm = ({price,cart}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [axiosSecure] = useAxiosSecure();
    const {user} = useContext(AuthContext);
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const [processing, setProcessing] = useState(false);
    const [transactionId,setTransactionId] = useState('');

    useEffect(()=>{
        axiosSecure.post('/create-payment-intent',{price})
        .then(res =>{
            console.log(res.data.clientSecret);
            setClientSecret(res.data.clientSecret);
        })
    },[])



    
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            console.log('[error]', error);
            setCardError(error.message)
        } else {
            setCardError('');
            console.log('[PaymentMethod]', paymentMethod);
        }
        setProcessing(true);
        const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  email: user?.email || 'anonymous',
                    name: user?.displayName
                },
              },
            },
          );
          if(confirmError){
            console.log(confirmError);
          }
          console.log('payment intent',paymentIntent);
          setProcessing(false);
          if(paymentIntent.status === 'succeeded'){
            setTransactionId(paymentIntent.id);
            const payment = {
                email: user?.email,
                transactionId:paymentIntent.id,
                price,
                quantity: cart.length,
                status:'service panding',
                class: cart.map(className=> className._id) ,
                className: cart.map(className=> className.className)
            }
            axiosSecure.post('/payments', payment)
            .then(res=>{
                console.log(res.data);
                if(res.data.insertedId){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'payment Successfull',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
          }
    }

    return (
        <>
            <form className="py-10 text-center" onSubmit={handleSubmit} style={{ width: "600px" }}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#dc3545',
                            },
                        },
                    }}
                />
                <button className="btn btn-secondary my-10" type="submit" disabled={processing} >Pay</button>
            </form>
            {cardError && <p className="text-red-500">{cardError}</p> }
            {transactionId && <p className="text-green-500">transaction complete. your transactionId is: {transactionId}</p> }
        </>
    );
};

export default CheckoutForm;