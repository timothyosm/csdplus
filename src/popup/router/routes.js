import PageIndex from './pages/Index';
import Forms from './pages/forms';
import PRform from './pages/PRform';
import ReplyEntry from './pages/components/replyEntry';
import Edit from './pages/components/edit';
import EDUform from './pages/EDUform';
import LGform from './pages/LGform';

export default [
  {
    path: '/',
    component: PageIndex,
  },
  {
    path: '/form',
    component: Forms,
  },
  {
    path: '/PRform',
    component: PRform,
  },
  {
    path: '/EDUform',
    component: EDUform,
  },
  {
    path: '/LGform',
    component: LGform,
  },
  {
    path: '/replyEntry',
    component: ReplyEntry,
  },
  {
    path: '/edit',
    component: Edit,
  },
];
