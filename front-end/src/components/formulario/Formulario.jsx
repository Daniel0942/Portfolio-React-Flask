import Interface from "../../components/utilidades/Interface"
import Button from "../../components/utilidades/Button"
import Mensagem from "../../components/utilidades/Mensagem"
import styles from "./Formulario.module.css"
import axios from "axios"
import { useState } from "react"
import Loading from "../../components/utilidades/Loading"

function Formulario() {
    let [nome, setNome] = useState("")
    let [email, setEmail] = useState("")
    let [contato, setContato] = useState("")
    let [msg, setMsg] = useState("")
    // mensagens de sucesso e erro
    let [sucessoMSG, setSucessoMSG] = useState(false)
    let [erroMSG, setErroMSG] = useState(false)
    // loading 
    let [loading, setLoading] = useState(false)

    function Enviar(e) { //função de enviar o form
        e.preventDefault()
        setLoading(true) // ativar Loading
        setSucessoMSG(false); // Ocultar mensagens anteriores
        setErroMSG(false); // Ocultar mensagens anteriores
        let novaMsg = { nome, email, contato, msg }

        axios.post("https://portfolio-react-flask.onrender.com/api", novaMsg)
            .then(response => {
                console.log(response.data)
                setNome("") //Limpar Formulario pós enviado
                setEmail("")
                setContato("")
                setMsg("")
                setSucessoMSG(true) // ativar msg de sucesso, após enviar dados
                // Remover mensagem de sucesso após 3 segundos
                setTimeout(() => {
                    setSucessoMSG(false);
                }, 3000);
                setLoading(false) // Remover loading se os dados forem enviados
            })
            .catch(error => {
                console.error("Ocorreu um erro ao enviar nova msg", error)
                setErroMSG(true)  // ativar msg de erro, caso der erro
                // Remover mensagem de erro após 3 segundos
                setTimeout(() => {
                    setErroMSG(false);
                }, 3000);
                setLoading(false) // Remover loading se os dados derem erro !
            })
    }

    // Disparar o evento 'Contato' no Facebook Pixel
    function contatoPIXEL() {
        fbq('track', 'Contact', {
            content_name: 'Formulário de Contato',
            status: 'Clique no botão de contato'
        });
    }
    
    return (
        <section className={styles.formulario}>
            <h2>FALA <span>COMIGO.</span></h2>
            <Interface>
                <form onSubmit={Enviar}> {/* será aqui o evento */}
                    <input type="text" placeholder="Seu Nome Completo"
                        onChange={(e) => setNome(e.target.value)} value={nome} required />

                    <input type="text" placeholder="Seu E-mail"
                        onChange={(e) => setEmail(e.target.value)} value={email} required />

                    <input type="number" placeholder="Seu Contato"
                        onChange={(e) => setContato(e.target.value)} value={contato} required />

                    <textarea placeholder="Sua Mensagem"
                        onChange={(e) => setMsg(e.target.value)} value={msg}></textarea>
                    <Button txt="Solicitar orçamento" onClick={contatoPIXEL}/>
                </form>
            </Interface>
            {loading && <Loading />}

            {sucessoMSG && <Mensagem
                txt="Mensagem enviado com sucesso !" tipo="sucesso" />}

            {erroMSG && <Mensagem
                txt="Erro ao enviar, tente novamente" tipo="erro" />}
        </section>
    )
}
export default Formulario