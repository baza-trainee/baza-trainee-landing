import { useState } from 'react';
import useSWR from 'swr';

import { useGlobalContext } from '@/store/globalContext';
import {
  testimonialsApi,
  testimonialsEndPoint,
} from '@/utils/API/testimonials';
import { errorHandler, networkStatusesUk } from '@/utils/errorHandler';

// import { ITestimonial } from '@/types';
import { AxiosError } from 'axios';

export const useTestimonialsSWR = () => {
  const { setAlertInfo } = useGlobalContext();
  const [search, setSearch] = useState('');

  // const swrKey = `${testimonialsApi.getAll}?search=${search}`;

  const handleRequestError = (err: AxiosError) => {
    errorHandler(err);
    setAlertInfo({
      state: 'error',
      title: networkStatusesUk[err?.status || 500],
      textInfo: 'При запиті виникла помилка. Спробуйте трохи пізніше.',
    });
  };

  const { data, error, isLoading } = useSWR(
    testimonialsEndPoint,
    testimonialsApi.getAll,
    {
      keepPreviousData: true,
      onError: errorHandler,
    }
  );

  const handlerSearchTestimonial = (search: string) => {
    setSearch(search);
  };

  // const handlerCreateTestimonial = (newProject: TProjectRequest) => {
  //   const options = {
  //     populateCache: (createdProject: TProject) => ({
  //       ...data!,
  //       results: [createdProject, ...(data?.results || [])],
  //     }),
  //     revalidate: false,
  //   };

  //   mutate(() => testimonialsApi.createNew(newProject), options)
  //     .catch(handleRequestError)
  //     .catch((e) => console.log('ERROR!!!!!', e));
  // };

  // const handlerUpdateProject = (id: string, updProject: TProjectRequest) => {
  //   // const populateCache = (createdProject: TProject) => {
  //   //   console.log("proj>.", createdProject);
  //   //   const updProjects = data?.results.map((project) =>
  //   //     project._id === id ? createdProject : project
  //   //   );
  //   //   return { ...data!, results: updProjects! };
  //   // };

  //   // const options = { populateCache, revalidate: false }; // TODO: implement populate cache

  //   mutate(() => projectsApi.updateById(id, updProject)).catch(
  //     handleRequestError
  //   );
  // };

  // const handlerDeleteProject = (id: string) => {
  //   const updProjects = data?.results.filter((project) => project._id !== id);
  //   const options = {
  //     optimisticData: { ...data!, results: updProjects! },
  //     populateCache: false,
  //     revalidate: false,
  //   };

  //   mutate(() => projectsApi.deleteById(id), options).catch(handleRequestError);
  // };

  return {
    testimonialsData: data,
    isLoading,
    isError: error,
    handlerSearchTestimonial,
    handleRequestError,
    // handlerUpdateProject,
    // handlerDeleteProject,
  };
};
