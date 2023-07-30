import { LogoMain } from '@/components/common/icons';

import { ContainerMaxW1200 } from '@/components/atomic';
import { HeaderDropdownMenu } from './HeaderDropdownMenu';
import { HeaderLinks } from './HeaderLinks';

export const Header = () => {
  return (
    <header
      className="relative h-[10rem] bg-yellow-500 md:h-[10.4rem]"
      id="header"
    >
      <ContainerMaxW1200 className="h-full items-center justify-between">
        <a href="/">
          <LogoMain className="h-[4.2rem] w-[4.2rem] sm:h-[7.8rem] sm:w-[7.8rem]" />
        </a>

        <HeaderLinks className="hidden gap-[5.6rem] lg:flex" />

        <div className="sm:ml-auto sm:mr-20 lg:mx-0">
          {/* <LanguageSelector /> */}
        </div>
      </ContainerMaxW1200>

      <div className="lg:hidden">
        <HeaderDropdownMenu />
      </div>

      {/* <div
        className="absolute z-50 h-5 w-5 border  border-red-600"
        id="dropMenuPortal"
      /> */}
    </header>
  );
};

// export const Header = () => {
//   return (
//     <header
//       className="relative h-[10rem] bg-yellow-500 md:h-[10.4rem]"
//       id="header"
//     >
//       <div className="relative mx-auto w-96">
//         <div
//           className="absolute h-10 w-screen border  border-red-600"
//           id="dropMenuPortal"
//         />
//       </div>
//     </header>
//   );
// };
