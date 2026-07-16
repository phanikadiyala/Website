import React from 'react';
import styles from './Projects.module.css';

const projects = [
  {
    name: 'JFA — Career Architecture Tool',
    description:
      'Built an interactive career architecture tool featuring a multi-tiered drill-down flow (Job Functions → Sub-functions → Domains). Clicking a domain dynamically reveals granular role details (Job Code, Title, Level, Pay Type, and Salary Grade) with integrated deep-linking that scrolls users directly to their target grade on the salary ledger.',
    tags: ['React', 'Interactive Drill-down', 'Deep Linking'],
    demo: 'https://phanikadiyala.github.io/JFA/',
    repo: 'https://github.com/phanikadiyala/JFA',
  },
  {
    name: 'Pay Calendar Dashboard',
    description:
      'Developed a highly visual payroll calendar dashboard featuring organization-based filtering and a color-coded data matrix. The application tracks complex payroll timelines, mapping out key dates such as pay period windows, processing deadlines, holidays, and paydays across a multi-month view.',
    tags: ['React', 'Data Visualization', 'Filtering'],
    demo: 'https://phanikadiyala.github.io/paycalendar/',
    repo: 'https://github.com/phanikadiyala/paycalendar',
  },
];

export default function Projects() {
  return (
    <section className={styles.section} id="projects">
      <div className="section-label">Work</div>
      <h2 className="section-title">Projects</h2>
      <div className={styles.grid}>
        {projects.map((project) => (
          <div key={project.name} className={styles.card}>
            <div className={styles.name}>{project.name}</div>
            <p className={styles.description}>{project.description}</p>
            <div className={styles.tags}>
              {project.tags.map((tag) => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>
            <div className={styles.links}>
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className={styles.linkPrimary}>
                Live Demo
              </a>
              <a href={project.repo} target="_blank" rel="noopener noreferrer" className={styles.linkSecondary}>
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
