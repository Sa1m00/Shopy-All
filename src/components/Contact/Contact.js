import {useRef} from 'react';
import './Contact.css'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0pc6rlh', 'template_xymdcuk', form.current, 'AKezPxoB2aVhN6TUu')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
    <div className='container-contact'>
      <h2 className='title-contact'>Keep in Touch</h2>
      <form ref={form} onSubmit={sendEmail} className='form-contact'>
        <input type='text' className='input-contact' placeholder='Full Name'
         name='user_name' required/>
         <input type='email' className='input-contact' placeholder='Email'
         name='user_email' required/>
         <input type='text' className='input-contact' placeholder='Subject'
         name='subject' required/>
         <textarea placeholder='Write your message...'
         name='message' cols='30' rows='10' required></textarea>
         <button className='button-35' type='submit'>Send Message</button>
      </form>
      <div className='modi-contact'>
        <h2>SOLUZIONI RAPIDE</h2>
        <p className='paragrafo-contact'>Le risposte alle domande più frequenti sono a portata di clic.</p>
        <hr></hr>
        <div className='contact-cards'>
          <div className='contact-card'>
          <h3>SPEDIZIONE E CONSEGNA</h3>
          <p>Come posso usufruire della spedizione gratuita sugli ordini Shpy All?</p>
          <p>Quali sono le opzioni di spedizione di Shopy All?</p>
         </div>
         <div className='contact-card'>
          <h3>RESTITUZIONI</h3>
          <p>Qual è la politica dei resi di Shopy All?</p>
          <p>Come posso restituire il mio ordine Shopy All?</p>
          <p>Dov'è il mio rimborso?</p>
         </div>
         <div className='contact-card'>
          <h3>MEMBERSHIP SHOPY ALL</h3>
          <p>Cos'è la membership Shopy All?</p>
          <p>Come si diventa Member Shopy All?</p>
         </div>
         <div className='contact-card'>
          <h3>ORDINI</h3>
          <p>Come si diventa Member Shopy All?</p>
          <p>Cos'è la membership Shopy All?</p>
         </div>
         <div className='contact-card'>
          <h3>INFO SUL PRODOTTO</h3>
          <p>Dov'è il mio ordine Shopy All?</p>
          <p>Posso modificare o annullare il mio ordine su Shopy All?</p>
          <p>Shopy All offre sconti per studenti?</p>
         </div>
         <div className='contact-card'>
          <h3>AZIENDE</h3>
          <p>Dove posso trovare maggiori informazioni su Shopy All?</p>
          <p>Dove si trova il Shopy All Store più vicino a me?</p>
         </div>
         </div>
         </div>
      </div>
  )
}

export default Contact
