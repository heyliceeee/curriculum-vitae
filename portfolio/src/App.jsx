import './App.css';
import AboutMe from './components/aboutMe/aboutMe';

import Header from './components/header/header';
import SecondHeader from './components/secondHeader/secondHeader';


function App() {
  return (
    <div className="container">
      <div className="container-header">
        <Header
          itemPortfolio="Portfolio"
          itemHome="Home"
          itemAboutMe="About Me"
          itemExperience="Experience"
          itemProjects="Projects" />

        <SecondHeader
          itemHiIm="Hi👋, I'm"
          itemMyName="Alice Dias"
          itemJob="Degree in Software Engineering"
          itemURLLinkedIn="https://www.linkedin.com/in/heyliceeee/"
          itemURLGitHub="https://github.com/heyliceeee" />
      </div>

      <div className="container-aboutme">
        <AboutMe
          itemPhoto="https://media.discordapp.net/attachments/697858645559476265/1153778896106438727/IMG_6199.jpg?ex=656f7dd5&is=655d08d5&hm=14931d438877d5a758d957495c9f327fd459e5867cd9d0b2d994050da92cc234&=&format=webp&width=566&height=701"
          itemLocation="Porto, Portugal"
          itemDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id egestas dui. Nullam finibus aliquam enim quis faucibus. Aenean ac commodo dolor, nec bibendum velit."
          itemURLTwitter=""
          itemURLTwitch=""
          itemURLYoutube=""
          itemURLFigma=""
          itemURLCodepen=""
          itemURLFacebook=""
          itemURLCV=""
          itemEmail="heyliceeee@gmail.com"
        />
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
