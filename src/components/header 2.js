function Header2(){
   
    return(
        <header>
            <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                
                <ul className="navbar-nav mb-lg-0 ms-1">
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                CATEGORY
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#"></a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
                </li>
                </ul>

                <ul className="navbar-nav mb-lg-0 ms-auto">
                <li className="nav-item leftHead">
                    <a className="nav-link" href="#">SIGN UP</a></li>
                <li className="nav-item ">
                <a className="nav-link" href="#">LOG IN</a></li>
                <li className="nav-item ">
                <a className="nav-link fw-normal" href="#">ABOUT US</a></li>
                </ul>

                </div>
            </div>
            </nav>
        </header>
    )
}
export default Header2;