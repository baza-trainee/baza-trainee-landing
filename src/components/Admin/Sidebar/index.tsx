import styles from './styles.module.scss';
import Image from 'next/image';
import { useState } from 'react';
import { MouseEvent } from 'react';

import LogOutIcon from '@/components/common/icons/LogOutIcon';

import SliderIcon from '@/components/common/icons/SliderIcon';
import ProjectIcon from '@/components/common/icons/ProjectIcon';
import CounterIcon from '@/components/common/icons/CounterIcon';
import PartnerIcon from '@/components/common/icons/Partner';
import RecallIcon from '@/components/common/icons/RecallIcon';
import ReportIcon from '@/components/common/icons/ReportIcon';
import ContactIcon from '@/components/common/icons/ContactIcon';


const sidebarSectionsList = [
  { id: 0, iconName: SliderIcon },
  { id: 1, iconName: ProjectIcon },
  { id: 2, iconName: CounterIcon },
  { id: 3, iconName: PartnerIcon },
  { id: 4, iconName: RecallIcon },
  { id: 5, iconName: ReportIcon },
  { id: 6, iconName: ContactIcon },
];

function Sidebar() {
  
  const [page, setPage] = useState<number>(0);

  const handleClick = (e:MouseEvent<HTMLLIElement>) => {
    setPage(Number(e.currentTarget.id));
    
  }

  const makeOptionClasses = (index: Number) => {
    if (index === page) {
      return `${styles['sidebar-list__item']} ${styles['sidebar-list__item--accent']}`
    }
    return `${styles['sidebar-list__item']}`;
  }

  return (
    <div className={styles['sidebar-wrapper']}>
      <div className={styles['sidebar-logo']}>
        <a href="#">
        <Image
          className={styles['sidebar-logo__svg']}
          src="/svg/logo-black.svg"
          alt="Main logo"
        />
        </a>
        
      </div>

      <div className={styles['sidebar-menu']}>
        <ul className={styles['sidebar-list']}>
          {sidebarSectionsList &&
            sidebarSectionsList.map(({ id, iconName:IconComponent }) => 
				<li key={id} id={id.toString()} className={makeOptionClasses(id)}
        onClick={handleClick}
        >
					<a href="#" className={styles['sidebar-list__item-link']}>
						<IconComponent className={styles['sidebar-list__item-icon']}/>
					</a>
				</li>
				)
			}
        </ul>

        <a href="#" className={styles['log-out']}>
						<LogOutIcon className={styles['log-out__icon']}/>
					</a>
      </div>
    </div>
  );
}

export default Sidebar;
