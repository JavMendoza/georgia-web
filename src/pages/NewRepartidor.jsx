import PageWrapper from '../components/PageWrapper/PageWrapper';
import NewRepartidorForm from '../components/NewRepartidorForm/NewRepartidorForm';
import { UsersProvider } from "../context/Users.Context";

function NewRepartidor(props) {
  return (
    <PageWrapper>
      <UsersProvider>
        <NewRepartidorForm />
      </UsersProvider>
    </PageWrapper>
  );
}

export default NewRepartidor;
