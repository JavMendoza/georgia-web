import PageWrapper from '../components/PageWrapper/PageWrapper';
import OrdersTable from '../components/OrdersTable/OrdersTable';
import { OrdersProvider } from '../context/Orders.Context';

function Home(props) {
  return (
    <PageWrapper>
      <OrdersProvider>
        <OrdersTable />
      </OrdersProvider>
    </PageWrapper>
  );
}

export default Home;
