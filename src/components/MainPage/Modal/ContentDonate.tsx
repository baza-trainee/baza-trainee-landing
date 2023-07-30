import {
  DonateButton,
  SupportBazaButton,
  donateStyle,
} from '@/components/atomic';

import usePaymentHandler from '@/hooks/usePayment';
import { TDictionary } from '@/types';

export const ContentDonate = ({ dict }: { dict: TDictionary }) => {
  const paymentAmountData = [
    dict.modal.sums['100'],
    dict.modal.sums['200'],
    dict.modal.sums['500'],
    dict.modal.sums['1000'],
  ];
  const { paymentAmount, handlePayment, handleAmountChange } =
    usePaymentHandler();

  return (
    <div className="mx-[1.6rem] my-40 text-center text-[2.4rem] text-neutral-800 sm:mx-[3.5rem] xl:mx-[10.3rem] xl:my-[12.8rem]">
      <h2 className="font-semibold uppercase leading-tight">
        {dict.modal.title}
      </h2>

      <div className="my-[4.8rem] grid h-[10.8rem] grid-cols-3 gap-[3.2rem] font-medium uppercase sm:h-[19.2rem]">
        {paymentAmountData.map((el, index) => (
          <DonateButton
            className={el === paymentAmount ? 'bg-neutral-800 text-white' : ''}
            key={index + el}
            onClick={() => handleAmountChange(el)}
          >
            {el}
          </DonateButton>
        ))}

        <input
          type="text"
          pattern="[0-9]"
          className={`${donateStyle} col-span-2`}
          placeholder={dict.modal.sums.otherSum}
          onChange={(e) => handleAmountChange(e.target.value)}
          value={paymentAmount}
        ></input>
      </div>

      <SupportBazaButton size="M" onClick={handlePayment}>
        {dict.modal.button}
      </SupportBazaButton>
    </div>
  );
};
