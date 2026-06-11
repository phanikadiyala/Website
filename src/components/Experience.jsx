import React from 'react';
import styles from './Experience.module.css';

const jobs = [
  {
    company: 'Kaiser Permanente',
    location: 'Pleasanton, CA',
    period: '2015 – Present',
    role: 'Web Interface Developer',
    bullets: [
      'Built enterprise UI components using React and TypeScript with reusable, scalable architecture and strict type safety across multiple product teams.',
      'Developed functional components with custom hooks, Context API, and TypeScript interfaces to enforce data contracts and reduce runtime errors.',
      'Integrated GraphQL APIs using Apollo Client and Apollo Server, replacing legacy REST calls and improving query efficiency.',
      'Led peer code reviews enforcing React and TypeScript best practices; conducted cross-browser testing across Chrome, Firefox, Safari, and Edge.',
      'Collaborated with stakeholders to translate requirements into polished, WCAG-accessible UI implementations.',
    ],
  },
  {
    company: 'Apollo Group, Inc.',
    location: 'San Jose, CA',
    period: 'Feb 2012 – Feb 2015',
    role: 'Front-End Developer',
    bullets: [
      'Implemented responsive, pixel-perfect UI designs from wireframes and mockups; optimized layouts across desktop and mobile.',
      'Built complex application interactions and animations using JavaScript, jQuery, and AngularJS.',
      'Collaborated with UX/UI designers and back-end developers to deliver cohesive product features and participated in requirements gathering.',
    ],
  },
  {
    company: 'The Sage Group',
    location: 'San Francisco, CA',
    period: 'Oct 2011 – Dec 2011',
    role: 'UI Developer',
    bullets: [
      'Migrated web pages from legacy CMS to new platform with full content validation and cross-browser testing.',
      'Resolved post-migration CSS and JavaScript compatibility issues across all major browsers.',
    ],
  },
  {
    company: 'BlendAbout, Inc.',
    location: 'San Francisco, CA',
    period: 'Jan 2009 – Sep 2011',
    role: 'Front-End Developer',
    bullets: [
      'Created responsive, cross-browser compatible web pages using HTML5, CSS3, and jQuery.',
      'Developed complex UI interactions and animations; executed full-stack website launches with front-end focus.',
      'Participated in requirements gathering and technical specification reviews.',
    ],
  },
];

export default function Experience() {
  return (
    <section className={styles.section} id="experience">
      <div className="section-label">Career</div>
      <h2 className="section-title">Experience</h2>
      <div className={styles.timeline}>
        {jobs.map((job) => (
          <div key={job.company} className={styles.item}>
            <div>
              <div className={styles.company}>{job.company}</div>
              <div className={styles.location}>{job.location}</div>
              <div className={styles.period}>{job.period}</div>
            </div>
            <div>
              <div className={styles.role}>{job.role}</div>
              <ul className={styles.bullets}>
                {job.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
