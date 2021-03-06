import React from 'react'

const SkillSection = ({skill,progress,width}) => {
    return (
        <div className="SkillsSection">
            <div className="skills-container">
                <h3 className="skill-title">{skill}</h3>
                {/* Uncomment below code to view progress bar */}
                {/* <div className="skill-bar">
                    <p className="skill-text">{progress}</p>
                    <div className="skill-progress">
                        <div className="progress">
                            <div className="inner-pregress" style={{width:width}}></div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default SkillSection