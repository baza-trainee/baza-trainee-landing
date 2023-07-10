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

const sidebarSectionsList = [
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
        text: 'Ролі',
        id: 'roles',
      },
      {
        text: 'Стек',
        id: 'stack',
      },
    ],
  },
  { id: 'counter', icon: CounterIcon, text: 'Каунтер' },
  { id: 'partners', icon: PartnerIcon, text: 'Партнери' },
  { id: 'testimonials', icon: RecallIcon, text: 'Відгуки' },
  { id: 'docs', icon: ReportIcon, text: 'Документи' },
  { id: 'contacts', icon: ContactIcon, text: 'Контакти' },
  { id: 'settings', icon: SettingsIcon, text: 'Налаштування' },
];

export default sidebarSectionsList;
