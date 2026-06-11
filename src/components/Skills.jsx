import React from 'react';
import styles from './Skills.module.css';

const skillGroups = [
  {
    title: 'Core Languages',
    skills: [
      { name: 'JavaScript ES6+', highlight: true },
      { name: 'TypeScript', highlight: true },
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'SASS / LESS' },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    skills: [
      { name: 'React', highlight: true },
      { name: 'GraphQL', highlight: true },
      { name: 'Apollo Client' },
      { name: 'Redux' },
      { name: 'jQuery' },
      { name: 'AngularJS' },
    ],
  },
  {
    title: 'UI / UX',
    skills: [
      { name: 'Responsive Design' },
      { name: 'Mobile-First' },
      { name: 'Cross-Browser' },
      { name: 'Pixel-Perfect' },
    ],
  },
  {
    title: 'Build & Deployment',
    skills: [
      { name: 'Git', highlight: true },
      { name: 'Jenkins' },
      { name: 'Maven' },
      { name: 'Webpack' },
      { name: 'npm' },
      { name: 'CI/CD' },
    ],
  },
  {
    title: 'API & Data',
    skills: [
      { name: 'Apollo Server', highlight: true },
      { name: 'REST APIs' },
      { name: 'Express.js' },
      { name: 'JSON' },
      { name: 'AJAX' },
    ],
  },
];

export default function Skills() {
  return (
    <section className={styles.section} id="skills">
      <div className="section-label">Expertise</div>
      <h2 className="section-title">Technical skills</h2>
      <div className={styles.grid}>
        {skillGroups.map((group) => (
          <div key={group.title} className={styles.group}>
            <div className={styles.groupTitle}>{group.title}</div>
            <div className={styles.tags}>
              {group.skills.map((skill) => (
                <span
                  key={skill.name}
                  className={`${styles.tag} ${skill.highlight ? styles.tagHighlight : ''}`}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
