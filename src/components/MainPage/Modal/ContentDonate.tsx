import {
  DonateButton,
  SupportBazaButton,
  donateStyle,
} from '@/components/atomic';

import usePaymentHandler from '@/hooks/usePayment';

const paymentAmountData = ['100', '200', '500', '1000'];

export const ContentDonate = () => {
  const { paymentAmount, handlePayment, handleAmountChange } =
    usePaymentHandler();

  return (
    <div className="mx-[1.6rem] my-40 text-center text-[2.4rem] text-neutral-800 sm:mx-[3.5rem] xl:mx-[10.3rem] xl:my-[12.8rem]">
      <h2 className="font-semibold uppercase leading-tight">
        Оберіть суму, якою ВИ хочете підтримати Baza Trainee Ukraine
      </h2>

      <div className="my-[4.8rem] grid h-[10.8rem] grid-cols-3 gap-[3.2rem] font-medium uppercase sm:h-[19.2rem]">
        {paymentAmountData.map((el, index) => (
          <DonateButton
            className={el === paymentAmount ? 'bg-neutral-800 text-white' : ''}
            key={index + el}
            onClick={() => handleAmountChange(el)}
          >
            {el} ГРН
          </DonateButton>
        ))}

        <input
          type="text"
          pattern="[0-9]"
          className={`${donateStyle} col-span-2`}
          placeholder="ІНША СУМА ГРН"
          onChange={(e) => handleAmountChange(e.target.value)}
          value={paymentAmount}
        ></input>
      </div>

      <SupportBazaButton size="M" onClick={handlePayment}>
        Підтримати
      </SupportBazaButton>
    </div>
  );
};
