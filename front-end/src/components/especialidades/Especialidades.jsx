
import { AiFillChrome } from "react-icons/ai"
import { FaRobot } from "react-icons/fa"
import { SiSqlite } from "react-icons/si"
import Interface from "../utilidades/Interface"
import styles from "./Especialidades.module.css"

function Especialidades() {
    return (
        <section className={styles.especialidades}>
            <h1>Minhas <span>Especialidades.</span></h1>
            <Interface estilo1="flex">
                <div className={styles.box}>
                    <AiFillChrome/>
                    <h3>Desenvolvimento Full Stack</h3>
                    <li><strong>Front-end: </strong>Criação de interfaces modernas e interativas com React, otimizadas para performance e experiência do usuário.</li>
                    <li><strong>Back-end: </strong>APIs e servidores robustos utilizando Flask, integrando lógica de negócios e conectividade de banco de dados.</li>
                </div>
                <div className={styles.box}>
                    <SiSqlite />
                    <h3>Banco de Dados</h3>
                    <li><strong>SQLite3: </strong>Utilização de bancos de dados leves e eficientes, ideais para protótipos rápidos e aplicações com menor escala.</li>
                </div>
                <div className={styles.box}>
                    <FaRobot/>
                    <h3>Automação e Scripts</h3>
                    <li><strong>Automação de Processos: </strong> Desenvolvimento de scripts com Python para otimizar fluxos de trabalho e automatizar tarefas repetitivas, resultando em eficiência operacional.</li>
                </div>
            </Interface>
        </section>
    )
}
export default Especialidades