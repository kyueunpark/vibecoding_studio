import styles from './Skills.module.css';

const Skills = () => {
  const skills = [
    { name: 'React', color: 'var(--primary)' },
    { name: 'Next.js', color: 'var(--secondary)' },
    { name: 'TypeScript', color: 'var(--accent)' },
    { name: 'Node.js', color: 'var(--lime)' },
    { name: 'CSS Modules', color: 'var(--lavender)' },
    { name: 'PostgreSQL', color: 'var(--primary)' },
    { name: 'AWS', color: 'var(--secondary)' },
    { name: 'Figma', color: 'var(--accent)' },
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
