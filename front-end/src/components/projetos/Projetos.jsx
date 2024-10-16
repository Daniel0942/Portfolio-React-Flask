import Interface from "../../components/utilidades/Interface"
import styles from "./Projetos.module.css"
import listaDeTarefasImg from '../../img/lista_de_tarefas.png'
import Button from "../../components/utilidades/Button"
import ceunoturnomistico from '../../img/ceu_noturno_mistico.png'

function Projetos() {
    return (
        <section className={styles.projetos} id="projetos">
            <h2>MEUS <span>PROJETOS.</span></h2>
            <Interface estilo1="flex">
                <div className={styles.container}>
                    <div
                    className={`${styles.projeto_box} ${styles.primeiro}`}
                    style={{ backgroundImage: `url(${listaDeTarefasImg})`}}>
                        <div className={styles.overlay}>Projeto 1</div>
                    </div>
                    <a href="https://github.com/Daniel0942/Lista_de_tarefas_React.js" target="blank"><Button txt="Repositório"/></a>
                    <a href="https://lista-de-tarefas-react-js-seven.vercel.app/" target="blank"><Button txt="Site"/></a>
                </div>

                <div className={styles.container}>
                    <div
                    className={`${styles.projeto_box} ${styles.segundo}`}
                    style={{ backgroundImage: `url(${ceunoturnomistico})`}}>
                        <div className={styles.overlay}>Projeto 2</div>
                    </div>
                    <a href="https://github.com/Daniel0942/Ceu_Noturno_Mistico" target="blank"><Button txt="Repositório"/></a>
                    <a href="#" target="blank"><Button txt="Site"/></a>
                </div>
            </Interface>
        </section>
    )
}
export default Projetos