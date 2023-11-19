import './App.css';
import Header from './header/header';


function App() {
  return (
    <div className="container">
      <div className="container-header">
        <Header itemPortfolio="Portfolio" itemHome="Home" itemAboutMe="About Me" itemExperience="Experience" itemProjects="Projects" />
        <p>Second Header</p>
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
