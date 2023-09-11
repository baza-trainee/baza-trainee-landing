import { FormBtns } from '@/components/atomic/buttons/FormBtns';
import { FileInput, TextInputField } from '@/components/atomic/inputs';
import { useHeroSliderSWR } from '@/hooks/SWR/useHeroSlidersSWR';
import { ISlideFormProps } from '@/types';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { TForm, TFormSlideRequest } from './types';

export const SliderForm: FC<ISlideFormProps> = ({ data, isEdit }) => {
  const inputOptions = {
    required: 'Заповніть поле',
  };

  console.log(data);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TForm>({
    defaultValues: {
      titleUa: data?.title?.ua,
      titleEn: data?.title?.en,
      titlePl: data?.title?.pl,
      subtitleUa: data?.title?.ua,
      subtitleEn: data?.title?.en,
      subtitlePl: data?.title?.pl,
      //   file: data?.imageUrl,
    },
  });

  const { updateSlider, addNewSlider } = useHeroSliderSWR();

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
      _id: data?._id,
    };

    if (data?._id) {
      updateSlider(data?._id, slide);
    } else {
      addNewSlider(slide);
    }
  };

  return (
    <div>
      <form
        className="flex h-2 flex-col gap-1"
        onSubmit={handleSubmit(onSubmitForm)}
      >
        <FileInput
          title="Зображення"
          {...register('file')}
          placeholder={data?.imageUrl || 'Завантажте зображення'}
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
        </div>
      </form>
      ;
    </div>
  );
};
