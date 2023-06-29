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
  { id: 'slider', iconName: SliderIcon, text: 'Слайдер' },
  {
    id: 'projects',
    iconName: ProjectIcon,
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
  { id: 'counter', iconName: CounterIcon, text: 'Каунтер' },
  { id: 'partners', iconName: PartnerIcon, text: 'Партнери' },
  { id: 'testimonials', iconName: RecallIcon, text: 'Відгуки' },
  { id: 'docs', iconName: ReportIcon, text: 'Документи' },
  { id: 'contacts', iconName: ContactIcon, text: 'Контакти' },
  { id: 'settings', iconName: SettingsIcon, text: 'Налаштування' },
];

export default sidebarSectionsList;
