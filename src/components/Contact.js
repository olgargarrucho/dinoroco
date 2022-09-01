import '../styles/page/contact.scss';
import { Link } from 'react-router-dom';

function Contact () {
    return (
        <>
        <Link to='/' ><i className="fa-solid fa-left-long contact__icon"></i></Link>
            <div className="contact">
                <h2 className='contact__title'>Contact form</h2>
                <form className="contact__form">
                    <label htmlFor='name' className='contact__form--label' >Name:
                        <input type='text' name='name' id='name' placeholder='Ex. María García' className='contact__form--input' />
                    </label>
                    <label htmlFor='email'className='contact__form--label'>Email:
                        <input type='email' name='email' id='email' placeholder='Ex. maria.garcia@example.com' className='contact__form--input' />
                    </label>
                    <label htmlFor='subject' className='contact__form--label' >Subject:
                        <input type='text' name='subject' id='subject' placeholder='Ex. Proyect offer' className='contact__form--input' />
                    </label>
                    <label htmlFor='description' className='contact__form--label'>Message:
                        <textarea rows='5' cols='30' name='description' id='description' placeholder='Ex. I would like more information about...' className='contact__form--input'/>
                    </label>
                    <div className='contact__form--buttons'>
                        <button type='submit' className='contact__form--buttons-submit'>Send</button> 
                        <button type='resset' className='contact__form--buttons-resset'>Resset</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Contact;