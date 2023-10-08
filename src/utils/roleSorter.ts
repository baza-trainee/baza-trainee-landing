import { TMemberRoleResp } from '@/types';

import { SETTINGS } from '@/config/settings';

const orderList = SETTINGS.specsOrderList;

export const roleSorter = (results?: TMemberRoleResp[]) =>
  results &&
  results.sort(
    (a, b) => orderList.indexOf(a.name.en) - orderList.indexOf(b.name.en)
  );
