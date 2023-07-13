export type TsidebarSection = {
  id: string;
  icon?: React.FC;
  text: string;
  submenu?: Omit<TsidebarSection, 'icon'>[];
};

export interface ISideMenuItem {
  onClick?: () => void;
  iconOnly?: boolean;
}
