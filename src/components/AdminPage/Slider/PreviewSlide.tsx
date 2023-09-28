import { LogoMain } from '@/components/common/icons';
import { createImgUrl } from '@/utils/imageHandler';
import Image from 'next/image';
import { sliderValidateOptions } from './sliderValidateOptions';
import { TFormInputs } from './types';

const EmptyPreview = () => (
  <div className="flex-center w-full rounded-md bg-neutral-75 py-[10.2rem]">
    <LogoMain className="h-72 w-72 text-neutral-200" />
  </div>
);

export default function PreviewSlide({
  lang,
  currentValues,
}: {
  lang: string;
  currentValues: TFormInputs;
}) {
  const { file } = currentValues;

  const getImgUrl = () => {
    if (!file?.length) return;
    if (file[0].type === 'for-url') {
      return createImgUrl(file[0].name);
    }
    const isValidImg = sliderValidateOptions.img.validate(file);
    if (isValidImg) {
      return URL.createObjectURL(file[0]);
    }
  };

  const photoUrl = getImgUrl();

  if (!photoUrl) {
    return <EmptyPreview />;
  }

  const curText = {
    title:
      lang === 'ua'
        ? currentValues?.titleUa
        : lang === 'en'
        ? currentValues?.titleEn
        : currentValues?.titlePl,
    subtitle:
      lang === 'ua'
        ? currentValues?.subtitleUa
        : lang === 'en'
        ? currentValues?.subtitleEn
        : currentValues?.subtitlePl,
  };

  return (
    <div className="flex-center relative h-[38.4rem] w-full overflow-hidden rounded-md bg-neutral-75">
      <Image src={photoUrl} alt="Preview image" fill className="object-cover" />
      <div className="z-10 w-2/3 max-w-[44.6rem] text-white">
        <h2 className="z-10 mb-5 break-words text-center text-[3.8rem] font-bold">
          {curText.title}
        </h2>
        <p className="break-words font-medium leading-[1.6] md:text-center md:text-[2rem]">
          {curText.subtitle}
        </p>
      </div>
    </div>
  );
}
