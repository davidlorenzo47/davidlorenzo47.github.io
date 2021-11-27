import React from 'react'
import Tittle from '../Components/Title';
import SkillsSection from '../Components/SkillSection';
// import ServicesSection from '../Components/Services';
import cpp from '../Assets/skills/cpp.svg';
import css from '../Assets/skills/css.svg';
import firebase from '../Assets/skills/firebase.svg';
import git from '../Assets/skills/git.svg';
import github from '../Assets/skills/github.svg';
import html from '../Assets/skills/html.svg';
import java from '../Assets/skills/java.svg';
import javascript from '../Assets/skills/javascript.svg';
import jquery from '../Assets/skills/jquery.svg';
import jupyter from '../Assets/skills/jupyter.svg';
import linux from '../Assets/skills/linux.svg';
import nodejs from '../Assets/skills/nodejs.svg';
import npm from '../Assets/skills/npm.svg';
import php from '../Assets/skills/php.svg';
import python from '../Assets/skills/python.svg';
import ubuntu from '../Assets/skills/ubuntu.svg';
import vscode from '../Assets/skills/vscode.svg';
import react from '../Assets/skills/react.svg';

const Skills = () => {
    return (
        <div>
            <Tittle title={'I like to code in'}/>
                <div className="skillsContainer">
                        {/* Skill progrss is from SkillSection   */}
                        <SkillsSection skill={'C++'} progress={'85%'} width={'76%'} />
                        <a href="https://isocpp.org/" target="_blank"><img src={cpp} style={{width: 100}} alt="logo"/></a>                    

                        <SkillsSection skill={'Javascript'} progress={'80%'} width={'60%'} />
                        <a href="https://www.javascript.com/" target="_blank"><img src={javascript} style={{width: 100}} alt="logo"/></a>                

                        <SkillsSection skill={'jQuery'} progress={'80%'} width={'60%'} />
                        <a href="https://www.javascript.com/" target="_blank"><img src={jquery} style={{width: 100}} alt="logo"/></a>  

                        <SkillsSection skill={'Python'} progress={'80%'} width={'90%'} />
                        <a href="https://www.python.org/" target="_blank"><img src={python} style={{width: 100}} alt="logo"/></a>

                        <SkillsSection skill={'HTML'} progress={'95%'} width={'95%'} />
                        <a href="https://html.spec.whatwg.org/" target="_blank"><img src={html} style={{width: 100}} alt="logo"/></a>

                        <SkillsSection skill={'Java'} progress={'80%'} width={'80%'} />
                        <a href="https://www.oracle.com/java/" target="_blank"><img src={java} style={{width: 100}} alt="logo"/></a>

                        <SkillsSection skill={'CSS'} progress={'95%'} width={'95%'} />
                        <a href="https://www.w3.org/TR/CSS/#css" target="_blank"><img src={css} style={{width: 100}} alt="logo"/></a>

                        <SkillsSection skill={'PHP'} progress={'95%'} width={'95%'} />
                        <a href="https://www.php.net/"><img src={php} style={{width: 100}} alt="logo"/></a>
                </div>

                <Tittle title={'Tools and Technologies I love working with'}/>
                <div className="skillsContainer">
                    <SkillsSection skill={'Node Js'} progress={'80%'} width={'80%'} />
                    <a href="https://nodejs.org/en/" target="_blank"><img src={nodejs} style={{width: 100}} alt="logo"/></a>

                    <SkillsSection skill={'npm'} progress={'80%'} width={'80%'} />
                    <a href="https://www.npmjs.com/" target="_blank"><img src={npm} style={{width: 100}} alt="logo"/></a>

                    <SkillsSection skill={'React Js'} progress={'70%'} width={'70%'} />
                    <a href="https://reactjs.org/" target="_blank"><img src={react} style={{width: 100}} alt="logo"/></a>

                    <SkillsSection skill={'Git'} progress={'80%'} width={'90%'} />
                    <a href="https://git-scm.com/" target="_blank"><img src={git} style={{width: 100}} alt="logo"/></a>

                    <SkillsSection skill={'Github'} progress={'80%'} width={'80%'} />
                    <a href="https://github.com/" target="_blank"><img src={github} style={{width: 100}} alt="logo"/></a>

                    <SkillsSection skill={'Firebase'} progress={'80%'} width={'80%'} />
                    <a href="https://firebase.google.com/" target="_blank"><img src={firebase} style={{width: 100}} alt="logo"/></a>

                    <SkillsSection skill={'Linux'} progress={'85%'} width={'76%'} />
                    <a href="https://www.linux.org/" target="_blank"><img src={linux} style={{width: 100}} alt="logo"/></a>

                    <SkillsSection skill={'Ubuntu'} progress={'95%'} width={'95%'} />
                    <a href="https://ubuntu.com/" target="_blank"><img src={ubuntu} style={{width: 100}} alt="logo"/></a>

                    <SkillsSection skill={'Jupyter Notebook'} progress={'95%'} width={'95%'} />
                    <a href="https://jupyter.org/" target="_blank"><img src={jupyter} style={{width: 100}} alt="logo"/></a>

                    <SkillsSection skill={'VS Code'} progress={'95%'} width={'95%'} />
                    <a href="https://code.visualstudio.com/" target="_blank"><img src={vscode} style={{width: 100}} alt="logo"/></a>
                </div>
        </div>
    )
}

export default Skills