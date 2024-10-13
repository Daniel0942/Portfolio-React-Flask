import { FaReact } from "react-icons/fa"
import { SiFlask } from "react-icons/si"
import { FaPython } from "react-icons/fa"
import { DiJavascript } from "react-icons/di"
import styles from "./Header.module.css"
import Interface from "../utilidades/Interface"
import Button from "../utilidades/Button"

function Header() {
    return (
        <header className={styles.container} id="inicio">
            <Interface estilo1="flex" estilo2="space-between">
                <nav className={styles.icones_logo}>
                    <ul>
                        <li><FaReact className={styles.react}/></li>
                        <li><DiJavascript className={styles.js}/></li>
                        <li><SiFlask className={styles.flask}/></li>
                        <li><FaPython className={styles.python}/></li>
                    </ul>
                </nav>

                <nav className={styles.menu}>
                    <ul>
                        <a href="#inicio"><li>Inicio</li></a>
                        <a href="#especialidades"><li>Especialidades</li></a>
                        <a href="#sobre"><li>Sobre</li></a>
                        <a href="#projetos"><li>Projetos</li></a>
                    </ul>
                </nav>

                <div className={styles.contato}>
                    <a href="https://wa.me/5579996746102" target="blank">
                        <Button txt="Contato"/>
                    </a>
                </div>
            </Interface>   
        </header>
    )
}
export default Header