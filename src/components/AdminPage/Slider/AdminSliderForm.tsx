'use client';
import LanguageSelector from '@/components/MainPage/Header/LanguageSelector';
import { FormBtns } from '@/components/atomic/buttons/FormBtns';
import { FileInput, TextInputField } from '@/components/atomic/inputs';
import { LogoMain } from '@/components/common/icons';
import { useHeroSliderSWR } from '@/hooks/SWR/useHeroSlidersSWR';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import PreviewSlide from './PreviewSlide';
import { TForm, TFormSlideRequest, TformData } from './types';

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

  const router = useRouter();
  const { addNewSlider } = useHeroSliderSWR();
  const [image, setImage] = useState<File | null>();
  const [preview, setPreview] = useState<string | null>();
  const [curLang, setCurLang] = useState<string>('ua');
  const [dataForm, setDataForm] = useState<TformData | undefined>();

  const {
    register,
    handleSubmit,
    watch,
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

  const handleStatusUpload = (e: any): void => {
    const file = e.target.files[0];
    if (file && file.type.substr(0, 5) === 'image') {
      setImage(file);
    } else {
      setImage(null);
    }
  };

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(image);
    } else {
      setPreview(null);
    }
  }, [image]);

  useEffect(() => {
    const sub = watch((data) => {
      setDataForm(data);
    });

    setCurLang(localStorage.getItem('landingLanguage') || 'ua');

    return () => {
      sub.unsubscribe();
    };
  }, [watch]);

  return (
    <div className="h-full">
      <form
        className="flex h-2 flex-col gap-1"
        onSubmit={handleSubmit(onSubmitForm)}
      >
        <FileInput
          title="Зображення"
          {...register('file')}
          accept="image/*"
          onChange={(e) => handleStatusUpload(e)}
          placeholder={'Завантажте зображення'}
          errorText={errors.file?.message}
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
        <div className="mb-[1.5rem] flex items-center justify-between gap-2">
          <FormBtns isEditMode={isEdit} />
          <LanguageSelector />
        </div>
        <div className="flex-center mb-[5rem] h-[38.4rem] w-full rounded-md bg-neutral-75">
          {preview ? (
            <PreviewSlide
              photoUrl={preview}
              textData={dataForm}
              lang={curLang}
            />
          ) : (
            <div className="flex-center rounded-md bg-neutral-75 py-[10.2rem]">
              <LogoMain className="h-72 w-72 text-neutral-200" />
            </div>
          )}
        </div>
      </form>
    </div>
  );
};
