import React, { useState } from 'react';

import './secondHeader.css';
import { FiLinkedin } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import urSVG from '../../assets/illustration.svg';


function SecondHeader(props) {

    const handleLinkedInClick = () => {
        const url = 'https://www.linkedin.com/in/heyliceeee/';
        
        window.location.href = url;
    };

    const handleGitHubInClick = () => {
        const url = 'https://github.com/heyliceeee';
        
        window.location.href = url;
    };


    return (
        <div className='containerSecondHeader1'>
            <div className="containerSecondHeader">
                <div className="itemHiIm">{props.itemHiIm}</div>
                <div className="itemMyName">{props.itemMyName}</div>
                <div className="itemJob">{props.itemJob}</div>

                <div className='containerButtons'>
                    <div className='containerBtnLinkedIn'>
                        <div className='btnLinkedIn' title='https://www.linkedin.com/in/heyliceeee/' onClick={handleLinkedInClick}>
                            <FiLinkedin className='btnIconLinkedIn' />
                            LinkedIn
                        </div>
                    </div>

                    <div className='containerBtnGitHub'>
                        <div className='btnGitHub' title='https://github.com/heyliceeee' onClick={handleGitHubInClick}>
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