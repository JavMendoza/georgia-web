import PageWrapper from '../components/PageWrapper/PageWrapper';
import RepartidoresTable from '../components/RepartidoresTable/RepartidoresTable';
import { UsersProvider } from '../context/Users.Context';

function Home(props) {
  return (
    <PageWrapper>
      <UsersProvider>
        <RepartidoresTable />
      </UsersProvider>
    </PageWrapper>
  );
}

export default Home;
