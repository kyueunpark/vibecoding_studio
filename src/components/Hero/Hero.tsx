import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.badge}>Available for projects</div>
        <h1 className={styles.title}>
          Creating <span className={styles.highlightPink}>Digital</span> <br />
          <span className={styles.highlightBlue}>Experiences</span> that <br />
          <span className={styles.highlightYellow}>Inspire.</span>
        </h1>
        <p className={styles.subtitle}>
          I&apos;m a Full-Stack Developer building playful and functional web apps.
        </p>
        <div className={styles.cta}>
          <a href="#projects" className={styles.primaryBtn}>Explore Work</a>
          <a href="#contact" className={styles.secondaryBtn}>Say Hello</a>
        </div>
      </div>
      
      <div className={`${styles.shape} ${styles.circle}`}></div>
      <div className={`${styles.shape} ${styles.square}`}></div>
      <div className={`${styles.shape} ${styles.triangle}`}></div>
    </section>
  );
};

export default Hero;
