import React, { useState } from 'react';
import './experience.css';

function Experience(props) {

    return (
        <div className='containerExperience'>
            <div className='titleExperience'>{props.itemExperience}</div>

            <div className='containerInfo'>
                <div className='containerCompaniesExperience'>
                    <div className='containerCompanyExperience'>
                        <div className='line'></div>

                        <div className='containerCompanyName'>
                            <div className='titleCompanyName'>{props.itemExperienceCompany1}</div>
                        </div>
                    </div>
                </div>

                <div className='containerDescriptionsExperience'>
                    <div className='containerDescriptionExperience'>
                        <div className='containerJobDate'>
                            <div className='titleJob'>{props.itemExperienceJob1}</div>

                            <div className='containerDate'>
                                <div className='dateStart'>{props.itemExperienceDateStart1}</div>
                                <div className='dateStart'> - </div>
                                <div className='dateEnd'>{props.itemExperienceDateEnd1}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;