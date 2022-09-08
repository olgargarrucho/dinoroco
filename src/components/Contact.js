import '../styles/page/contact.scss';
import { Link } from 'react-router-dom';

function Contact (props) {
    
    const handleInput = (ev) => {
        ev.preventDefault();
        const value = ev.target.value;
        const name = ev.target.name;
        props.handleInput(name,value);
    }

    const handleResset = (ev) => {
        ev.preventDefault();
        props.handleResset();
    }

    const handleSubmit = (ev) => {
        ev.preventDefault();
        props.handleResset();
        console.log('enviando datos');
    }
    
    return (
        <>
        <Link to='/' ><i className="fa-solid fa-left-long contact__icon"></i></Link>
            <div className="contact">
                <h2 className='contact__title'>Contact form</h2>
                <form className="contact__form" onSubmit={handleSubmit}>
                    <label htmlFor='name' className='contact__form--label' >Name:
                        <input type='text' name='name' id='name' placeholder='Ex. Mario GarcíaRodríguez' className='contact__form--input' value={props.dataContact.name} onChange={handleInput} />
                    </label>
                    <label htmlFor='email'className='contact__form--label'>Email:
                        <input type='email' name='email' id='email' placeholder='Ex. mario.rodriguez@example.com' className='contact__form--input' value={props.dataContact.email} onChange={handleInput} />
                    </label>
                    <label htmlFor='subject' className='contact__form--label' >Subject:
                        <input type='text' name='subject' id='subject' placeholder='Ex. Project info' className='contact__form--input' value={props.dataContact.subject} onChange={handleInput} />
                    </label>
                    <label htmlFor='message' className='contact__form--label'>Message:
                        <textarea name='message' id='message' placeholder='Ex. I would like more info about...' className='contact__form--textarea' value={props.dataContact.message} onChange={handleInput}/>
                    </label>
                    <div className='contact__form--buttons'>
                        <button type='submit' className='contact__form--buttons-submit' onClick={handleSubmit}>Send</button> 
                        <button type='resset' className='contact__form--buttons-resset'onClick={handleResset} >Resset</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Contact;