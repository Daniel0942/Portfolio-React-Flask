import styles from "./Loading.module.css"
import loading from "../../img/loading.svg"

function Loading() {
    return(
        <div className={styles.container}>
            <img className={styles.loader} src={loading} alt="Carregamento"/>
        </div>
    )
}
export default Loading