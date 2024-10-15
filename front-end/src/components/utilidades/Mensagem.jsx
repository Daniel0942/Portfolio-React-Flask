import styles from "./Mensagem.module.css"

function Mensagem({ tipo, txt }) {
    return (
        <div className={`${styles.geral} ${styles[tipo]}`}>
            <p>{txt}</p>
        </div>
    )
}
export default Mensagem