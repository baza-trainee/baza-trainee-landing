import { useState } from 'react';

const url = process.env.NEXT_PUBLIC_SERVER_URL || '';

const maxPayment = 10_000_000;

const usePaymentHandler = (urlBase = url) => {
  const [paymentAmount, setPaymentAmount] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handlePayment = async () => {
    const paymentData = {
      transactionType: 'CREATE_INVOICE',
      merchantDomainName: window.location.hostname,
      apiVersion: 1,
      orderReference: Date.now().toString(),
      orderDate: Date.now(),
      amount: Number(paymentAmount),
      language: 'UA', //fix
      currency: 'UAH',
      productName: ['Baza trainee support'],
      productCount: [1],
      productPrice: [Number(paymentAmount)],
      serviceUrl: 'https://baza-trainee.tech/api/v1/payment/complete',
    };
    if (Number(paymentAmount)) {
      try {
        const response = await fetch(`${urlBase}/payment`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(paymentData),
        });
        const data = await response.json();

        const checkoutUrl = data?.invoiceUrl;
        if (checkoutUrl) {
          window.location.href = checkoutUrl;
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
