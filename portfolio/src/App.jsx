import './App.css';
import AboutMe from './components/aboutMe/aboutMe';
import Header from './components/header/header';
import SecondHeader from './components/secondHeader/secondHeader';
import Experience from './components/experience/experience';
import Projects from './components/projects/projects';
import Footer from './components/footer/footer';


function App() {
  return (
    <div className="container">
      <div className="container-header">
        <Header itemPortfolio="Portfolio" itemHome="Home" itemAboutMe="About Me" itemExperience="Experience" itemProjects="Projects" />

        <SecondHeader id='secondHeader'
          itemHiIm="Hi👋, I'm"
          itemMyName="Alice Dias"
          itemJob="Software Engineering Degree Student"
          itemURLLinkedIn="https://www.linkedin.com/in/heyliceeee/"
          itemURLGitHub="https://github.com/heyliceeee" />
      </div>

      <div id='aboutMe' className="container-aboutme">
        <AboutMe
          itemAboutMe="About Me"
          itemPhoto="https://media.discordapp.net/attachments/697858645559476265/1178398966052823223/IMG_6199.jpg?ex=65e4be8f&is=65d2498f&hm=2fdb3b78e704b49209e9283607140d81672201058934122c756387f9937c4e1b&=&format=webp&width=701&height=701"
          itemLocation="Porto, Portugal"
          itemDescription="A passionate Software Engineering degree student about programming and technology, with a solid background in Web and Mobile development."
          itemURLInstagram="https://www.instagram.com/ui_ux.heyliceeee"
          itemURLDiscord=""
          itemURLCV="https://europa.eu/europass/eportfolio/api/eprofile/shared-profile/maria+alice-moreira+dias/3fd4415f-29fa-4f6d-acb8-da57a67d8931?view=html" itemEmail="heyliceeee@gmail.com"
          btnCV="CV" btnMail="E-mail" />
      </div>

      <div id='experience' className="container-experience">
        <Experience itemExperience="Experience" />
      </div>

      <div id='projects' className="container-projects">
        <Projects itemProjects="Projects" />
      </div>

      <div className="container-footer">
        <Footer author="Alice Dias" />
      </div>
    </div>
  );
}

export default App;
