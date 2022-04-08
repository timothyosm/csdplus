import PageIndex from './pages/Index';
import Forms from './pages/forms';
import PRform from './pages/PRform';
import ReplyEntry from './pages/components/replyEntry';
import Edit from './pages/components/edit';

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
    path: '/replyEntry',
    component: ReplyEntry,
  },
  {
    path: '/edit',
    component: Edit,
  },
];
