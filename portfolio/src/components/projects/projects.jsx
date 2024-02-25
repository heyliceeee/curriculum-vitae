import './projects.css';
import '../aboutMe/aboutMe.css';

import { FiLink } from "react-icons/fi";

function Projects(props) {
    const projects = [
        {
            id: 1,
            photo: "https://media.discordapp.net/attachments/697858645559476265/1184562524327268404/363778414_302322208867958_74034641211861317_n-removebg-preview.png?ex=65e8b5d1&is=65d640d1&hm=58f0a9c985fae0caa5effc87b0f6fc90a42001453b3ef0a014668427a830bd30&=&format=webp&quality=lossless",
            name: "NEI Website",
            description: "Development of the 'Núcleo de Estudantes de Informática - Escola de Tecnologia e Gestão de Felgueiras' website.",
            tecnologies: [
                { name: "React" },
                { name: "TypeScript" },
                { name: "Material-UI" },
                { name: "Django" },
                { name: "PostgreSQL" },
                { name: "redis" },
                { name: "Prometheus" },
                { name: "Grafana" },
            ],
            URL: "https://github.com/nei-estg/nei-website"
        },
        {
            id: 2,
            photo: "https://media.discordapp.net/attachments/697858645559476265/1188209988494176386/image.png?ex=65ecc049&is=65da4b49&hm=369e02a5c6781c4994278ec281ae5d448dbc48dafbd790a57df24ed9858e62dd&=&format=webp&quality=lossless",
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
            photo: "https://media.discordapp.net/attachments/697858645559476265/1205515062387806269/Youth_Group_Games.jpg?ex=65eb1b64&is=65d8a664&hm=1998153379e7e49d6cc08cdb0330b54a7ca4bf93dabb90c5840ab432be46435c&=&format=webp",
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
            photo: "https://media.discordapp.net/attachments/697858645559476265/1205603908806901810/homepage.png?ex=65eb6e22&is=65d8f922&hm=45c352be0ff4749e1d12dbf449e82366ba75a910ef6744cbec4f468cdfd604e3&=&format=webp&quality=lossless&width=324&height=701",
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
            photo: "https://media.discordapp.net/attachments/697858645559476265/1207391320134389881/1024.png?ex=65df79ca&is=65cd04ca&hm=f5ca5dc726ee1f368fcd552b5449840bc450b84e0386199c6c9c1642e7b6c825&=&format=webp&quality=lossless&width=701&height=701",
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