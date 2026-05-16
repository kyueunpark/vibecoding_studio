import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <p className={styles.builtWith}>
          Built with <span className={styles.highlight}>Next.js</span> & <span className={styles.highlight}>Vanilla CSS</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
