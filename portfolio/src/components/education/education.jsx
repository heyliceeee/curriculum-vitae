import React, { useState } from 'react';
import '../experience/experience.css';

function Education(props)
{
    const [activeIndex, setActiveIndex] = useState(1);

    const educations = [
        {
            id: 1,
            company: "Degree Student",
            job: "Software Engineering Degree Student",
            companyFull: "Escola Superior de Tecnologia e Gestão",
            dateStart: "Oct 2022",
            dateEnd: "Now",
            description: "Agile Methodologies • Data Structures • Artificial Intelligence • Multithreading • Java • Python • C",
        },
        {
            id: 2,
            company: "PHTC",
            job: "PHTC in Development for the Web and Mobile Devices",
            companyFull: "Escola Superior de Tecnologia e Gestão",
            dateStart: "Oct 2020",
            dateEnd: "Jul 2022",
            description: "Node.js • UML • Ionic • Bootstrap • JavaScript • iOS Development • Android Development • React.js • Swift • MongoDB • AngularJS • PHP • SQL",
        },
        {
            id: 3,
            company: "Professional Course",
            job: "Professional Computer Programmer Course",
            companyFull: "Escola Secundária de Tomaz Pelayo",
            dateStart: "2017",
            dateEnd: "2020",
            description: "Android Development • Java • HTML • CSS • PHP • SQL",
        },
    ];

    const handleEducationClick = (educationId) => {
        setActiveIndex(educationId === activeIndex ? 1 : educationId);
    };


    return (
        <div className='containerExperience'>
            <div className='titleExperience'>{props.itemEducation}</div>

            <div className='containerInfo'>
                <div className='containerCompaniesExperience'>
                    {educations.map((education) => (

                        <div key={education.id} className='containerCompanyExperience' onClick={() => handleEducationClick(education.id)}>
                            <div className={education.id === activeIndex ? 'line' : 'lineDisable'}></div>

                            <div className={education.id === activeIndex ? 'containerCompanyName' : 'containerCompanyNameDisable'}>
                                <div className={education.id === activeIndex ? 'titleCompanyName' : 'titleCompanyNameDisable'}>{education.company}</div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='containerDescriptionsExperience'>
                    <div className='containerSidebarCompaniesExperience'>
                        {educations.map((education) => (

                            <div key={education.id} className='containerSidebarCompanyExperience' onClick={() => handleEducationClick(education.id)}>
                                <div className={education.id === activeIndex ? 'containerCompanyName' : 'containerCompanyNameDisable'}>
                                    <div className={education.id === activeIndex ? 'titleCompanyName' : 'titleCompanyNameDisable'}>{education.company}</div>
                                </div>

                                <div className={education.id === activeIndex ? 'lineSidebar' : 'lineDisableSidebar'}></div>
                            </div>

                        ))}
                    </div>


                    {educations.map((education) => (
                        activeIndex === education.id && (
                            <div key={education.id} className='containerDescriptionExperience'>

                                <div className='containerJobDate'>
                                    <div className='titleJob'>{education.job}</div>

                                    <div className='containerDate'>
                                        <div className='dateStart'>{education.dateStart}</div>
                                        <div className='dateStart'> - </div>
                                        <div className='dateEnd'>{education.dateEnd}</div>
                                    </div>
                                </div>

                                <div className='containerCompany'>{education.companyFull}</div>

                                <div className='containerDescription'>{education.description}</div>
                            </div>
                        )))}

                </div>
            </div>
        </div>
    );
}

export default Education;