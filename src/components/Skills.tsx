const logos = [
  {
    title: 'HTML5',
    path: '/assets/images/logos/html.svg',
  },
  {
    title: 'CSS',
    path: '/assets/images/logos/css.svg',
  },
  {
    title: 'JavaScript',
    path: '/assets/images/logos/javascript.svg',
  },
  {
    title: 'React',
    path: '/assets/images/logos/react.png',
  },
  {
    title: 'TypeScript',
    path: '/assets/images/logos/typescript.svg',
  },
  {
    title: 'Sass',
    path: '/assets/images/logos/sass.svg',
  },
  {
    title: 'Tailwind',
    path: '/assets/images/logos/tailwind.svg',
  },
  {
    title: 'Firebase',
    path: '/assets/images/logos/firebase.svg',
  },
  {
    title: 'SQL',
    path: '/assets/images/logos/sql.svg',
  },
  {
    title: 'Git',
    path: '/assets/images/logos/git.svg',
  },
  {
    title: 'Git Hub',
    path: '/assets/images/logos/github.svg',
  },
  {
    title: 'Vs Code',
    path: '/assets/images/logos/vscode.svg',
  },
]

const Skills = () => {
  return (
    <section>
      <div className="container">
        <h2>Skills</h2>
        <ul className="grid grid-cols-4 py-16 mx-32 text-center rounded-lg gap-y-8 justify-items-center bg-secondary">
          {logos.map(logo => (
            <li key={logo.title}>
              <img
                src={logo.path}
                alt={`logo of ${logo.title}`}
                className="h-24"
              />
              {logo.title}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
export default Skills
