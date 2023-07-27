import "./sidebar.css"
import SidebarItem from "../Sidebar-item/sidebar-item"
const Sidebar = () => {
    const item = [
        {id:1,name:"Dashboard",typeIcon:"solid",nameIcon:"dashboard"},
        {id:2,name:"user",typeIcon:"solid",nameIcon:"user"},
        {id:3,name:"product",typeIcon:"logo",nameIcon:"product-hunt"},
        {id:4,name:"logout" ,typeIcon:"",nameIcon:"log-out"},
    ]
  return (
    
    <div className="sidebar">
        <div className="item-sidebar">
            <SidebarItem item={item}/>
        </div>
    </div>
  )
}

export default Sidebar