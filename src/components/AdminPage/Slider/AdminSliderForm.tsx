import LanguageSelector from '@/components/MainPage/Header/LanguageSelector';
import { FormBtns } from '@/components/atomic/buttons/FormBtns';
import { FileInput, TextInputField } from '@/components/atomic/inputs';
import { useHeroSliderSWR } from '@/hooks/SWR/useHeroSlidersSWR';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { TForm, TFormSlideRequest } from './types';

type TPrevImg = {
  prevImg?: string;
};

export const SliderForm = ({
  id,
  isEdit,
}: {
  id?: string;
  isEdit: boolean;
}) => {
  const inputOptions = {
    required: 'Заповніть поле',
  };

  const [prevImg, setPrevImg] = useState<TPrevImg>();
  const router = useRouter();
  const { addNewSlider } = useHeroSliderSWR();

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<TForm>();

  // якщо це редагувати, то треба нижке коммент використати

  // isEdit
  //   ? {
  //   defaultValues: {
  //     titleUa: data?.title?.ua,
  //     titleEn: data?.title?.en,
  //     titlePl: data?.title?.pl,
  //     subtitleUa: data?.title?.ua,
  //     subtitleEn: data?.title?.en,
  //     subtitlePl: data?.title?.pl,
  //     // file: data?.imageUrl,
  //   },
  // }
  //   : {};

  const onSubmitForm: SubmitHandler<TForm> = async (dataForm) => {
    console.log('Form Data:', dataForm);

    const slide: TFormSlideRequest = {
      title: {
        ua: dataForm.titleUa,
        en: dataForm.titleEn,
        pl: dataForm.titlePl,
      },
      subtitle: {
        ua: dataForm.subtitleUa,
        en: dataForm.subtitleEn,
        pl: dataForm.subtitlePl,
      },
      file: dataForm?.file,
      _id: id,
    };

    addNewSlider(slide);

    router.replace('.');
    // if (data?._id) {
    //   updateSlider(data?._id, slide);
    // } else {
    //   addNewSlider(slide);
    // }
  };

  const [file] = watch<any>('file');

  console.log(prevImg);
  console.log(file);

  return (
    <div>
      <form
        className="flex h-2 flex-col gap-1"
        onSubmit={handleSubmit(onSubmitForm)}
      >
        <FileInput
          title="Зображення"
          {...register('file')}
          onChange={(e) => {
            setPrevImg(e.target.value);
          }}
          placeholder={'Завантажте зображення'}
          // placeholder={data?.imageUrl || 'Завантажте зображення'}
        />
        <div className="flex flex-wrap gap-[2.4rem]">
          <TextInputField
            title="Заголовок"
            {...register('titleUa', inputOptions)}
            errorText={errors.titleUa?.message}
            inputType="ua"
          />

          <TextInputField
            {...register('titleEn', inputOptions)}
            errorText={errors.titleEn?.message}
            inputType="en"
          />
          <TextInputField
            {...register('titlePl', inputOptions)}
            errorText={errors.titlePl?.message}
            inputType="pl"
          />
        </div>
        <div className="flex flex-wrap gap-[2.4rem]">
          <TextInputField
            title="Основний текст"
            {...register('subtitleUa', inputOptions)}
            errorText={errors.subtitleUa?.message}
            inputType="ua"
          />
          <TextInputField
            {...register('subtitleEn', inputOptions)}
            errorText={errors.subtitleEn?.message}
            inputType="en"
          />
          <TextInputField
            {...register('subtitlePl', inputOptions)}
            errorText={errors.subtitlePl?.message}
            inputType="pl"
          />
        </div>
        <div className="flex gap-2">
          <FormBtns isEditMode={isEdit} />
          <LanguageSelector />
        </div>
      </form>
      {/* Прев'ю зображення */}
      {/* <div className='w-full h-[20rem]'>
        <Image src={file} alt="Preview image" fill style={{objectFit: 'cover'}} />
      </div> */}
    </div>
  );
};
