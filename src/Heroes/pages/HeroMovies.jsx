import { Link } from "react-router-dom"

export const HeroMovies = () => {

    return(
        <>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            <div className="navbar-collapse">
               <div className="navbar-nav">
                    <div clas>
                       <Link 
                            className="nav-item nav-link" 
                            to="/marvel"
                        >
                            Marvel 
                        </Link> 
                    </div>
                    <div>
                        <Link
                        className="nav-item nav-link" 
                        to="/dc"
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