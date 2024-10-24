import Button from "../utilidades/Button"
import Interface from "../utilidades/Interface"
import styles from "./Sobre.module.css"
import { FaWhatsapp } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"

function Sobre() {
    return (
        <section className={styles.sobre} id="sobre">
            <Interface estilo2="margin-top">
                <div className={styles.caixa_txt}>
                    <h2>MUITO PRAZER,<br/><span>SOU DANIEL BOMFIM.</span></h2>
                    <p>Desenvolvedor Full Stack com experiência em React.js para o front-end e Flask (Python) no back-end. Especializado em manipulação de dados com SQLite3. Experiência em criação de aplicações web responsivas, integração de APIs e uso de Git/GitHub para controle de versão.</p>
                    <a href="https://wa.me/5579991488533" target="blank">
                        <Button txt={ <FaWhatsapp/> }/>
                    </a>
                    <a href="https://github.com/Daniel0942" target="blank">
                        <Button txt={ <FaGithub/> }/>
                    </a>
                    <a href="https://www.linkedin.com/in/daniel-bomfim-219196230/" target="blank">
                        <Button txt={ <FaLinkedin/> }/>
                    </a>
                </div>
            </Interface>
        </section>
    )
}
export default Sobre