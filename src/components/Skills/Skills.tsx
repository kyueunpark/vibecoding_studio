import styles from './Skills.module.css';

const Skills = () => {
  const skills = [
    { name: 'React', color: 'var(--primary)' },
    { name: 'Next.js', color: 'var(--secondary)' },
    { name: 'TypeScript', color: 'var(--accent)' },
    { name: 'CSS Modules', color: 'var(--lime)' },
    { name: 'UI/UX Design', color: 'var(--lavender)' },
    { name: 'Performance', color: 'var(--primary)' },
    { name: 'Responsive', color: 'var(--secondary)' },
    { name: 'Animations', color: 'var(--accent)' },
  ];

  return (
    <section id="skills" className={styles.skills}>
      <h2 className={styles.sectionTitle}>My Superpowers</h2>
      <div className={styles.container}>
        <div className={styles.skillCloud}>
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className={styles.skillItem}
              style={{ backgroundColor: skill.color }}
            >
              {skill.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
