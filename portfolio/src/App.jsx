import './App.css';
import AboutMe from './components/aboutMe/aboutMe';
import Header from './components/header/header';
import SecondHeader from './components/secondHeader/secondHeader';
import Experience from './components/experience/experience';
import Education from './components/education/education';
import Projects from './components/projects/projects';
import Footer from './components/footer/footer';


function App() {
  return (
    <div className="container">
      <div className="container-header">
        <Header itemPortfolio="CV" itemHome="Home" itemAboutMe="About Me" itemExperience="Experience" itemEducation="Education" itemProjects="Projects" />

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
          itemPhoto="eu.jpg"
          itemLocation="Porto, Portugal"
          itemDescription="A passionate Software Engineering degree student about programming and technology, with a solid background in Web and Mobile development."
          itemURLInstagram="https://www.instagram.com/ui_ux.heyliceeee"
          itemURLDiscord=""
          itemURLCV="https://www.canva.com/design/DAGIM2-qj9k/S2V-h5-EaHeLg9Jzbjqklg/edit?utm_content=DAGIM2-qj9k&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" itemEmail="alicedias2002@hotmail.com"
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
