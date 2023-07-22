import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const url = process.env.NEXT_PUBLIC_SERVER_URL || '';

const maxPayment = 10_000_000;

const usePaymentHandler = (urlBase = url) => {
  const router = useRouter();
  const [paymentAmount, setPaymentAmount] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handlePayment = async () => {
    if (Number(paymentAmount)) {
      try {
        const response = await axios.post(`${urlBase}/payment`, {
          order_id: Date.now().toString(),
          order_desc: 'Baza trainee support',
          amount: paymentAmount + '00',
          currency: 'UAH',
          //response_url: `${window.location.href}`,
          //response_url: `${window.location.href}api/payment-complete`,
          response_url: 'https://baza-trainee.tech/api/v1/payment/complete', //FIX
        });

        const checkoutUrl = response.data.response?.checkout_url;
        if (checkoutUrl) {
          router.push(checkoutUrl);
        }
      } catch (error) {
        setErrorMessage('Error occurred while processing payment');
        console.error(error);
      }
    } else {
      setErrorMessage('Please enter a valid payment amount');
    }
  };

  const handleAmountChange = (inputValue: string) => {
    const numericValue = inputValue.replace(/\D/g, '');
    if (Number(numericValue) <= maxPayment) {
      setPaymentAmount(numericValue);
    }
  };

  return {
    paymentAmount,
    errorMessage,
    handlePayment,
    handleAmountChange,
  };
};

export default usePaymentHandler;
