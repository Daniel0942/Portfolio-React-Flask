import styles from "./Button.module.css"

function Button({ PIXEL, txt }) {
    return (
        <button type="submit" className={styles.btn} id="PIXEL">{txt}</button>
    )
}
export default Button