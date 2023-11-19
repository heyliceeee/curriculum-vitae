import React from 'react';
import './header.css';

function Header(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="itemPortfolio">{props.itemPortfolio}</div>
                <div className="itemHome">{props.itemHome}</div>
                <div className="itemAboutMe">{props.itemAboutMe}</div>
                <div className="itemExperience">{props.itemExperience}</div>
                <div className="itemProjects">{props.itemProjects}</div>
            </div>

            <div className="line-container">
                <hr className="horizontal-line" />
            </div>
        </div>
    );
}

export default Header;