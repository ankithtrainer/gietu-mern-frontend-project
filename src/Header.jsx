import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
   const navigate = useNavigate();

  const handlelogout = () => {
    
  localStorage.removeItem("token");
  navigate("/login");
};
  return (
    <div>
        <h5 style={{ color: "blue" }}>
      This is header component
    </h5>  


      <Link
                  to="/logout" 
                  className="ms-2"
                  handleLogout
                  onClick={handlelogout}
                >
                  Logout
                </Link> 
     </div>
  )
}

export default Header