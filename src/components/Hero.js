/* eslint-disable jsx-a11y/anchor-is-valid */
import '../styles/page/hero.scss';

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
            <img src='' alt='Cover photo' />

        </div>
    )
}

export default Hero;