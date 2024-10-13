import Button from "../utilidades/Button"
import Interface from "../utilidades/Interface"
import styles from "./Sobre.module.css"
import { FaWhatsapp } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"

function Sobre() {
    return (
        <section className={styles.sobre}>
            <Interface estilo2="margin-top">
                <div className={styles.caixa_txt}>
                    <h2>MUITO PRAZER,<br/><span>SOU DANIEL BOMFIM.</span></h2>
                    <p>Desenvolvedor Full Stack com experiência em React.js para o front-end e Flask (Python) no back-end. Especializado em manipulação de dados com SQLite3. Experiência em criação de aplicações web responsivas, integração de APIs e uso de Git/GitHub para controle de versão.</p>
                    <Button txt={ <FaWhatsapp/> }/>
                    <Button txt={ <FaGithub/> }/>
                    <Button txt={ <FaLinkedin/> }/>
                </div>
            </Interface>
        </section>
    )
}
export default Sobre