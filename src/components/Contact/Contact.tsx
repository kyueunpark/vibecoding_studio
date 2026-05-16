import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.title}>Let&apos;s Create Something Awesome!</h2>
        <p className={styles.subtitle}>
          I&apos;m always looking for new challenges and cool people to work with.
        </p>
        <div className={styles.actions}>
          <a href="mailto:hello@example.com" className={styles.mailBtn}>
            Send me an Email 💌
          </a>
          <div className={styles.socials}>
            <a href="#" className={styles.socialLink}>GH</a>
            <a href="#" className={styles.socialLink}>LI</a>
            <a href="#" className={styles.socialLink}>TW</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
