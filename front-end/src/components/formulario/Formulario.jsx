import Interface from "../../components/utilidades/Interface"
import Button from "../../components/utilidades/Button"
import styles from "./Formulario.module.css"
import axios from "axios"
import { useState } from "react"

function Formulario() {
    let [nome, setNome] = useState()
    let [email, setEmail] = useState()
    let [contato, setContato] = useState()
    let [msg, setMsg] = useState()

    function Enviar(e) { //função de enviar o form
        let novaMsg = {nome, email, contato, msg}

        e.preventDefault()
        axios.post("https://localhost:5000/api", novaMsg)
        .then(response => {
            (console.log(response.data))
            setNome("") //Limpar Formulario pós enviado
            setEmail("") 
            setContato("")
            setMsg("")
        })
        .catch(error => (console.error("Ocorreu um erro ao enviar nova msg", error)))
    }
    return (
        <section className={styles.formulario}>
            <h2>FALA <span>COMIGO.</span></h2>
            <Interface>
                <form onSubmit={Enviar}> {/* será aqui o evento */}
                    <input type="text" placeholder="Seu Nome Completo" 
                    onChange={(e)=> setNome(e.target.value)} required/>

                    <input type="text" placeholder="Seu E-mail" 
                    onChange={(e)=> setEmail(e.target.value)} required/>

                    <input type="number" placeholder="Seu Contato" 
                    onChange={(e)=> setContato(e.target.value)} required/>

                    <textarea  placeholder="Sua Mensagem" 
                    onChange={(e)=> setMsg(e.target.value)}></textarea>
                    <Button txt="Enviar"/>
                </form>
            </Interface>
        </section>
    )
}
export default Formulario