import Interface from "../../components/utilidades/Interface"
import Button from "../../components/utilidades/Button"
import styles from "./Formulario.module.css"

function Formulario() {
    function Enviar(e) { //função de enviar o form
        e.preventDefault()
    }
    return (
        <section className={styles.formulario}>
            <Interface estilo2="margin-top">
                <form onSubmit={Enviar}> {/* será aqui o evento */}
                    <input type="text" placeholder="Seu nome Completo" name="nome" required/>
                    <input type="text" placeholder="Seu e-mail" name="email" required/>
                    <input type="number" placeholder="Seu contato" name="contato" required/>
                    <textarea  placeholder="Sua mensagem" name="msg"></textarea>
                    <Button txt="Enviar"/>
                </form>
            </Interface>
        </section>
    )
}
export default Formulario