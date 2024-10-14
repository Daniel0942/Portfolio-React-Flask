import Interface from "../../components/utilidades/Interface"
import Button from "../../components/utilidades/Button"
import styles from "./Formulario.module.css"

function Formulario() {
    function Enviar(e) { //função de enviar o form
        e.preventDefault()
    }
    return (
        <section className={styles.formulario}>
            <h2>FALA <span>COMIGO.</span></h2>
            <Interface>
                <form onSubmit={Enviar}> {/* será aqui o evento */}
                    <input type="text" placeholder="Seu Nome Completo" name="nome" required/>
                    <input type="text" placeholder="Seu E-mail" name="email" required/>
                    <input type="number" placeholder="Seu Contato" name="contato" required/>
                    <textarea  placeholder="Sua Mensagem" name="msg"></textarea>
                    <Button txt="Enviar"/>
                </form>
            </Interface>
        </section>
    )
}
export default Formulario