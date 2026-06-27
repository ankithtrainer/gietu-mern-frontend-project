import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
   const navigate = useNavigate();

  const handleLogout = () => {
    
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
                  onClick={handleLogout}
                >
                  Logout
                </Link> 
     </div>
  )
}

export default Header