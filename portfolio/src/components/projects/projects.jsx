import './projects.css';
import '../aboutMe/aboutMe.css';

import { FiLink } from "react-icons/fi";

function Projects(props) {
    const projects = [
        {
            id: 1,
            photo: "https://media.discordapp.net/attachments/697858645559476265/1188209988494176386/image.png?ex=6599b1c9&is=65873cc9&hm=26d36a3c74befb316af1914fa8c2a64e40efcc8c9b34f45de8794f2999ee4b8f&=&format=webp&quality=lossless",
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
            id: 2,
            photo: "",
            name: "Capture the Flag Game",
            description: "Game developed with generic ADT.",
            tecnologies: [
                { name: "Java" },
            ],
            URL: "https://github.com/heyliceeee/capture-the-flag"
        },
        {
            id: 3,
            photo: "",
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
            id: 4,
            photo: "",
            name: "Space Flight News",
            description: "Space exploration news iOS app.",
            tecnologies: [
                { name: "Swift" },
                { name: "API" },
            ],
            URL: "https://github.com/heyliceeee/spaceFlightNews"
        },
        {
            id: 5,
            photo: "",
            name: "Generic Data Structure",
            description: "List, Stack, Queue, Array, Tree & Graph.",
            tecnologies: [
                { name: "Java" },
            ],
            URL: "https://github.com/heyliceeee/generic-data-structure"
        },
    ];

    const backgroundImageStyle = (photo) => ({
        backgroundImage: `url(${photo})`,
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