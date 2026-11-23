import { Cloud, Code2, Cpu, Database, Server, Wrench } from 'lucide-react'

const skillGroups = [
  {
    title: 'Frontend',
    Icon: Code2,
    accent: '#818cf8',
    skills: ['React.js', 'HTML', 'CSS', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    title: 'Backend',
    Icon: Server,
    accent: '#22d3ee',
    skills: ['Laravel', 'PHP', 'REST API Design', 'MFA / Authentication', 'Role-Based Access Control (RBAC)'],
  },
  {
    title: 'Cloud & DevOps',
    Icon: Cloud,
    accent: '#34d399',
    skills: ['AWS', 'EC2', 'RDS', 'CloudFront', 'CI/CD Pipelines', 'GitHub Actions', 'Docker'],
  },
  {
    title: 'Database Management',
    Icon: Database,
    accent: '#fbbf24',
    skills: ['MySQL', 'Relational Schema Design'],
  },
  {
    title: 'AI / IoT',
    Icon: Cpu,
    accent: '#f472b6',
    skills: ['Prompt Engineering', 'Prophet', 'MobileNetV2', 'AI Tools (ChatGPT, Claude, Copilot)', 'IoT Hardware', 'ESP32'],
  },
  {
    title: 'Tools',
    Icon: Wrench,
    accent: '#c084fc',
    skills: ['Git / GitHub', 'Postman', 'VS Code', 'Figma', 'Trello'],
  },
]

function Skills() {
  return (
    <section id="Skills" className="skills-section">
      <div className="skills-content">
        <div className="skills-heading">
          <p className="skills-eyebrow">WHAT I WORK WITH</p>
          <h2>Skills &amp; <span>Tools</span></h2>
          <p className="skills-intro">A snapshot of the technologies and practices I use to build and ship projects.</p>
        </div>

        <div className="skills-grid">
          {skillGroups.map(({ title, Icon, accent, skills }) => (
            <article className="skill-card" key={title} style={{ '--skill-accent': accent }}>
              <div className="skill-card-heading">
                <span className="skill-icon"><Icon aria-hidden="true" size={22} strokeWidth={2} /></span>
                <h3>{title}</h3>
              </div>
              <ul className="skill-tags" aria-label={`${title} skills`}>
                {skills.map(skill => <li key={skill}>{skill}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
