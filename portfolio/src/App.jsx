import './App.css';

import Header from './header/header';
import SecondHeader from './secondHeader/secondHeader';


function App() {
  return (
    <div className="container">
      <div className="container-header">
        <Header itemPortfolio="Portfolio" itemHome="Home" itemAboutMe="About Me" itemExperience="Experience" itemProjects="Projects" />
        <SecondHeader itemHiIm="Hi👋, I'm" itemMyName="Alice Dias" itemJob="Degree in Software Engineering"/>
      </div>

      <div className="container-aboutme">
        <p>About Me</p>
      </div>

      <div className="container-experience">
        <p>Experience</p>
      </div>

      <div className="container-projects">
        <p>Projects</p>
      </div>

      <div className="container-footer">
        <p>Footer</p>
      </div>
    </div>
  );
}

export default App;
