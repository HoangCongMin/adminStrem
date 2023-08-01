import "./home.css"
import Header from "../../components/Header/header"
import Sidebar from "../../components/sidebar/sidebar"
import Content from "./content"
import Layout from "../../components/Layout"
const Home = () => {
  return (
    <div className="home">
        <Header/>
        <Sidebar/>
        <Layout>
          <Content/>
        </Layout>

    </div>
  )
}

export default Home
