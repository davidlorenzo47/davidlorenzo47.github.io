import React from 'react'
import Tittle from '../Components/Title';
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillSection';
import ServicesSection from '../Components/Services';
import web from '../Assets/wb.svg';
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
            <Tittle title={'Programming Languages Known'}/>
                <div className="skillsContainer">
                    <SkillsSection skill={'C++'} progress={'85%'} width={'76%'} />
                    <SkillsSection skill={'Javascript'} progress={'80%'} width={'60%'} />
                    <SkillsSection skill={'Python'} progress={'80%'} width={'90%'} />
                    <SkillsSection skill={'HTML'} progress={'95%'} width={'95%'} />
                    <SkillsSection skill={'Java'} progress={'80%'} width={'80%'} />
                    <SkillsSection skill={'CSS'} progress={'95%'} width={'95%'} />
                    <SkillsSection skill={'PHP'} progress={'95%'} width={'95%'} />
                </div>

                <Tittle title={'Tools and Technologies I love working with'}/>
                <div className="skillsContainer">
                    <SkillsSection skill={'Linux'} progress={'85%'} width={'76%'} />
                    <SkillsSection skill={'React Js'} progress={'70%'} width={'70%'} />
                    <SkillsSection skill={'Node Js'} progress={'80%'} width={'80%'} />
                    <SkillsSection skill={'Git'} progress={'80%'} width={'90%'} />
                    <SkillsSection skill={'HTML'} progress={'95%'} width={'95%'} />
                    <SkillsSection skill={'npm'} progress={'80%'} width={'80%'} />
                    <SkillsSection skill={'Jupyter Notebook'} progress={'95%'} width={'95%'} />
                    <SkillsSection skill={'VS Code'} progress={'95%'} width={'95%'} />
                </div>

                <Tittle title={'Domains of Interest'}/> 
                {/* <Tittle title={'Domains of Interest'} span={'Services'} /> */} 
                {/* span gives a watermark effect */}
                <div className="servives-container">
                    <ServicesSection image={web} title={'Web Development'} 
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

