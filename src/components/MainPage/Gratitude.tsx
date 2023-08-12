import Image from 'next/image';

export const Gratitude = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center px-[3.5rem] py-[2.4rem] uppercase text-neutral-800">
      <h2 className="text-[3.2rem] font-bold ">Дякуємо!</h2>
      <p className="mt-11 max-w-[58.4rem] text-center text-[2.4rem] font-semibold md:mt-7 lg:mt-[4.8rem]">
        Ваша допомога дуже важлива
        <span className="sm:whitespace-nowrap"> для Baza Trainee Ukraine</span>
      </p>
      <Image
        width={230}
        height={230}
        src={'/img/gratitude-icon.png'}
        alt={'Gratitude icon'}
        className="mt-16 h-[15rem] w-[15rem] object-contain md:mt-[5.4rem] md:h-[23rem] md:w-[23rem] lg:mt-[4.8rem]"
      />
      {/*<GratitudeIcon />*/}
    </div>
  );
};
