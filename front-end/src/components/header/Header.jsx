import { FaReact } from "react-icons/fa"
import { SiFlask } from "react-icons/si"
import { FaPython } from "react-icons/fa"
import { DiJavascript } from "react-icons/di"
import styles from "./Header.module.css"

function Header() {
    return (
        <header>
            <div className={styles.interface}>
                <li><FaReact/></li>
                <li><DiJavascript /></li>
                <li><SiFlask/></li>
                <li><FaPython/></li>
                
            </div>
        </header>
    )
}
export default Header