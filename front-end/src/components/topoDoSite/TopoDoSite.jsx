import Interface from "../utilidades/Interface"
import Button from "../utilidades/Button"
import styles from "./TopoDoSite.module.css"
import foto_de_perfil from "../../img/foto_de_perfil.png"

function TopoDoSite() {
    return (
        <section className={styles.topoDoSite}>
            <Interface estilo1="flex" estilo2="space-between" estilo3="margin-top">
                <div className={styles.caixa_txt}>
                    <h1>Desenvolvedor Full Stack<span>.</span></h1>
                    <p>Com uma abordagem focada na inovação e na eficiência, garanto que cada projeto seja adaptado às necessidades específicas de cada cliente, sempre com o objetivo de superar expectativas.</p>
                    <a href="https://wa.me/5579996746102" target="blank"><Button txt="Entre em contato"/></a>
                </div>
                <div className={styles.foto}>
                    <img src={foto_de_perfil} alt="foto de perfil" />
                </div>
                
            </Interface>
        </section>
        
    )
}
export default TopoDoSite