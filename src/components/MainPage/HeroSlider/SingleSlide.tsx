import { TSlide } from '@/types';

export const SingleSlide = ({ slideData }: { slideData: TSlide }) => {
  const { image, title, text } = slideData;

  return (
    <div
      className="flex h-[50.4rem] items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="w-2/3 max-w-[79rem] text-center text-white">
        <h2 className="mb-5 text-[3.8rem] font-bold">{title}</h2>
        <p className="text-[2rem] font-medium leading-[1.6]">{text}</p>
      </div>
    </div>
  );
};
