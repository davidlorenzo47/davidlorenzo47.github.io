import React from 'react'
import {faReddit, faTwitter} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faDiscord} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am 
                    <span> Dhruvang Gondalia.</span>
                </h1>
                <p className="h-sub-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Cupiditate facere, numquam vitae placeat consequatur corrupti officia 
                    quibusdam. Blanditiis doloremque nemo ex facilis neque. 
                    A sint ipsam earum nemo omnis et.
                </p>

                {/* Brand Icons */}
                <div className="icons">
                    <a  href="https://github.com/davidlorenzo47" target="_blank" className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </a>
                    <a  href="https://www.linkedin.com/in/dhruvang-gondalia/" target="_blank" className="icon-holder">
                        <FontAwesomeIcon icon={faLinkedin} className="icon lk"/>
                    </a>
                    <a  href="https://twitter.com/davidlorenzo_47" target="_blank" className="icon-holder">
                        <FontAwesomeIcon icon={faTwitter} className="icon tw"/>
                    </a>
                    <a  href="https://www.reddit.com/user/DhruvangGondalia" target="_blank" className="icon-holder">
                        <FontAwesomeIcon icon={faReddit} className="icon rd" />
                    </a>
                    <a  href="https://discordapp.com/users/732631309263831140" target="_blank" className="icon-holder">
                        <FontAwesomeIcon icon={faDiscord} className="icon dc"/>
                    </a>
                </div>
            </header>
        </div>
    )
}

export default HomePage
