import styles from "./Button.module.css"

function Button({txt}) {
    return (
        <button type="submit" className={styles.btn}>{txt}</button>
    )
}
export default Button