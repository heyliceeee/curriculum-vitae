import React, { useState } from 'react';
import './experience.css';

function Experience(props) {
    const [activeIndex, setActiveIndex] = useState(1);

    const experiences = [
        {
            id: 1,
            company: "NEI - ESTG",
            companyFull: "Núcleo de Estudantes de Informática - Escola de Tecnologia e Gestão de Felgueiras",
            job: "Web Development Team Member",
            dateStart: "Nov 2023",
            dateEnd: "Now",
            description: "Development of the 'Núcleo de Estudantes de Informática - ESTG' website.",
        },
        {
            id: 2,
            company: "Assistência Online",
            companyFull: "Assistência Online",
            job: "Internship",
            dateStart: "Mar 2022",
            dateEnd: "Jul 2022",
            description: "A platform was created to enable SMS scheduling and sending the SMS automatically.",
        },
        {
            id: 3,
            company: "ANPRI",
            companyFull: "Associação Nacional de Professores de Informática",
            job: "Internship",
            dateStart: "Apr 2020",
            dateEnd: "May 2020",
            description: "Mobile Development with Web Technology. Proficiency in JavaScript and CSS through the Adobe Brackets platform. Creation of hybrid applications using Adobe PhoneGap."

        },

        {
            id: 4,
            company: "FEG",
            companyFull: "Famalicão Extreme Gaming",
            job: "Assistant",
            dateStart: "5 Dec 2019",
            dateEnd: "6 Dec 2019",
            description: "I organized and set up the ANPRI booth, ensuring equipment and materials were arranged correctly. Led live demonstrations of robots and drones, explaining their functionality and relevance. Interacted with visitors of all ages, educating them on technological advances in robotics and drones. Collaborated with the team to create an engaging experience for all booth visitors."
        },
        {
            id: 5,
            company: "Apps for Good",
            companyFull: "Apps for Good",
            job: "Participant",
            dateStart: "Mar 2019",
            dateEnd: "Jun 2019",
            description: "I developed and contributed to the creation of the Study+ software, an innovative tool designed to support studying for students. I was responsible for designing the user interface, ensuring an intuitive and pleasant user experience. I collaborated in a multidisciplinary team, improving communication, problem-solving, and teamwork skills."
        },
        {
            id: 6,
            company: "Lantal Textiles",
            companyFull: "Lantal Textiles",
            job: "Internship",
            dateStart: "Set 2018",
            dateEnd: "Oct 2018",
            description: "A search of the company's articles was organized, to later create a Database of articles. The Database was intended to be used for internal use in the company, mainly by the Samples Department."
        }
    ];

    const handleExperienceClick = (experienceId) => {
        setActiveIndex(experienceId == activeIndex ? 1 : experienceId);
    };


    return (
        <div className='containerExperience'>
            <div className='titleExperience'>{props.itemExperience}</div>

            <div className='containerInfo'>
                <div className='containerCompaniesExperience'>
                    {experiences.map((experience) => (

                        <div key={experience.id} className='containerCompanyExperience' onClick={() => handleExperienceClick(experience.id)}>
                            <div className={experience.id === activeIndex ? 'line' : 'lineDisable'}></div>

                            <div className={experience.id === activeIndex ? 'containerCompanyName' : 'containerCompanyNameDisable'}>
                                <div className={experience.id === activeIndex ? 'titleCompanyName' : 'titleCompanyNameDisable'}>{experience.company}</div>
                            </div>
                        </div>

                    ))}
                </div>

                <div className='containerDescriptionsExperience'>
                    <div className='containerSidebarCompaniesExperience'>
                        {experiences.map((experience) => (

                            <div key={experience.id} className='containerSidebarCompanyExperience' onClick={() => handleExperienceClick(experience.id)}>
                                <div className={experience.id === activeIndex ? 'containerCompanyName' : 'containerCompanyNameDisable'}>
                                    <div className={experience.id === activeIndex ? 'titleCompanyName' : 'titleCompanyNameDisable'}>{experience.company}</div>
                                </div>

                                <div className={experience.id === activeIndex ? 'lineSidebar' : 'lineDisableSidebar'}></div>
                            </div>

                        ))}
                    </div>


                    {experiences.map((experience) => (
                        activeIndex === experience.id && (
                            <div key={experience.id} className='containerDescriptionExperience'>

                                <div className='containerJobDate'>
                                    <div className='titleJob'>{experience.job}</div>

                                    <div className='containerDate'>
                                        <div className='dateStart'>{experience.dateStart}</div>
                                        <div className='dateStart'> - </div>
                                        <div className='dateEnd'>{experience.dateEnd}</div>
                                    </div>
                                </div>

                                <div className='containerCompany'>{experience.companyFull}</div>

                                <div className='containerDescription'>{experience.description}</div>
                            </div>
                        )))}

                </div>
            </div>
        </div>
    );
}

export default Experience;