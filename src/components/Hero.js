import '../styles/page/hero.scss';

import { Link } from 'react-router-dom';

function Hero () {
    return (
        <div className="hero">
            <div className="hero__container hero__container--text">
                <h1 className="hero__title">Dinoroco <spam className='hero__title--spam'>Studios</spam></h1>
                <p className="hero__text">A Spanish software company<spam className='hero__text--spamDate'> founded in 2021</spam> dedicated to developing applications for<spam className='hero__text--spam'> iOS</spam>. Throughout all this time we have been able to work on many projects that have made us grow as a company.</p>
                <p className="hero__text">We develop native applications using the frameworks and design patterns most demanded by the market. <spam className='hero__text--spam'>Our passion for what we do is our hallmark</spam>.</p>
                <div className="hero__buttons">
                    <Link className="hero__buttons--linkMore" to='/aboutus' >About us</Link>
                    <Link className="hero__buttons--linkContact" to='/contact' >Contact us</Link>
                </div>

            </div>
            <div className='hero__container hero__container--img'>
                
            </div>
        </div>
    )
}

export default Hero;