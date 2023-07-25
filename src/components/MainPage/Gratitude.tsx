import { GratitudeIcon } from '../common/icons';

export const Gratitude = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-[4.8rem] px-[3.5rem] py-[2.4rem] uppercase text-neutral-800">
      <h2 className="text-[3.2rem] font-bold ">Дякуємо!</h2>
      <p className="text-center text-[2.4rem] font-semibold">
        Ваша допомога дуже важлива для
        <span className="whitespace-nowrap"> Baza Trainee Ukraine</span>
      </p>
      <GratitudeIcon />
    </div>
  );
};
