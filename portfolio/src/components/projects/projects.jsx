import './projects.css';
import '../aboutMe/aboutMe.css';

import { FiLink } from "react-icons/fi";

function Projects(props) {
    const projects = [
        {
            id: 1,
            photo: "crossfit-cards.png",
            name: "Crossfit Cards",
            description: "Web application that turns CrossFit workouts into a dynamic card game.",
            tecnologies: [
                { name: "Angular" },
                { name: "TypeScript" },
                { name: "Bootstrap" },
                { name: "CSS" },
            ],
            URL: "https://github.com/heyliceeee/crossfit-cards"
        },
        {
            id: 1,
            photo: "sweetRicers.png",
            name: "Sweet Ricers",
            description: "Website about a Portuguese Counter Strike 2 community.",
            tecnologies: [
                { name: "React" },
                { name: "JavaScript" },
                { name: "Ant Design" },
                { name: "CSS" },
            ],
            URL: "https://sweet-ricers.vercel.app/"
        },
        {
            id: 2,
            photo: "robocode.jpg",
            name: "Robocode",
            description: "Robot controlled by Machine Learning and Genetic Algorithm.",
            tecnologies: [
                { name: "Java" },
                { name: "Machine Learning" },
                { name: "Robocode" },
                { name: "H20" },
            ],
            URL: "https://github.com/heyliceeee/robocodeIA"
        },
        {
            id: 3,
            photo: "nei.png",
            name: "NEI Website",
            description: "Development of the 'Núcleo de Estudantes de Informática - Escola de Tecnologia e Gestão de Felgueiras' website.",
            tecnologies: [
                { name: "React" },
                { name: "TypeScript" },
                { name: "Material-UI" },
            ],
            URL: "https://nei-estg.org/"
        },
        {
            id: 4,
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
            id: 5,
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
            id: 6,
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
            id: 7,
            photo: "spaceFlightNews.png",
            name: "Space Flight News",
            description: "This is an iOS application allows users to access news and information about the aerospace field. The app utilizes an API to provide updated data on rocket launches, space missions, astronomical discoveries, and more.",
            tecnologies: [
                { name: "Swift" },
                { name: "API" },
                { name: "Firebase" },
            ],
            URL: "https://github.com/heyliceeee/spaceFlightNews"
        },
        {
            id: 8,
            photo: "smsSystem.png",
            name: "SMS System",
            description: "The SMS System is a scheduled and automatic SMS sending system. It is a project that constitutes: API, Database, Backend and App. The system was developed during the 'Assistência Online' internship and was inspired by the problem of a company customer.",
            tecnologies: [
                { name: "C#" },
                { name: "ASP.NET Core" },
                { name: "SQL Server" },
                { name: "Xamarin" },
                { name: "IIS" },
            ],
            URL: "#"
        },
    ];

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