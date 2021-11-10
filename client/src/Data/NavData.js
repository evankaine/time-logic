import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import TimerIcon from '@mui/icons-material/Timer';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';

export const NavData = [
  {
    title: 'Home',
    icon: <HomeOutlinedIcon/>,
    path: '/',
    className: 'navbar-text'
  },
  {
    title: 'Alarm',
    icon: <AccessAlarmIcon/>,
    path: '/alarm',
    className: 'navbar-text'
  },
  {
    title: 'Stopwatch',
    icon: <TimerIcon/>,
    path: '/stopwatch',
    className: 'navbar-text'
  },
  {
    title: 'Timer',
    icon: <AvTimerIcon/>,
    path: '/timer',
    className: 'navbar-text'
  },
  {
    title: 'Counter',
    icon: <CheckCircleOutlineOutlinedIcon/>,
    path: '/counter',
    className: 'navbar-text'
  }
]