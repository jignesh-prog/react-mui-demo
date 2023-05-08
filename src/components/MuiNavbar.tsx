import { NavLink } from "react-router-dom";

export const MuiNavbar = () => {
  return (
    <nav>
      <NavLink to='/'>MuiLogin</NavLink>
      <NavLink to='/MuiDrawer'>MuiDrawer</NavLink>
    </nav>
  )
}

export default MuiNavbar
