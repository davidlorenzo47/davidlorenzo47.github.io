import React from 'react'
import about from '../Assets/aboutme.jpg';

const ImageSection = () => {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt=""/>
            </div>
            <div className="about-info">
                <h4><span> Dhruvang Gondalia</span></h4>
                <p className="about-text">
                I am a Computer Engineering Student, currently in my Final Year, and will be graduating in 2022 with a Bachelor's in Computer Engineering degree. My GPA is 8.6 and I do not have backlogs in any of the subjects. My passion for technology drives me to learn more about the various innovations and advancements made in our technology-driven world. Feel free to talk and discuss with me any technologies you would like to. 
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Location</p>
                    </div>
                    <div className="right-section">   {/*CSS from ../Style/_about.scss*/} 
                        <p>: Dhruvang Gondalia</p>
                        <p>: 22</p>
                        <p>: Indian</p>
                        <p>: English, Spanish(Beginner)</p>
                        <p>: Navi Mumbai, India</p>
                    </div>
                </div>
                {/* <button className="btn">Download Cv</button> */} {/*CSS comes from ../Style/_about.scss*/} 
            </div>
        </div>
    )
}

export default ImageSection
