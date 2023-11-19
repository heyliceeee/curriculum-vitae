import React from 'react';
import './secondHeader.css';
import { FiLinkedin } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import urSVG from '../../assets/illustration.svg';


function SecondHeader(props) {
    const handleLinkedInClick = () => {
        window.location.href = 'https://www.linkedin.com/in/heyliceeee/';
    };

    const handleGitHubInClick = () => {
        window.location.href = 'https://github.com/heyliceeee';
    };


    return (
        <div className='containerSecondHeader1'>
            <div className="containerSecondHeader">
                <div className="itemHiIm">{props.itemHiIm}</div>
                <div className="itemMyName">{props.itemMyName}</div>
                <div className="itemJob">{props.itemJob}</div>

                <div className='containerButtons'>
                    <div className='containerBtnLinkedIn'>
                        <div className='btnLinkedIn' onClick={handleLinkedInClick}>
                            <FiLinkedin className='btnIconLinkedIn' />
                            LinkedIn
                        </div>
                    </div>

                    <div className='containerBtnGitHub'>
                        <div className='btnGitHub' onClick={handleGitHubInClick}>
                            <FiGithub className='btnIconGitHub' />
                            GitHub
                        </div>
                    </div>
                </div>
            </div>

            <div className='containerPolygon'>
                <svg className='responsive-svg'>
                    <image href={urSVG} width='100%' height='100%'/>
                </svg>
            </div>
        </div>
    );
}

export default SecondHeader;