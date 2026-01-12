import { NavLink } from "react-router-dom";

export default function NavBar(){
    return(
       <section className="App">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white fixed-top">
            <section className="container">
                <NavLink to = "/" id="Haut">
                    <img src="../assets/logo.png" alt="Logo" width="50" height="50"/>
                </NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <section className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto gap-lg-3">
                        <li className="nav-item">
                            <NavLink to = "/" className={({ isActive }) => "nav-link text-uppercase" + (isActive ? " active" : "")}>
                                Accueil</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to = "/services" className={({ isActive }) => "nav-link text-uppercase" + (isActive ? " active" : "")}>
                                Services</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to = "/realisations" className={({ isActive }) => "nav-link text-uppercase" + (isActive ? " active" : "")}>
                                Réalisations</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to = "/blog" className={({ isActive }) => "nav-link text-uppercase" + (isActive ? " active" : "")}>
                                Blog</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to = "/contact" className={({ isActive }) => "nav-link text-uppercase" + (isActive ? " active" : "")}> 
                                Me contacter</NavLink>
                        </li>
                    </ul>
                </section>   
            </section>
        </nav>
        
       </section>   
    );
}