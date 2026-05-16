import styles from './Projects.module.css';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured online store with cart functionality.',
      color: 'var(--primary)',
      tag: 'Next.js',
    },
    {
      title: 'AI Dashboard',
      description: 'Interactive dashboard for visualizing AI model data.',
      color: 'var(--secondary)',
      tag: 'React',
    },
    {
      title: 'Social App',
      description: 'Connect with friends in real-time.',
      color: 'var(--accent)',
      tag: 'Socket.io',
    },
  ];

  return (
    <section id="projects" className={styles.projects}>
      <h2 className={styles.sectionTitle}>Featured Work</h2>
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.card} style={{ '--accent-color': project.color } as any}>
            <div className={styles.tag}>{project.tag}</div>
            <div className={styles.content}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.description}>{project.description}</p>
              <a href="#" className={styles.link}>View Case Study →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
