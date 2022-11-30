import React from 'react'
import phone from '../Assets/contact/phone.svg';
import email from '../Assets/contact/emailme.svg';
import location from '../Assets/contact/location.svg';
import Tittle from '../Components/Title';
import ContactItem from '../Components/ContactItem';

const Contact = () => {
    return (
        <div>
            <div className="title">
                <Tittle title={'Contact Me'}/>
            </div>
            <div className="ContactPage">
                <div className="map-sect">
                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d965929.1897710414!2d72.3922906!3d18.9685003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b9f0b81f13ad%3A0x3c12f7681185f869!2sNavi%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1636732852754!5m2!1sen!2sin" width="600" height="450" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe> */}
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50732.9624701775!2d-122.00257202870495!3d37.37066873761431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb7815c08c193%3A0xe475a47ca3c0bfc0!2sSanta%20Clara%2C%20CA!5e0!3m2!1sen!2sus!4v1669833284165!5m2!1sen!2sus" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" aria-hidden="false" tabIndex="0" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="contact-sect">
                    {/* CSS from ../Style/_contact.scss */}
                    <ContactItem icon={phone} text1={'+1 6693199400'} title={'Phone'}/>
                    <ContactItem icon={email} text1={'gondaliadhruvang@gmail.com'} title={'Email'}/>
                    <ContactItem icon={location} text1={'Santa Clara'} text2={'California'} title={'Address'}/>
                </div>
            </div>
        </div>
    )
}

export default Contact
