import "./header.css"
import avatar from "../../assets/img/icon.png"
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
      <box-icon name='star' size="70px"></box-icon>
      </div> 

      <div className="search">
      <div className="icon-search">
      <box-icon name='search-alt-2' size="30px" rotate="90" animation="flashing" ></box-icon>
      </div>
      <input className="inp-search" type="text" placeholder="search" /> 
      </div>

      <div className="box-user">
        <div className="notify">
          <a href=""><box-icon name='bell' size="30px" color="grey"></box-icon></a>
        </div>

        <div className="user">
          <a href=""><img src={avatar} alt="" /></a>
        </div>
      </div>

    </div>
  )
}

export default Header
