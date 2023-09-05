import { FileIcon, PeopleIcon } from '@/components/common/icons';
import { TFormTabs } from './types';

// const handleModeToggle = () => {
//   setMode(mode === 'description' ? 'members' : 'description');
// };

export const ProjectEditorTabs = ({ tabsMode, setTabsMode }: TFormTabs) => {
  const buttonBaseStyle =
    'flex gap-5 rounded-tl-md rounded-tr-md border-l border-r border-t border-neutral-800 px-6 py-4 ';

  const descriptionButtonStyle =
    tabsMode === 'description' ? 'bg-neutral-800 text-white' : '';

  const membersButtonStyle =
    tabsMode === 'members' ? 'bg-neutral-800 text-white' : '';

  return (
    <div className="flex gap-2 border-b border-neutral-800">
      <button
        className={buttonBaseStyle + descriptionButtonStyle}
        onClick={() => setTabsMode('description')}
      >
        Опис
        <FileIcon />
      </button>

      <button
        className={buttonBaseStyle + membersButtonStyle}
        onClick={() => setTabsMode('members')}
      >
        Команда
        <PeopleIcon />
      </button>
    </div>
  );
};
