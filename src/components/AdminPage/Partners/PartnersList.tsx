'use client';

import { AdminPanelButton } from '@/components/atomic';
import { AdminTitle } from '@/components/atomic/AdminTitle';
import MagnifierIcon from '@/components/common/icons/MagnifierIcon';
import { PartnerActionProps } from '@/types';
import partnersApi from '@/utils/API/partners';
import { useAPI } from '@/utils/hooks/useAPI';
import { useEffect, useState } from 'react';
import { PlusIcon } from '../../common/icons/PlusIcon';
import { PartnerItem } from './PartnerItem';

export const PartnersList = ({
  handleAddPartnerClick,
  handleEditPartnerClick,
}: PartnerActionProps) => {
  const [dispatch, data, isError, isLoading] = useAPI(partnersApi.getAll);
  const [dataUpdated, setDataUpdated] = useState(false);

  useEffect(() => {
    dispatch();
  }, []);

  useEffect(() => {
    if (dataUpdated) {
      dispatch();
      setDataUpdated(false);
    }
  }, [dataUpdated]);

  const handleDataUpdate = () => {
    setDataUpdated(true);
  };

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : isError ? (
        <p>Error occurred: {data?.message}</p>
      ) : (
        <>
          <div className='flex w-[1143px] items-center justify-between'>
            <AdminTitle className='mb-[3.8rem] mt-[0.9rem] tracking-wide'>
              Лого партнерів
            </AdminTitle>
            <form className='-mt-6 flex w-[378px] items-center justify-between gap-4 rounded border border-neutral-300 bg-white p-[1.5rem]'>
              <input
                type='text'
                name='search'
                className='w-[306px] bg-white text-neutral-500 outline-none'
                placeholder='Введіть ключове слово для пошуку'
                // value={}
                // onChange={}
                required
              />
              <button type='submit'>
                <MagnifierIcon />
              </button>
            </form>
          </div>
          <div className='flex min-w-[1138px] flex-wrap gap-[1.1rem] gap-y-9'>
            <div className='flex items-center justify-center bg-base-dark px-[8px]'>
              <AdminPanelButton
                type='submit'
                onClick={handleAddPartnerClick}
                variant='secondary'
                icon={<PlusIcon />}
              >
                Додати партнера
              </AdminPanelButton>
            </div>
            {data &&
              data.results.map((partner: any) => (
                <PartnerItem
                  key={partner._id}
                  id={partner._id}
                  name={partner.name}
                  image={partner.imageUrl}
                  handleEditPartnerClick={handleEditPartnerClick}
                  handleDataUpdate={handleDataUpdate}
                />
              ))}
          </div>
        </>
      )}
    </>
  );
};
