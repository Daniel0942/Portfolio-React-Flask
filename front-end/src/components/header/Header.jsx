import { FaReact } from "react-icons/fa"
import { SiFlask } from "react-icons/si"
import { FaPython } from "react-icons/fa"
import { DiJavascript } from "react-icons/di"
import styles from "./Header.module.css"
import Interface from "../utilidades/Interface"
import Button from "../utilidades/Button"

function Header() {
    return (
        <header className={styles.container}>
            <Interface estilo1="flex" estilo2="space-between">
                <nav className={styles.icones_logo}>
                    <ul>
                        <li><FaReact/></li>
                        <li><DiJavascript /></li>
                        <li><SiFlask/></li>
                        <li><FaPython/></li>
                    </ul>
                </nav>

                <nav className={styles.menu}>
                    <ul>
                        <li>Inicio</li>
                        <li>Especialidade</li>
                        <li>Sobre</li>
                        <li>Projetos</li>
                    </ul>
                </nav>

                <div className={styles.contato}>
                    <a href="#">
                        <Button txt="Contato"/>
                    </a>
                </div>
            </Interface>   
        </header>
    )
}
export default Header