import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { IMember, TResponseProjects } from '@/types';
import { useMembersSWR } from '@/hooks/SWR/useMembersSWR';
import { useProjectsSWR } from '@/hooks/SWR/useProjectsSWR';
import { useGlobalContext } from '@/store/globalContext';
import { networkStatusesUk } from '@/utils/errorHandler';
import { useDebounce } from '@/hooks/useDebounce';
import { SearchBarProps } from './types';

const filterMembers = (members: IMember[], searchTerm: string) =>
  (members as IMember[]).filter(
    (item) =>
      item.name.en.toLowerCase().includes(searchTerm) ||
      item.name.pl.toLowerCase().includes(searchTerm) ||
      item.name.ua.toLowerCase().includes(searchTerm)
  );

const filterProjects = (projects: TResponseProjects, searchTerm: string) =>
  projects.results.filter((item) =>
    item.title.toLowerCase().includes(searchTerm)
  );

const useSearchFilter = ({ searchFor, updateData }: SearchBarProps) => {
  const { setAlertInfo } = useGlobalContext();
  const { data: members, isError: isMembersError } = useMembersSWR();
  const { data: projects, isError: isProjectsError } = useProjectsSWR();
  const [searchTerm, setSearchTerm] = useState('');

  const debouncedSearchTerm = useDebounce(searchTerm);

  const handleSearch = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value.toLowerCase().trim());
  }, []);

  useEffect(() => {
    if (searchFor === 'projects' && projects) {
      if (debouncedSearchTerm) {
        const filteredProjects = filterProjects(projects, debouncedSearchTerm);
        updateData({ ...projects, results: filteredProjects });
      } else {
        updateData(projects);
      }
    }
  }, [debouncedSearchTerm, projects]);

  useEffect(() => {
    if (searchFor === 'members' && members) {
      if (debouncedSearchTerm) {
        const filteredMembers = filterMembers(members, debouncedSearchTerm);
        updateData(filteredMembers);
      } else {
        updateData(members);
      }
    }
  }, [debouncedSearchTerm, members]);

  useEffect(() => {
    if (isMembersError && searchFor === 'members') {
      setAlertInfo({
        state: 'error',
        title: networkStatusesUk[isMembersError?.status || 500],
        textInfo:
          'Не вдалося отримати перелік учасників. Спробуйте трохи пізніше.',
      });
    }
  }, [isMembersError]);

  useEffect(() => {
    if (searchFor === 'projects' && isProjectsError) {
      setAlertInfo({
        state: 'error',
        title: networkStatusesUk[isProjectsError?.status || 500],
        textInfo:
          'Не вдалося отримати перелік проєктів. Спробуйте трохи пізніше.',
      });
    }
  }, [isProjectsError]);

  return { handleSearch };
};

export { useSearchFilter };
