import './App.css';
import AboutMe from './components/aboutMe/aboutMe';

import Header from './components/header/header';
import SecondHeader from './components/secondHeader/secondHeader';
import Experience from './components/experience/experience';


function App() {
  return (
    <div className="container">
      <div className="container-header">
        <Header itemPortfolio="Portfolio" itemHome="Home" itemAboutMe="About Me" itemExperience="Experience" itemProjects="Projects" />

        <SecondHeader id='secondHeader'
          itemHiIm="Hi👋, I'm"
          itemMyName="Alice Dias"
          itemJob="Full-Stack Developer."
          itemURLLinkedIn="https://www.linkedin.com/in/heyliceeee/"
          itemURLGitHub="https://github.com/heyliceeee" />
      </div>

      <div id='aboutMe' className="container-aboutme">
        <AboutMe
          itemAboutMe="About Me"
          itemPhoto="https://media.discordapp.net/attachments/697858645559476265/1178398966052823223/IMG_6199.jpg?ex=6576008f&is=65638b8f&hm=6fcae6033c67c9ccf299b5344da31aaf24d1971496854a15772be4918a512ac8&=&format=webp&width=701&height=701"
          itemLocation="Porto, Portugal"
          itemDescription="A passionate Software Engineering degree student about programming and technology, with a solid background in Web and Mobile development."
          itemURLInstagram="https://www.instagram.com/ui_ux.heyliceeee"
          itemURLDiscord="discordapp.com/users/691070609836343347"
          itemURLCV="https://europa.eu/europass/eportfolio/api/eprofile/shared-profile/maria+alice-moreira+dias/3fd4415f-29fa-4f6d-acb8-da57a67d8931?view=html" itemEmail="heyliceeee@gmail.com"
          btnCV="CV" btnMail="E-mail" />
      </div>

      <div id='experience' className="container-experience">
        <Experience
          itemExperience="Experience" 
          itemExperienceCompany1="Assistência Online" itemExperienceJob1="Internship" itemExperienceDateStart1="03/2022" itemExperienceDateEnd1="07/2022" itemExperienceDescription1="A platform was created to enable SMS scheduling and sending the SMS automatically."
          itemExperienceCompany2="ANPRI" itemExperienceJob2="Internship" itemExperienceDateStart2="19/04/2020" itemExperienceDateEnd2="21/05/2020" itemExperienceDescription2="Mobile Development with Web Technology. Proficiency in JavaScript and CSS through the Adobe Brackets platform. Creation of hybrid applications using Adobe PhoneGap."
          itemExperienceCompany3="Famalicão Extreme Gaming" itemExperienceJob3="Assistant" itemExperienceDateStart3="05/12/2019" itemExperienceDateEnd3="06/12/2019" itemExperienceDescription3="I was responsible for organizing and setting up the ANPRI stand, ensuring the correct arrangement of all equipment and promotional materials, as well as the logistics and coordination of the support team. I led live demonstrations of robots and drones, clarifying their functioning, usefulness and relevance in today's society.I established direct contact with visitors of all ages, from children to adults, educating them about technological advances and fostering interest in the areas of robotics and drones. I actively collaborated with other team members to ensure an educational and engaging experience for all visitors to the stand."
          itemExperienceCompany4="Apps for Good" itemExperienceJob4="Participant" itemExperienceDateStart4="03/2019" itemExperienceDateEnd4="06/2019" itemExperienceDescription4="I developed and contributed to the creation of the Study+ software, an innovative tool designed to support studying for students. I was responsible for designing the user interface, ensuring an intuitive and pleasant user experience. I collaborated in a multidisciplinary team, improving communication, problem-solving and teamwork skills."
          itemExperienceCompany5="Lantal Textiles" itemExperienceJob5="Internship" itemExperienceDateStart5="08/2018" itemExperienceDateEnd5="10/2018" itemExperienceDescription5="A search of the company's articles was organized, to later create a Database of articles. The Database was intended to be used for internal use in the company, mainly by the Samples Department." />
      </div>

      <div id='projects' className="container-projects">
        <p>Projects</p>
      </div>

      <div className="container-footer">
        <p>Footer</p>
      </div>
    </div>
  );
}

export default App;
