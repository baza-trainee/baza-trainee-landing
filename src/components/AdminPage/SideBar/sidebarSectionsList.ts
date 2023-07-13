import {
  ContactIcon,
  CounterIcon,
  PartnerIcon,
  ProjectIcon,
  RecallIcon,
  ReportIcon,
  SettingsIcon,
  SliderIcon,
} from '@/components/common/icons/index';

import { TsidebarSection } from './types';

export const sidebarSectionsList: TsidebarSection[] = [
  { id: 'slider', icon: SliderIcon, text: 'Слайдер' },
  {
    id: 'projects',
    icon: ProjectIcon,
    text: 'Проєкти',
    submenu: [
      {
        text: 'Учасники',
        id: 'members',
      },
      {
        text: 'Спеціалізація',
        id: 'speciality',
      },
    ],
  },
  { id: 'counter', icon: CounterIcon, text: 'Каунтер' },
  { id: 'partners', icon: PartnerIcon, text: 'Партнери' },
  { id: 'testimonials', icon: RecallIcon, text: 'Відгуки' },
  { id: 'documents', icon: ReportIcon, text: 'Документи' },
  { id: 'contacts', icon: ContactIcon, text: 'Контакти' },
  { id: 'settings', icon: SettingsIcon, text: 'Налаштування' },
];
