import "./mailList.css"
import emailjs from '@emailjs/browser'

const MailList = () => {

    const sendEmail = (event) =>{

        event.preventDefault();

        emailjs.sendForm('service_aq0ycrj', 'template_zv9yek9',event.target,'4dSZoa3neoHEcpvYU')
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }

    return (
        <div className="mail">
            <h1 className="mailTitle">
                Ahorra tiempo, ahorra dinero!
            </h1>
            <span className="mailDesc">Inscribete y te enviaremos más ofertas</span>
            <form className="mailInputContainer" onSubmit={sendEmail}>
                <input type="text" placeholder="tu nombre" name='user_name'/>
                <input type="email" placeholder="tu correo" name='user_email'/>
                <button>Suscribete</button>
            </form>
        </div>
    )
}

export default MailList