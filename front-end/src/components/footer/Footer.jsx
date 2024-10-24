import { FaReact } from "react-icons/fa"
import { SiFlask } from "react-icons/si"
import { FaPython } from "react-icons/fa"
import { DiJavascript } from "react-icons/di"
import { FaWhatsapp } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { MdOutlineMail } from "react-icons/md"
import styles from "./Footer.module.css"
import Interface from "../../components/utilidades/Interface"
import Button from "../../components/utilidades/Button"

function Footer() {
    return (
        <footer className={styles.rodape}>
            <Interface  estilo1="flex-wrap" estilo2="flex" estilo3="space-between">
                <nav className={styles.icones_logo}>
                    <ul>
                        <li><FaReact className={styles.react} /></li>
                        <li><DiJavascript className={styles.js} /></li>
                        <li><SiFlask className={styles.flask} /></li>
                        <li><FaPython className={styles.python} /></li>
                    </ul>
                </nav>

                <div className={styles.icones_link}>
                    <a href="https://wa.me/5579991488533" target="blank">
                        <Button txt={<FaWhatsapp />} />
                    </a>
                    <a href="https://github.com/Daniel0942" target="blank">
                        <Button txt={<FaGithub />} />
                    </a>
                    <a href="https://www.linkedin.com/in/daniel-bomfim-219196230/" target="blank">
                        <Button txt={<FaLinkedin />} />
                    </a>
                </div>
            </Interface>

            <Interface>
                <div className={`${styles.icones_email} ${styles.linha}`}>
                        <p>
                            <a href="mailto:danielufc131@gmail.com" target="blank"> 
                                <MdOutlineMail/> danielufc131@gmail.com
                            </a>
                        </p>
                    </div>
            </Interface>
        </footer>
    )
}
export default Footer