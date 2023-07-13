import { InputField } from '@/components/atomic';
import { AdminTitle } from '@/components/atomic/AdminTitle';
import { UploadIcon } from '@/components/common/icons/UploadIcon';
export const Documents = () => {
  return (
    <div className="w-full px-[2.4rem] py-[3.2rem]">
      <AdminTitle>Документи</AdminTitle>
      <div>
        <InputField
          label="Звітність"
          icon={<UploadIcon className="fill-neutral-800" />}
          placeholder="Завантажте документ"
        />
        <InputField
          label="Статут"
          icon={<UploadIcon className="fill-neutral-800" />}
          placeholder="Завантажте документ"
        />
        <div className="flex w-full gap-5">
          <InputField
            label="Політика конфіденційності"
            icon={<UploadIcon className="fill-neutral-800" />}
            placeholder="Завантажте документ"
          />
          <InputField
            label="Privacy Policy"
            icon={<UploadIcon className="fill-neutral-800" />}
            placeholder="Завантажте документ"
          />
          <InputField
            label="Polityka prywatności"
            icon={<UploadIcon className="fill-neutral-800" />}
            placeholder="Завантажте документ"
          />
        </div>
        <div className="flex gap-5">
          <InputField
            label="Правила користування сайтом"
            icon={<UploadIcon className="fill-neutral-800" />}
            placeholder="Завантажте документ"
          />
          <InputField
            label="Terms of use of the site"
            icon={<UploadIcon className="fill-neutral-800" />}
            placeholder="Завантажте документ"
          />
          <InputField
            label="Warunki korzystania z serwisu"
            icon={<UploadIcon className="fill-neutral-800" />}
            placeholder="Завантажте документ"
          />
        </div>
      </div>
    </div>
  );
};
