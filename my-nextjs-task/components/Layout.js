/* eslint-disable react/jsx-no-undef */
import Navbar from "./Navbar";

const Layout =({children}) =>{
    console.log("child", children.props.products)
    return (
        <div className="layout">
            <Navbar  />
            {children}
        </div>
    )
        
    
}
export default Layout;