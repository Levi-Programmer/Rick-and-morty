import '../App.css'
import {Link} from 'react-router-dom'



function NavBar() {

  return (
   <nav class="navbar navbar-dark bg-primary">
    <div>
    <Link to={'/'} style={{color: "white", textDecoration: "none", paddingLeft: "30px"}}>Home</Link>
    <Link to={'/history'} style={{color: "white",textDecoration: "none", paddingLeft: "30px"}}>History</Link>
    </div>
  </nav> 
  )
};

export default NavBar;
