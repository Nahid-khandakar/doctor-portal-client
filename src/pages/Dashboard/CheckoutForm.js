import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';


const CheckoutForm = ({ appointment }) => {

    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('')
    const [cardSuccess, setCardSuccess] = useState('')
    const [processing, setProcessing] = useState(false)
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState('');

    const { _id, price, patientEmail, patientName } = appointment
    console.log(price)





    useEffect(() => {
        fetch('http://localhost:5000/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret);
                }
            });

    }, [price])


    const handleSubmit = async (event) => {
        event.preventDefault()

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

        // if (error) {
        //     console.log(error);
        //     setCardError(error)

        // } else {
        //     console.log(paymentMethod);
        //     setCardError('')
        // }
        setCardError(error?.message || '')

        setCardSuccess(' ')
        setProcessing(true)

        //confirm card payment

        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: patientName,
                        email: patientEmail
                    },
                },
            },
        );

        if (intentError) {
            setCardError(intentError?.message)
            setProcessing(false)
        } else {
            setCardError(' ')
            setCardSuccess('Your payment is accepted')
            setTransactionId(paymentIntent.id)
            console.log(paymentIntent)

            //when get payment data & payment id 
            //then send it server update booking information and post data both

            const payment = {
                appointment: _id,
                name: patientName,
                email: patientEmail,
                transactionId: paymentIntent.id,
            }
            fetch(`http://localhost:5000/booking/${_id}`, {

                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)

            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setProcessing(false)
                })
        }
    }





    return (
        <>
            <form onSubmit={handleSubmit}>
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
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type="submit" disabled={!stripe || !clientSecret || cardSuccess} className='btn btn-sm my-5'>
                    Pay
                </button>
            </form>

            {
                cardError && <p className='text-red-500'>{cardError}</p>
            }
            {
                cardSuccess && <div>
                    <p className='text-green-500'>{cardSuccess}</p>
                    <p className='text-orange-500'>{transactionId}</p>
                </div>
            }
        </>
    );
};

export default CheckoutForm;