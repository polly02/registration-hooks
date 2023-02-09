import { Link } from "react-router-dom"
import style from "./Header.module.css"

function Header() {
    return (
        <div className={style["wrapper"]}>
            <Link to="/reg" >REGISTRATION</Link>
            <Link to="/" >AUTHORIZATION</Link>
        </div>
    )
}

export default Header