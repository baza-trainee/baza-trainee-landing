import { SETTINGS } from '@/config/settings';
import { TTeamMemberRole } from '@/types';

const orderList = SETTINGS.specsOrderList;

export const roleSorter = (results?: TTeamMemberRole[]) =>
  results &&
  results.sort(
    (a, b) => orderList.indexOf(a.name.en) - orderList.indexOf(b.name.en)
  );
