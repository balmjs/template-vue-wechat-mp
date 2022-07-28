import { isMP } from '@/config';

import UiTopAppBar from '@/components/ui-top-app-bar';
import UiNavigationBar from '@/components/ui-navigation-bar';

import MpFlex from '@/components/mp-flex';
import MpFlexItem from '@/components/mp-flex-item';
import MpGrids from '@/components/mp-grids';
import MpGrid from '@/components/mp-grid';
import MpGridIcon from '@/components/mp-grid-icon';
import MpGridLabel from '@/components/mp-grid-label';
import MpArticle from '@/components/mp-article';
import MpFooter from '@/components/mp-footer';

const customComponents = [UiTopAppBar, UiNavigationBar];

const mpComponents = [
  MpFlex,
  MpFlexItem,
  MpGrids,
  MpGrid,
  MpGridIcon,
  MpGridLabel,
  MpArticle,
  MpFooter
];

export { customComponents, mpComponents };
