import { SupportBazaButton } from '@/components/atomic';
import { CloseMainIcon } from '@/components/common/icons';
import axios from 'axios';
import { ChangeEvent, MouseEvent, MutableRefObject, useState } from 'react';

const paymentAmountData = ['100', '200', '500', '1000'];

const url = process.env.NEXT_PUBLIC_SERVER_URL;

interface IModalContent {
  handlerShowModal: (_e: MouseEvent<HTMLDivElement>) => void;
  handleIconClick: () => void;
  bodyScrollLockRef: MutableRefObject<any>;
}

const linkStyle =
  'flex w-[17.4rem] items-center justify-center rounded-[0.4rem] border-2 border-neutral-300 hover:bg-neutral-300 hover:text-white';

export const ModalContent = (props: IModalContent) => {
  const { handlerShowModal, handleIconClick, bodyScrollLockRef } = props;
  const [paymentAmount, setPaymentAmount] = useState<string>('');

  const inputPaymentHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const numericValue = inputValue.replace(/\D/g, '');
    if (numericValue.length <= 7) {
      setPaymentAmount(numericValue);
    }
  };

  const paymentHandler = async () => {
    if (paymentAmount) {
      const data = await axios.post(`${url}/payment`, {
        order_id: Date.now().toString(),
        order_desc: 'Baza trainee support',
        amount: paymentAmount + '00',
        currency: 'UAH',
        response_url: window.location.href,
      });

      if (data.data.response?.checkout_url) {
        window.location.href = data.data.response.checkout_url;
      }
    }
    //add error message
  };

  return (
    <section
      className="duration-250  fixed left-0 top-0 z-20 flex h-screen w-screen items-center justify-center bg-neutral-75 bg-opacity-30 backdrop-blur-2xl backdrop-filter"
      onClick={handlerShowModal}
      ref={bodyScrollLockRef}
    >
      <div
        className="relative w-[79.2rem] rounded-xl bg-white px-28 py-[12.8rem]"
        id="modalWindow"
      >
        <CloseMainIcon
          className="absolute right-10 top-10 cursor-pointer"
          onClick={handleIconClick}
        />

        <div className="px-[3.5rem] py-[2.4rem] text-center text-[2.4rem] text-neutral-800">
          <h2 className="mb-[4.4rem] font-semibold uppercase leading-tight">
            Оберіть суму, якою хочете підтримати Baza Trainee Ukraine
          </h2>

          <div className="mb-[4.8rem] flex h-[19.2rem] w-[58.6rem] flex-wrap items-stretch justify-between gap-[3rem] font-medium uppercase">
            {paymentAmountData.map((el, index) => (
              <button
                className={`${linkStyle} ${
                  el === paymentAmount ? 'bg-neutral-800 text-white' : ''
                }`}
                key={index}
                onClick={() => setPaymentAmount(el)}
              >
                {el} ГРН
              </button>
            ))}
            <input
              type="text"
              pattern="[0-9]"
              className={`${linkStyle} w-[38rem] px-[4rem]`}
              placeholder="ІНША СУМА ГРН"
              onChange={inputPaymentHandler}
              value={paymentAmount}
            ></input>
          </div>

          <SupportBazaButton size="M" onClick={paymentHandler}>
            Підтримати
          </SupportBazaButton>
        </div>
      </div>
    </section>
  );
};
