import React from 'react';
import styles from './Education.module.css';

const degrees = [
  {
    degree: "Master's in Software Engineering",
    school: 'San Jose State University, San Jose, CA',
    year: '2005 – 2008',
  },
  {
    degree: "Master's in Computer Science",
    school: 'Acharya Nagarjuna University, India',
    year: '2000 – 2002',
  },
];

export default function Education() {
  return (
    <section className={styles.section} id="education">
      <div className="section-label">Academic background</div>
      <h2 className="section-title">Education</h2>
      <div className={styles.grid}>
        {degrees.map((d) => (
          <div key={d.degree} className={styles.card}>
            <div className={styles.degree}>{d.degree}</div>
            <div className={styles.school}>{d.school}</div>
            <div className={styles.year}>{d.year}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
