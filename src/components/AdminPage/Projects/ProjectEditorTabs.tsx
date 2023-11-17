import { TFormTabs } from './types';

import { FileIcon, PeopleIcon } from '@/components/common/icons';

export const ProjectEditorTabs = ({ tabsMode, setTabsMode }: TFormTabs) => {
  const buttonBaseStyle =
    'flex gap-5 rounded-tl-md rounded-tr-md border-l border-r border-t border-neutral-800 px-6 py-4 ';

  const descriptionButtonStyle =
    tabsMode === 'description' ? 'bg-neutral-800 text-white' : '';

  const teamButtonStyle =
    tabsMode === 'team' ? 'bg-neutral-800 text-white' : '';

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
        className={buttonBaseStyle + teamButtonStyle}
        onClick={() => setTabsMode('team')}
      >
        Команда
        <PeopleIcon />
      </button>
    </div>
  );
};
