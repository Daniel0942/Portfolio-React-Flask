import styles from "./Interface.module.css"

function Interface(props) {
    return (
        <div className={`${styles.interface} ${styles[props.estilo1]} ${styles[props.estilo2]}`}>{props.children}</div>
    )
}
export default Interface