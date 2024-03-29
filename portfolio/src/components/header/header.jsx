import React, { useState } from 'react';
import './header.css';
import { RxHamburgerMenu } from "react-icons/rx";



function Header(props) {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);

        if (section) {
            section.scrollIntoView({
                behavior: 'smooth', // Adiciona um efeito de rolagem suave
                block: 'start' // Alinha o topo da seção com o topo da janela de exibição
            });
        }
    };



    return (
        <div className="containerHeader">
            <div className="row">
                <div className="itemPortfolio">{props.itemPortfolio}</div>
                <div className="itemHome" onClick={() => scrollToSection('secondHeader')}>{props.itemHome}</div>
                <div className="itemAboutMe" onClick={() => scrollToSection('aboutMe')}>{props.itemAboutMe}</div>
                <div className="itemExperience" onClick={() => scrollToSection('experience')}>{props.itemExperience}</div>
                <div className="itemEducation" onClick={() => scrollToSection('education')}>{props.itemEducation}</div>
                <div className="itemProjects" onClick={() => scrollToSection('projects')}>{props.itemProjects}</div>

                <div className="itemDropdown">
                    <RxHamburgerMenu className='btnDropdown' onClick={toggleDropdown} />

                    {showDropdown && (
                        <div className='dropdown-content'>
                            <p className='dropdownItemHome' onClick={() => scrollToSection('secondHeader')}>{props.itemHome}</p>
                            <p className='dropdownItemAboutMe' onClick={() => scrollToSection('aboutMe')}>{props.itemAboutMe}</p>
                            <p className='dropdownItemExperience' onClick={() => scrollToSection('experience')}>{props.itemExperience}</p>
                            <p className='dropdownItemEducation' onClick={() => scrollToSection('education')}>{props.itemEducation}</p>
                            <p className='dropdownItemProjects' onClick={() => scrollToSection('projects')}>{props.itemProjects}</p>
                        </div>
                    )}
                </div>
            </div>

            <div className="line-container">
                <hr className="horizontal-line" />
            </div>
        </div>
    );
}

export default Header;