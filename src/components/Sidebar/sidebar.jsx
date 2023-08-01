import "./sidebar.css"
import SidebarItem from "../Sidebar-item/sidebar-item"
const Sidebar = () => {
    const item = [
        {id:1,name:"Dashboard",typeIcon:"solid",nameIcon:"dashboard"},
        {id:2,name:"user",typeIcon:"solid",nameIcon:"user"},
        {id:3,name:"product",typeIcon:"logo",nameIcon:"product-hunt"},
    ]
  return (
    
    <div className="sidebar">
        <div className="item-sidebar">
            <SidebarItem item={item}/>
           
            {/* <div className="pages">
                <div><box-icon type='solid' name='dashboard'></box-icon></div>
                <span>Dashboard</span>
            </div>
            <div className="user">
                <div>
                <box-icon type='solid' name='user'></box-icon>
                </div>
                IUser
            </div>
            <div className="product">
                <div>
                <box-icon type='logo' name='product-hunt'></box-icon>
                </div>
                Product
            </div>
            <div className="logout">
                <div>
                <box-icon name='log-out'></box-icon>
                </div>
                logout
            </div> */}

        </div>
    </div>
  )
}

export default Sidebar