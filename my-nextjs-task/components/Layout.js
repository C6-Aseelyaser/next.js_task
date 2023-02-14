/* eslint-disable react/jsx-no-undef */
import Account from "./Account";
import Navbar from "./Navbar";

const Layout =({children}) =>{
    console.log("child", children.props)
    return (
        <div className="layout">
            <Navbar  />
            {/* <Account/> */}
            {children}
        </div>
    )
        
    
}
export default Layout;