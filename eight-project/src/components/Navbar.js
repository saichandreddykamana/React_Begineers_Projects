import '../style/Navbar.css';

const Navbar = () => {
    return (
        <div className="Navbar">
            <img src={process.env.PUBLIC_URL + `/Images/Icons/World.png`} alt="World icon"/>
            <h1>My Travel Journal</h1>
        </div>
    )
}

export default Navbar;