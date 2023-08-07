
import "./sidebar-item.css"

const SidebarItem = ({item}) => {
  return (
    
    <><div>
    {item.map(({id,name,typeIcon,nameIcon})=>
        (
            
            <>
                <div key={id} className="box-sidebar">
                    <a href="">
                        <div  className="sidebar-item"><box-icon color="grey" size="30px" type={typeIcon} name={nameIcon}></box-icon></div>
                        <span>{name}</span>
                    </a>
                    
                </div>
                
            </>
            
        )
    )}
    

</div>
        <div  className="box-sidebar">
    <a href="">
        <div  className="sidebar-item"><box-icon color="grey" name='log-out'></box-icon></div>
        <span>logout</span>
    </a>
    </div>
    </>
    
  )
  
}

export default SidebarItem
