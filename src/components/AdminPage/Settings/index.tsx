'use client';

import {
  AdminPanelButton,
  AdminTitle,
  EditDeleteButton
} from '@/components/atomic';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export const Settings = () => {

  const router = useRouter();

  const handleGoBack = () => {
    router.back(); 
  };  
   
  const recoverLink = '/admin/change';

  return (
    <div className="w-full bg-base-light px-[2.4rem] py-[3.2rem]">
      <AdminTitle className="mb-[4.5rem] ml-[1.2rem]">Налаштування</AdminTitle>
      <div className="flex flex-col gap-16" >
      <div className="flex w-full flex-col gap-10 bg-base-dark px-[1.2rem] py-8 max-w-[414px] shadow-[0_4px_4px_0_rgba(234,232,232,0.25),0_2px_12px_0_rgba(234,232,232,0.25)]">
        <div className="flex flex-wrap gap-[2.4rem] justify-between items-center " >        
        <p>Змінити пароль</p>
        <Link
            href={recoverLink}
            className="text-[1.6rem] text-neutral-600 underline"
          >            
            <EditDeleteButton icon ='edit'/>
          </Link>
          </div>
          </div>
        <div className="ml-5 flex gap-[1.8rem]">
          <AdminPanelButton type="submit" onClick={handleGoBack} >
            Зберегти зміни
          </AdminPanelButton>
          <AdminPanelButton variant="secondary" onClick={handleGoBack}>
            Скасувати
          </AdminPanelButton>
        </div>
       </div>
     
    </div>
  );
};
