import styles from "./Interface.module.css"

function Interface(props) {
    return (
        <div className={`${styles.interface} ${styles[props.estilo1]} ${styles[props.estilo2]} ${styles[props.estilo3]}`}>{props.children}</div>
    )
}
export default Interface