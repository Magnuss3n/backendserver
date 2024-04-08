import React from 'react';
import './Hero.css';
import arrow_icon from '../Assets/arrow.png';
import tshirtvid from '../Assets/backgroundvid.mov';

const Hero = () => {
    return (
        <div className='hero'>
            <div className='video-container'>
                <video autoPlay loop muted playsInline className='back-video'>
                    <source src={tshirtvid} type="video/mp4" />
                </video>
            </div>
            <div className='content'>
                <div className='hero-left'>
                    <h2>New Arrivals Only</h2>
                    <div>
                        <div className='hand-hand-icon'>
                            <p>new</p>
                        </div>
                        <p>collections</p>
                        <p> for everyone</p>
                    </div>
                    <div className="hero-latest-btn">
                        <div>Latest Collection</div>
                        <img src={arrow_icon} alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;
