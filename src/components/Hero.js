import '../styles/page/hero.scss';
import coverPhoto from '../images/cover.webp'

function Hero () {
    return (
        <div className="hero">
            <div className="hero__container">
                <h1 className="hero__title">Title</h1>
                <p className="hero__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                <div className="hero__buttons">
                    <a className="hero__buttons--linkMore" href='' alt='Learn more' target='_blank' > Learn more</a>
                    <a className="hero__buttons--linkContact" href='' alt='Contact us' target='_blank'>Contact us</a>
                </div>

            </div>
            <div className='hero__container'>
                <img className='hero__img' src={coverPhoto} alt='Cover photo' />
            </div>
        </div>
    )
}

export default Hero;