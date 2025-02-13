import './projects.css';
import '../aboutMe/aboutMe.css';
import React, { useEffect, useState } from "react";
import { FiLink } from "react-icons/fi";

const API_URL = process.env.REACT_APP_API_URL;

function Projects(props) {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch(`${API_URL}/project`)
        .then((res) => res.json())
        .then((data) => setProjects(data))
        .catch((err) => console.error("Error searching for projects:", err));
    }, []);
    

    const backgroundImageStyle = (photo) => ({
        backgroundImage: `url(${require('../../assets/' + photo)})`,
        backgroundSize: 'cover',
    });

    const handleClick = (project) => {
        window.open(project.URL, '_blank');
    };


    return (
        <div className="containerProjects">
            <div className="titleProjects">{props.itemProjects}</div>

            <div className='containerInfo'>
                {projects.map((project) => (

                    <div key={project.id} className='containerProject'>
                        <div className="containerPhotoProject">
                            <div className='lineProject'></div>
                            <div className='photoProject' style={backgroundImageStyle(project.photo)}></div>
                        </div>

                        <div className='containerFooter'>
                            <div className='projectName'>{project.name}</div>
                            <div className='projectDescription'>{project.description}</div>

                            <div className='containerTecnologies'>
                                <div className='tecnology'>
                                    {project.tecnologies.map((projectTecnology, index) => (
                                        <span key={index}>
                                            {projectTecnology.name}
                                            {index !== project.tecnologies.length - 1 && " • "}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className='containerBtnCV' style={{ marginTop: '20px', width: '140px', }}>
                                <div className='btnCV' title={project.URL} onClick={() => handleClick(project)}>
                                    <FiLink className='btnIconCV' />
                                    Preview
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;