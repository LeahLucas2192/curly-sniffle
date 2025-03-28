import React from "react";
import "./skills.css";

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="text-3xl font-bold mb-8">Languages & Frameworks & Skills</h2>
      <div className="">

        {/* Programming Languages */}
        <div>
          <h3 className="skills-grid h3">Programming Languages</h3>
          <div className="badge-container">
            <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python" />
            <img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white" alt="Java" />
            <img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
            <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
            <img src="https://img.shields.io/badge/C++-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white" alt="C++" />
            <img src="https://img.shields.io/badge/SQL-4479A1?style=for-the-badge&logo=postgresql&logoColor=white" alt="SQL" />
            <img src="https://img.shields.io/badge/NoSQL-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="NoSQL" />
          </div>
        </div>

        {/* Frontend Frameworks */}
        <div>
          <h3 className="skills-grid h3">Frontend Frameworks</h3>
          <div className="badge-container">
            <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React.js" />
            <img src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white" alt="Angular" />
            <img src="https://img.shields.io/badge/Vue.js-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white" alt="Vue.js" />
          </div>
        </div>

        {/* Backend Frameworks */}
        <div>
          <h3 className="skills-grid h3">Backend Frameworks</h3>
          <div className="badge-container">
            <img src="https://img.shields.io/badge/Node.js-43853D.svg?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
            <img src="https://img.shields.io/badge/Spring%20Boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white" alt="Spring Boot" />
            <img src="https://img.shields.io/badge/Hibernate-59666C?style=for-the-badge&logo=hibernate&logoColor=white" alt="Hibernate" />
          </div>
        </div>

        {/* Web Development */}
        <div>
          <h3 className="skills-grid h3">Web Development</h3>
          <div className="badge-container">
            <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
            <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
            <img src="https://img.shields.io/badge/REST-02569B?style=for-the-badge&logo=rest&logoColor=white" alt="REST APIs" />
            <img src="https://img.shields.io/badge/Responsive%20Design-FF4088?style=for-the-badge&logo=responsive&logoColor=white" alt="Responsive Design" />
          </div>
        </div>

        {/* DevOps & Cloud */}
        <div>
          <h3 className="skills-grid h3">DevOps & Cloud</h3>
          <div className="badge-container">
            <img src="https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white" alt="AWS" />
            <img src="https://img.shields.io/badge/GCP-4285F4?style=for-the-badge&logo=googlecloud&logoColor=white" alt="GCP" />
            <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" />
            <img src="https://img.shields.io/badge/Kubernetes-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white" alt="Kubernetes" />
            <img src="https://img.shields.io/badge/CI/CD-0A0A0A?style=for-the-badge&logo=githubactions&logoColor=white" alt="CI/CD" />
          </div>
        </div>

        {/* UX/UI Design */}
        <div>
          <h3 className="skills-grid h3">UX/UI Design</h3>
          <div className="badge-container">
            <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" alt="Figma" />
            <img src="https://img.shields.io/badge/Wireframing-FF8C00?style=for-the-badge&logo=adobe&logoColor=white" alt="Wireframing" />
          </div>
        </div>

        {/* Tools */}
        <div>
          <h3 className="skills-grid h3">Tools</h3>
          <div className="badge-container">
            <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git" />
            <img src="https://img.shields.io/badge/VS%20Code-0078D4?style=for-the-badge&logo=visualstudiocode&logoColor=white" alt="VS Code" />
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="skills-grid h3">Soft Skills</h3>
          <ul className="">
            <li>Team Collaboration</li>
            <li>Communication</li>
            <li>Problem-Solving</li>
            <li>Time Management</li>
          </ul>
        </div>

        {/* Specialties */}
        <div>
          <h3 className="skills-grid h3">Specialties</h3>
          <ul className="">
            <li>Data Structures & Algorithms</li>
            <li>Debugging</li>
            <li>Security Best Practices</li>
            <li>User-Centered Design</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Skills;
