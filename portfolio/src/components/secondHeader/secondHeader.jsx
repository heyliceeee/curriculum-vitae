import React from 'react';

import './secondHeader.css';
import { FiLinkedin } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import urSVG from '../../assets/illustration.svg';


function SecondHeader(props) {

    const handleLinkedInClick = () => {
        window.location.href = `${props.itemURLLinkedIn}`;
    };

    const handleGitHubInClick = () => {
        window.location.href = `${props.itemURLGitHub}`;
    };


    return (
        <div className='containerSecondHeader1'>
            <div className="containerSecondHeader">
                <div className="itemHiIm">{props.itemHiIm}</div>
                <div className="itemMyName">{props.itemMyName}</div>
                <div className="itemJob">{props.itemJob}</div>

                <div className='containerButtons'>
                    <div className='containerBtnLinkedIn'>
                        <div className='btnLinkedIn' title={props.itemURLLinkedIn} onClick={handleLinkedInClick}>
                            <FiLinkedin className='btnIconLinkedIn' />
                            LinkedIn
                        </div>
                    </div>

                    <div className='containerBtnGitHub'>
                        <div className='btnGitHub' title={props.itemURLGitHub} onClick={handleGitHubInClick}>
                            <FiGithub className='btnIconGitHub' />
                            GitHub
                        </div>
                    </div>
                </div>
            </div>

            <div className='containerPolygon'>
                <svg className='responsive-svg'>
                    <image href={urSVG} width='100%' height='100%' />
                </svg>
            </div>
        </div>
    );
}

export default SecondHeader;