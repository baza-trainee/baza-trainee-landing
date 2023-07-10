export type TsidebarSection = {
  id: string;
  icon?: React.FC;
  text: string;
  submenu?: TsidebarSection[];
};

export interface ISideMenuItem {
  onClick?: () => void;
  iconOnly?: boolean;
}
