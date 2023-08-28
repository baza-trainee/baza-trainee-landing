import { Dispatch, SetStateAction } from 'react';
import { FileIcon, PeopleIcon } from '@/components/common/icons';

type Props = {
  mode: 'description' | 'members';
  setMode: Dispatch<SetStateAction<'description' | 'members'>>;
};

export const ProjectFormTabs = ({ mode, setMode }: Props) => {
  const buttonBaseStyle =
    'flex gap-5 rounded-tl-md rounded-tr-md border-l border-r border-t border-neutral-800 px-6 py-4 ';

  const descriptionButtonStyle =
    mode === 'description' ? 'bg-neutral-800 text-white' : '';

  const membersButtonStyle =
    mode === 'members' ? 'bg-neutral-800 text-white' : '';

  return (
    <div className="flex gap-2 border-b border-neutral-800">
      <button
        className={buttonBaseStyle + descriptionButtonStyle}
        onClick={() => setMode('description')}
      >
        Опис
        <FileIcon />
      </button>

      <button
        className={buttonBaseStyle + membersButtonStyle}
        onClick={() => setMode('members')}
      >
        Команда
        <PeopleIcon />
      </button>
    </div>
  );
};
