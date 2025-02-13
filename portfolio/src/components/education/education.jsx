import React, { useState, useEffect } from 'react';
import './education.css';

const API_URL = process.env.REACT_APP_API_URL;

function Education(props)
{
    const [educations, setEducations] = useState([]);
    const [activeIndex, setActiveIndex] = useState(null);
    
    useEffect(() => {
        fetch(`${API_URL}/education`)
        .then((res) => res.json())
        .then((data) => {
            setEducations(data); //atualiza a lista de educations
    
          if (data.length > 0) {
            setActiveIndex(data[0]?.id); //Define o primeiro ID como ativo
          }
        })
        .catch((err) => console.error("Error searching for educations:", err));
      }, []);

    const handleEducationClick = (educationId) => {
        setActiveIndex(educationId === activeIndex ? educations[0]?.id : educationId);
    };


    return (
        <div className='containerExperience'>
            <div className='titleExperience'>{props.itemEducation}</div>

            <div className='containerInfo'>
                <div className='containerCompaniesExperience'>
                    {educations.map((education) => (

                        <div key={education.id} className='containerCompanyExperience' onClick={() => handleEducationClick(education.id)}>
                            <div className={education.id === activeIndex ? 'line' : 'lineDisableEducation'}></div>

                            <div className={education.id === activeIndex ? 'containerCompanyNameEducation' : 'containerCompanyNameDisableEducation'}>
                                <div className={education.id === activeIndex ? 'titleCompanyName' : 'titleCompanyNameDisable'}>{education.company}</div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='containerDescriptionsExperience'>
                    <div className='containerSidebarCompaniesExperience'>
                        {educations.map((education) => (

                            <div key={education.id} className='containerSidebarCompanyExperience' onClick={() => handleEducationClick(education.id)}>
                                <div className={education.id === activeIndex ? 'containerCompanyNameEducation' : 'containerCompanyNameDisableEducation'}>
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

                                <div className='containerCompany'>{education.companyFullname}</div>

                                <div className='containerDescription'>{education.description}</div>
                            </div>
                        )))}

                </div>
            </div>
        </div>
    );
}

export default Education;