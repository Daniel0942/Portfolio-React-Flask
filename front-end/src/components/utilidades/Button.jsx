import styles from "./Button.module.css"

function Button({ id_Pixels, txt }) {
    return (
        <button type="submit" className={styles.btn} id={id_Pixels}>{txt}</button>
    )
}
export default Button