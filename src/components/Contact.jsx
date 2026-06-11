import React from 'react';
import styles from './Contact.module.css';

const contactItems = [
  { label: 'Email',    value: 'phanikadiyala721@gmail.com' },
  { label: 'Phone',    value: '1-408-784-1814' },
  { label: 'Location', value: 'Pleasanton, CA' },
];

export default function Contact() {
  return (
    <section className={styles.section} id="contact">
      <div className="section-label" style={{ color: 'rgba(255,255,255,0.55)' }}>
        Get in touch
      </div>
      <h2 className="section-title" style={{ color: '#fff', fontSize: '2.8rem' }}>
        Let's work together
      </h2>
      <div className={styles.details}>
        {contactItems.map((item) => (
          <div key={item.label} className={styles.item}>
            <span className={styles.itemLabel}>{item.label}</span>
            {item.value}
          </div>
        ))}
      </div>
    </section>
  );
}
