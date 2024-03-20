import './projects.css';
import '../aboutMe/aboutMe.css';

import { FiLink } from "react-icons/fi";

function Projects(props) {
    const projects = [
        {
            id: 1,
            photo: "nei.png",
            name: "NEI Website",
            description: "Development of the 'Núcleo de Estudantes de Informática - Escola de Tecnologia e Gestão de Felgueiras' website.",
            tecnologies: [
                { name: "React" },
                { name: "TypeScript" },
                { name: "Material-UI" },
            ],
            URL: "https://github.com/nei-estg/nei-website"
        },
        {
            id: 2,
            photo: "trazCa.png",
            name: "'Traz Cá' - Food Delivery App",
            description: "A platform for iOS and Android that facilitates the food ordering process, promoting a fluid experience between restaurants and customers, encouraging local commerce and providing a convenient meal solution for users.",
            tecnologies: [
                { name: "JavaScript" },
                { name: "React Native" },
                { name: "CSS" },
            ],
            URL: "https://github.com/heyliceeee/trazcaApp"
        },
        {
            id: 3,
            photo: "captureTheFlag.jpg",
            name: "Capture the Flag Game",
            description: "Game developed with generic ADT.",
            tecnologies: [
                { name: "Java" },
                { name: "JavaFX" },
            ],
            URL: "https://github.com/heyliceeee/capture-the-flag"
        },
        {
            id: 4,
            photo: "generatePassword.png",
            name: "Password Generator",
            description: "A platform for iOS and Android that provide a safe and effective tool for generating passwords.",
            tecnologies: [
                { name: "JavaScript" },
                { name: "React Native" },
                { name: "CSS" },
                { name: "Expo" },
            ],
            URL: "https://github.com/heyliceeee/passwordGenerator"
        },
        {
            id: 5,
            photo: "spaceFlightNews.png",
            name: "Space Flight News",
            description: "Space exploration news iOS app.",
            tecnologies: [
                { name: "Swift" },
                { name: "API" },
            ],
            URL: "https://github.com/heyliceeee/spaceFlightNews"
        },
    ];

    const backgroundImageStyle = (photo) => ({
        backgroundImage: `url(${require('../../assets/'+photo)})`,
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