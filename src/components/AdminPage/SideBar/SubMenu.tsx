import { SideBarMenuItem } from './SideBarMenuItem';
import { ISideMenuItem, TsidebarSection } from './types';

interface IProps extends ISideMenuItem {
  submenu: TsidebarSection[];
}

export const SubMenu = (props: IProps) => {
  const { iconOnly, submenu } = props;

  return (
    <div
      className={`
        ${
          iconOnly &&
          'absolute -top-[1.6rem] left-40 rounded-md border border-neutral-300 bg-base-dark px-5 pb-5 pt-3'
        }
        transition-all`}
    >
      {submenu.map((item, i) => (
        <div
          className="border-b border-neutral-800 py-2"
          key={`key_submenu_item_${i}_${item.id}`}
        >
          <SideBarMenuItem sidebarSection={item} />
        </div>
      ))}
    </div>
  );
};
