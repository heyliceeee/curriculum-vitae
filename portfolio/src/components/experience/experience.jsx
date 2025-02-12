import React, { useEffect, useState } from "react";
import "./experience.css";

function Experience(props) {
  const [activeIndex, setActiveIndex] = useState(1);
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    fetch(process.env.API_URL+"/experience")
    .then((res) => res.json())
    .then((data) => setExperiences(data))
    .catch((err) => console.error("Error searching for experiences:", err));
  }, []);

  const handleExperienceClick = (experienceId) => {
    setActiveIndex(experienceId === activeIndex ? 1 : experienceId);
  };

  return (
    <div className="containerExperience">
      <div className="titleExperience">{props.itemExperience}</div>

      <div className="containerInfo">
        <div className="containerCompaniesExperience">
          {experiences.map((experience) => (
            <div
              key={experience.id}
              className="containerCompanyExperience"
              onClick={() => handleExperienceClick(experience.id)}
            >
              <div
                className={
                  experience.id === activeIndex ? "line" : "lineDisable"
                }
              ></div>

              <div
                className={
                  experience.id === activeIndex
                    ? "containerCompanyName"
                    : "containerCompanyNameDisable"
                }
              >
                <div
                  className={
                    experience.id === activeIndex
                      ? "titleCompanyName"
                      : "titleCompanyNameDisable"
                  }
                >
                  {experience.company}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="containerDescriptionsExperience">
          <div className="containerSidebarCompaniesExperience">
            {experiences.map((experience) => (
              <div
                key={experience.id}
                className="containerSidebarCompanyExperience"
                onClick={() => handleExperienceClick(experience.id)}
              >
                <div
                  className={
                    experience.id === activeIndex
                      ? "containerCompanyName"
                      : "containerCompanyNameDisable"
                  }
                >
                  <div
                    className={
                      experience.id === activeIndex
                        ? "titleCompanyName"
                        : "titleCompanyNameDisable"
                    }
                  >
                    {experience.company}
                  </div>
                </div>

                <div
                  className={
                    experience.id === activeIndex
                      ? "lineSidebar"
                      : "lineDisableSidebar"
                  }
                ></div>
              </div>
            ))}
          </div>

          {experiences.map(
            (experience) =>
              activeIndex === experience.id && (
                <div
                  key={experience.id}
                  className="containerDescriptionExperience"
                >
                  <div className="containerJobDate">
                    <div className="titleJob">{experience.job}</div>

                    <div className="containerDate">
                      <div className="dateStart">{experience.dateStart}</div>
                      <div className="dateStart"> - </div>
                      <div className="dateEnd">{experience.dateEnd}</div>
                    </div>
                  </div>

                  <div className="containerCompany">
                    {experience.companyFull}
                  </div>

                  <div className="containerDescription">
                    {experience.description}
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default Experience;
