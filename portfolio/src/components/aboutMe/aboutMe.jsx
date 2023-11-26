import './aboutMe.css';
import React from "react";
import { FiCodepen, FiDownload, FiDownloadCloud, FiFigma, FiInstagram, FiMail, FiTwitch, FiTwitter, FiYoutube } from "react-icons/fi";
import { RiDiscordLine } from "react-icons/ri";



function AboutMe(props) {
    const backgroundImageStyle = {
        backgroundImage: `url(${props.itemPhoto})`,
    };

    const handleInstagramClick = () => {
        window.location.href = `${props.itemURLInstagram}`;
    };

    const handleDiscordClick = () => {
        window.location.href = `${props.itemURLDiscord}`;
    };

    const handleCVInClick = () => {
        window.location.href = `${props.itemURLCV}`;
    };

    const handleEmailInClick = () => {
        window.location.href = `${props.itemURLEmail}`;
    };

    return (
        <div className="containerAboutMe">
            <div className="containerAboutMePhoto">
                <div className='containerPhoto'>
                    <div className='rectanglePhoto' />
                    <div className='photo' style={backgroundImageStyle} />
                </div>
            </div>

            <div className="containerAboutMeData">
                <div className='titleAboutMe'>{props.itemAboutMe}</div>
                <div className='subtitleLocation'>{props.itemLocation}</div>
                <div className='description'>{props.itemDescription}</div>

                <div className='socialMedia'>
                    <FiInstagram className='iconInstagram' title={props.itemURLInstagram} onClick={handleInstagramClick} />
                    <RiDiscordLine className='iconDiscord' title={props.itemURLDiscord} onClick={handleDiscordClick} />
                    <FiYoutube className='iconDiscord' />
                    <FiFigma className='iconDiscord' />
                    <FiCodepen className='iconDiscord' />
                    <FiTwitch className='iconDiscord' />
                    <FiTwitter className='iconDiscord' />
                </div>

                <div className='containerButtons'>
                    <div className='containerBtnCV'>
                        <div className='btnCV' title={props.itemURLCV} onClick={handleCVInClick}>
                            <FiDownloadCloud className='btnIconCV' />
                            {props.btnCV}
                        </div>
                    </div>

                    <div className='containerBtnEmail'>
                        <div className='btnEmail' title={props.itemEmail} onClick={handleEmailInClick}>
                            <FiMail className='btnIconEmail' />
                            {props.btnMail}
                        </div>
                    </div>
                </div>
            </div>
        </div>);
}

export default AboutMe;