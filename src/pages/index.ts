import Loading from '@biz-components/Loading';
import * as Loadable from 'react-loadable';

export const Main = Loadable({
  // tslint:disable-next-line:space-in-parens
  loader: () => import(/* webpackChunkName: "login" */'./Main'),
  loading: Loading,
});

export const MainAssets = Loadable({
  // tslint:disable-next-line:space-in-parens
  loader: () => import(/* webpackChunkName: "login" */'./MainAssets'),
  loading: Loading,
});
