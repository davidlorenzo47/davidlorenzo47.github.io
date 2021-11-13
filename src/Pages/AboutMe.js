import React from 'react'
import Tittle from '../Components/Title';
import ImageSection from '../Components/ImageSection';
import ServicesSection from '../Components/Services';
import wd from '../Assets/wd.svg';
import da from '../Assets/da.svg';
import ml from '../Assets/ml.svg';
import cs from '../Assets/cs.svg';
// import intelligence from '../img/intelligence.svg';
// import gamedev from '../img/game-dev.svg';

const AboutMe = () => {
    return (
        <div className="AboutMe">
            <Tittle title={'About Me'}/>
            <ImageSection />   {/*Content from ../Components/InageSection.js*/} 

                <Tittle title={'Domains of Interest'}/> 
                {/* <Tittle title={'Domains of Interest'} span={'Services'} /> */} 
                {/* span gives a watermark effect */}
                <div className="servives-container">
                    <ServicesSection image={wd} title={'Web Development'} 
                    text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}/>
                    <ServicesSection image={da} title={'Data Analytics'} 
                    text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}/>
                    <ServicesSection image={ml} title={'Machine Learning'} 
                    text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}/>
                    <ServicesSection image={cs} title={'Cyber Security'} 
                    text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}/>
                </div>
        </div>
    )
}

export default AboutMe

