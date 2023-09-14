import Image from 'next/image';
import { TformData } from './types';

export default function PreviewSlide({
  photoUrl,
  lang,
  textData,
}: {
  photoUrl: string;
  text?: string;
  lang: string;
  textData: TformData | undefined;
}) {
  return (
    <div className="flex-center relative h-[38.4rem] overflow-hidden rounded-md bg-neutral-75">
      <Image
        src={photoUrl}
        alt="Preview image"
        sizes="100vw"
        objectFit="cover"
        style={{
          width: '100%',
          height: 'auto',
          zIndex: '1',
        }}
        width={1920}
        height={384}
      />
      <div
        className="flex-center absolute z-10 h-full w-full"
        style={{
          backgroundImage:
            'linear-gradient(81deg, rgba(0, 0, 0, 0.75) -3.18%, rgba(0, 0, 0, 0.75) 102.18%)',
        }}
      >
        <div className="z-10 w-2/3 max-w-[44.6rem] text-white">
          <h2 className="z-10 mb-5 text-center text-[3.8rem] font-bold">
            {lang === 'ua'
              ? textData?.titleUa
              : lang === 'en'
              ? textData?.titleEn
              : textData?.titlePl}
          </h2>
          <p className="break-all font-medium leading-[1.6] md:text-center md:text-[2rem]">
            {lang === 'ua'
              ? textData?.subtitleUa
              : lang === 'en'
              ? textData?.subtitleEn
              : textData?.subtitlePl}
          </p>
        </div>
      </div>
    </div>
  );
}
