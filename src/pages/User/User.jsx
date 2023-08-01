import Header from '../../components/Header/header';
import Content from './Content';
import Layout from '../../components/Layout';
import Sidebar from '../../components/Sidebar/Sidebar';
const User = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <Layout>
        <Content />
      </Layout>
    </>
  );
};

export default User;
