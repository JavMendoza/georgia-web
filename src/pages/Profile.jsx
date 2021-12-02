import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import PageWrapper from '../components/PageWrapper/PageWrapper';
import { useAuth } from '../context/Auth.Context';


function Profile(props) {
  const { authState } = useAuth();

  return (
    <PageWrapper>
      <List sx={{ width: '100%' }} className="profile-list">
        <ListItem>
          <h4 className="profile-list-title">Nombre: </h4>
          <ListItemText primary={authState.user.nombre} />
        </ListItem>
        <ListItem>
          <h4 className="profile-list-title">Apellido: </h4>
          <ListItemText primary={authState.user.apellido} />
        </ListItem>
        <ListItem>
        <h4 className="profile-list-title">Email: </h4>
          <ListItemText primary={authState.user.email} />
        </ListItem>
        <ListItem>
        <h4 className="profile-list-title">Numero de cuit: </h4>
          <ListItemText primary={authState.user.cuit} />
        </ListItem>
        <ListItem>
        <h4 className="profile-list-title">Rol: </h4>
          <ListItemText primary={authState.user.rol} />
        </ListItem>
      </List>
    </PageWrapper>
  );
}

export default Profile;
