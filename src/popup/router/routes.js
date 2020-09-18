import PageIndex from './pages/Index';
import Forms from './pages/forms';
import PRform from './pages/PRform';
import ReplyEntry from './pages/components/replyEntry';
import Edit from './pages/components/edit';
import Enumerator from './pages/components/enumerator';
import EditEnum from './pages/components/editEnum';


export default [{
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
  {
    path: '/enumerator',
    component: Enumerator,
  },
  {
    path: '/editEnum',
    component: EditEnum,
  },

];