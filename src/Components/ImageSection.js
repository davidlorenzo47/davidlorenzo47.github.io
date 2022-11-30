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
                I am a solutions-driven Computer Science graduate student with excellent problem-solving skills seeking internship opportunities where I can enhance my implementation skills that can contribute to the company’s growth. I love coding and some of my favorite programming languages include C++, Java, Python, and Javascript.

                I am currently pursuing my Master's Degree in Computer Science and Engineering from Santa Clara University and will be graduating in the year 2024. I completed my Undergraduate studies in Computer Engineering at the University of Mumbai in 2022 with a CGPA of 8.64 on a scale of 10.00.

                I am an ex-Data Science Intern and during my internship, I got to learn a lot in the field of Machine Learning and Data Visualization. I got a chance to work on various real-life projects one of which was utilizing data visualization tools including Seaborn to deliver insights on the sales of a retail firm which helped me gain a lot of knowledge and experience.

                My hobbies include listening to music and playing outdoor sports. I also love adventure sports.

                I like to talk with people and exchange opinions about various technologies shaping our lives with gradual improvements. Feel free to talk with me and share your opinion about any technologies. 
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
                        <p>: 23</p>
                        <p>: Indian</p>
                        <p>: English, Spanish(Beginner)</p>
                        <p>: Santa Clara, California</p>
                    </div>
                </div>
                {/* <button className="btn">Download Cv</button> */} {/*CSS comes from ../Style/_about.scss*/} 
            </div>
        </div>
    )
}

export default ImageSection
