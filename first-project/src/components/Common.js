import Logo from "./Image";

class Common{
    NavBar(){
        return(
          <nav className="navbar">
            <ul className="nav-list">
                <li className="nav-item">
                    <a className="Logo">
                        <Logo></Logo>
                    </a>
                </li>
                <li className="nav-item">
                    <ul className="nav-sub-list">
                        <li className="nav-item">
                            <a href="#" class="nav-link"> Home </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" class="nav-link"> About </a>
                        </li>
                    </ul>
                </li>
            </ul>
          </nav>
        );
    }
     
    Footer(){
        return(
            <div class="Footer"></div>
        );
    }
}


export default Common