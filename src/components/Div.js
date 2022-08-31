import '../styles/page/div.scss';

function Div (props) {
    return (
        <div className='div'>
            <div className="div__container">
                <img className='div__img' src={props.photo} alt={props.photoName} />
                <h3 className='div__title'>
                {props.title}
                </h3>
                <p className='div__text'>
                {props.text}
                </p>
            </div>
        </div>
    )
}

Div.defaultProps = {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
}

export default Div;