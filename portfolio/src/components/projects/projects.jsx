import './projects.css';

function Projects(props) {
    const projects = [
        {
            id: 1,
            photo: "https://media.discordapp.net/attachments/697858645559476265/1188209988494176386/image.png?ex=6599b1c9&is=65873cc9&hm=26d36a3c74befb316af1914fa8c2a64e40efcc8c9b34f45de8794f2999ee4b8f&=&format=webp&quality=lossless",
            name: "Traz Cá - Food Delivery App",
            description: "Traz Cá connects hungry people to a variety of local restaurants quickly, conveniently and reliably.The app's objective is to create a mobile platform for iOS and Android that facilitates the food ordering process, promoting a fluid experience between restaurants and customers, encouraging local commerce and providing a convenient meal solution for users.",
            tecnologies: [
                { name: "JavaScript" },
                { name: "React Native" },
                { name: "CSS" },
            ],
            URL: "https://github.com/heyliceeee/trazcaApp"
        },
    ];

    const backgroundImageStyle = (photo) => ({
        backgroundImage: `url(${photo})`,
    });


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
                                {project.tecnologies.map((projectTecnology) => {

                                    <div className='tecnology'>{projectTecnology.name}</div>
                                })}
                            </div>


                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;