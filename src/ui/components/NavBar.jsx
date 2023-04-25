import { useContext } from 'react';
import { Link, NavLink , useNavigate} from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';


export const Navbar = () => {

    const { user, logout } = useContext( AuthContext )
    console.log(user)

    const navigate = useNavigate();

    const onLogout = () => {
        logout();
        navigate('/login', {
            replace: true
        })
        
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                <img className="img-pokemon animate__animated animate__wobble" src="https://scottishcomicstudies.files.wordpress.com/2014/04/cropped-sccs-logo.png" alt="" />
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className="nav-item nav-link" 
                        to="/marvel"
                    >
                        Marvel 
                    </NavLink>

                    <NavLink 
                        className="nav-item nav-link" 
                        to="/Dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        className="nav-item nav-link" 
                        to="/search"
                    >
                        Search
                    </NavLink>

                    <NavLink 
                        className="nav-item nav-link" 
                        to="/movies"
                    >
                        Movies
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-item nav-link text-info'>
                        {user?.name}
                    </span>
                    <button className='nav-item nav-link btn'
                            onClick={ onLogout }> 
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}