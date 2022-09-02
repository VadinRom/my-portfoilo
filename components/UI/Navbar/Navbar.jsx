import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context";
import MyButton from "../button/MyButton";
import { faHouseUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
    const { setIsAuth } = useContext(AuthContext);

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth')
    }

    return (
        <div className="navbar">
            <MyButton onClick={logout} style={{ marginRight: 50 }}>
                Exit
            </MyButton>
            <div className="navbar__home">
                <Link to="/about" style={{ textDecoration: 'none', color: 'black' }}>
                    <FontAwesomeIcon icon={faHouseUser} />
                    PORTFOLIO OF VADIM ROMANENKO
                    <FontAwesomeIcon icon={faHouseUser} />
                </Link>
            </div>
        </div>

    );
}

export default Navbar;