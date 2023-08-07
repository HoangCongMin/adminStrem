import Header from '../../components/Header/header';
import Layout from '../../components/Layout';
import Sidebar from '../../components/Sidebar/Sidebar';
import Dhcontent from './dhcontent';
const Dashboard = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <Layout>
        <Dhcontent/>
      </Layout>
    </>
  );
};

export default Dashboard;
