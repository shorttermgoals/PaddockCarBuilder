import { Link } from "react-router-dom"

function Header(){
    return <div className="header">
        <Link to="/home">
            <img
            src="../PCBLogo.png"
            alt="Paddock Car Builder logo"/>
        </Link>
    </div>
}

export default Header