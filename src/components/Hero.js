import '../styles/page/hero.scss';
import coverPhoto from '../images/cover.png'
import { Link } from 'react-router-dom';

function Hero () {
    return (
        <div className="hero">
            <div className="hero__container hero__container--text">
                <h1 className="hero__title">Dinoroco <spam className='hero__title--spam'>Studios</spam></h1>
                <p className="hero__text">Spanish software company<spam className='hero__text--spamDate'> founded in 2016</spam> and dedicated to develop applications for<spam className='hero__text--spam'> iOS and macOS</spam>. Throughout all this time we have been able to work on a multitude of projects that have made us grow as a company.</p>
                <p className="hero__text">We develop native applications in both Objective-C and Swift languages, using the frameworks and design patterns most demanded by the market: <spam className='hero__text--spam'>SwiftUI, RxSwift, MVVM, VIPER,</spam> etc. Our passion for what we do is our hallmark.</p>
                <div className="hero__buttons">
                    <Link className="hero__buttons--linkMore" to='/aboutus' >About us</Link>
                    <Link className="hero__buttons--linkContact" to='/contact' alt='Contact us' target='_blank'>Contact us</Link>
                </div>

            </div>
            <div className='hero__container hero__container--img'>
                <img className='hero__img' src={coverPhoto} alt='Cover photo' />
            </div>
        </div>
    )
}

export default Hero;