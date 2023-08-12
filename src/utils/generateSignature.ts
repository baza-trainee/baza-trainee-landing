import { TPaymentData } from '@/types';
import crypto from 'crypto';
const { MERCHANT_SECRET_KEY, MERCHANT_ID } = process.env;

export const generateSignature = (
  obj: TPaymentData,
  MERCHANTACCOUNT = MERCHANT_ID || '',
  merchantSecretKey = MERCHANT_SECRET_KEY || ''
) => {
  const body = {
    ...obj,
    merchantAccount: MERCHANTACCOUNT,
  };
  const stringWithSemicolon = Object.values(body).flat().join(';');
  const hash = crypto
    .createHmac('md5', merchantSecretKey)
    .update(stringWithSemicolon)
    .digest('hex');

  return hash;
};
