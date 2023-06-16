
import { Link } from "react-router-dom"
import "./navbar.css"

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navContainer">
            
            <div className="logoContainer">
                <Link className="Home" to="/">
               <img src="https://res.cloudinary.com/dbenwgwfn/image/upload/v1684087408/Cancheros-Map/cancheros%20logos/logo.png" alt="" className="logo" ></img>
                </Link>
                </div>
               <div className="navItems">
               <button className="navButton">Registrarse</button>
               <button className="navButton">Iniciar sesión</button>
               
               </div>
            </div>
        </div>
    )
}

export default Navbar