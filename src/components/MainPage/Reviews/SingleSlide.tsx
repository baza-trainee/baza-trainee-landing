export const SingleSlide = ({
  slideData,
  lang,
}: {
  slideData: {
    __v: number;
    _id: string;
    date: number;
    imageUrl: string;
    name: {
      en: string;
      pl: string;
      ua: string;
    };
    review: {
      en: string;
      pl: string;
      ua: string;
    };
  };
  lang: 'en' | 'ua' | 'pl';
}) => {
  const { imageUrl, review, name } = slideData;

  return (
    <div
      className="min-h-48 m-auto flex w-3/5 flex-col flex-wrap items-center 
      gap-[2rem] text-neutral-700 sm:flex-row md:gap-[4.8rem] lg:flex-nowrap xl:w-[80rem]"
    >
      <div className="relative h-48 w-48 shrink-0">
        {/* <Image src={imageUrl} alt={'customer'} fill className="rounded-full" /> */}
      </div>

      <div className="whitespace-nowrap font-secondary text-[2rem]">
        <h4 className="">{name[lang]}</h4>
        {/* <p className="">{specialization}</p> */}
      </div>

      <span className="font-secondary">{review[lang]}</span>
    </div>
  );
};
