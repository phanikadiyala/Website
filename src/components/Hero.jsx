import React from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={styles.hero}>
      {/* LEFT */}
      <div className={styles.heroLeft}>
        <div className={styles.tag}>Frontend Developer · 15+ Years</div>
        <h1 className={styles.name}>
          Phani<br />
          <em>Kadiyala</em>
        </h1>
        <div className={styles.title}>React · TypeScript · GraphQL · HTML · CSS</div>
        <button className={styles.cta} onClick={scrollToContact}>
          Get in touch ↓
        </button>
      </div>

      {/* RIGHT — About Me */}
      <div className={styles.heroRight}>
        <div className={styles.aboutLabel}>About me</div>
        <h2 className={styles.aboutHeading}>
          Building interfaces that<br />
          <em>people love to use.</em>
        </h2>
        <p className={styles.aboutBody}>
          I'm a frontend engineer with over 15 years of experience crafting
          scalable, high-performance web applications for enterprise teams.
          Currently at Kaiser Permanente, I lead UI development using React,
          TypeScript, and GraphQL — turning complex requirements into clean,
          accessible interfaces.
        </p>
        <p className={styles.aboutBody}>
          I care deeply about code quality, component architecture, and the
          small details that make a product feel polished. From design systems
          to CI/CD pipelines, I'm comfortable across the full frontend stack.
        </p>
        <div className={styles.aboutDivider} />
        <p className={styles.aboutFootnote}>
          Based in Pleasanton, CA · Open to new opportunities
        </p>
      </div>
    </div>
  );
}
