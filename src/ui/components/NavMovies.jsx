import { Link } from "react-router-dom"

export const NavMovies = () => {


    return(
        <>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            <div className="navbar-collapse">
               <div className="navbar-nav">
                    <div className="">
                       <Link 
                            className="nav-item nav-link" 
                            to="/marvel-movies"
                        >
                            Marvel 
                        </Link> 
                    </div>
                    <div>
                        <Link
                        className="nav-item nav-link" 
                        to="/dc-movies"
                        >
                            DC
                        </Link>
                    </div>
                    

                    
                </div>   
            </div>
             
        </nav>
        </>
    )
}