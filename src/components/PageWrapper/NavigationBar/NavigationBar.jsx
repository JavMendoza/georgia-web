import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ListAltIcon from '@mui/icons-material/ListAlt';
import LogoutIcon from '@mui/icons-material/Logout';
import ListItemText from '@mui/material/ListItemText';
import GroupIcon from '@mui/icons-material/Group';

import { DrawerHeader, drawerWidth } from '../PageWrapper';
import { useAuth } from "../../../context/Auth.Context";

const pages = [
  { name: 'Home', url: '/', icon: <HomeIcon /> }, 
  { name: 'Perfil', url: '/perfil', icon: <AccountCircleIcon /> },
  { name: 'Pedidos', url: '/pedidos', icon: <ListAltIcon /> },
  { name: 'Usuarios', url: '/usuarios', icon: <GroupIcon /> },
  { name: 'Crear Usuario Repartidor', url: '/nuevo-repartidor', icon: <PersonAddIcon /> }
];

function NavigationBar(props) {
  const theme = useTheme();
  const { logOut } = useAuth();

  function handleLogOut() {
    logOut();
  }

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant="persistent"
      anchor="left"
      open={props.open}
    >
      <DrawerHeader>
        <IconButton onClick={props.onClickCloseButton}>
          {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {pages.map((page, index) => (
          <ListItem button key={index}>
            <ListItemIcon>
              {page.icon}
            </ListItemIcon>
            <Link className="linkoutstyled" to={page.url}>{page.name}</Link>
          </ListItem>
        ))}
        <ListItem button onClick={handleLogOut}>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Log Out" className="logout" />
        </ListItem>
      </List>
    </Drawer>
  )
}

export default NavigationBar