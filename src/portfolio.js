import CarDodgeGame from './assests/CarDodgeGame.png';

const header = {
    // all the properties are optional - can be left empty or deleted
    homepage: 'https://github.com/MohammedAlkaf',
    title: 'MA.',
  }
  
  const about = {
    // all the properties are optional - can be left empty or deleted
    name: 'Mohammed Al-Kaf',
    role: 'Full Stack Developer',
    description:
      "I’ve always sought out new opportunities and challenges that are meaningful to me. I am an electrical engineer and I started my coding journey using C++ as my first programming language. I found my passion in coding where creative ideas come into life.  As a web developer, I enjoy using my obsessive attention to detail, my unequivocal love for making things, and my mission-driven work ethic to literally change the world. That's why I’m excited to make a big impact at a high growth company.",
    resume: 'https://example.com',
    social: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
    },
    photo:"https://i.ibb.co/HNJnJNS/CBE19-C54-E33-E-486-D-BC2-F-3-D38-B5-CAA849.jpg"
  }
  
  const projects = [
    // projects can be added an removed
    // if there are no projects, Projects section won't show up
    {
      name: 'Car Dodge Game',
      photo:CarDodgeGame,
      description:
        `This game is called Car Dodge. It's buit using Object Oriented Programming. In the game, you play as a car driver. The only thing you can do is move left or right with the arrows of your keyboard and dodge cars`,
      stack: ['JavaScript', 'CSS', 'HTML'],
      sourceCode: 'https://github.com',
      livePreview: 'https://car-dodge-game.netlify.app/',
    },
    {
      name: 'Project 2',
      description:
        'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
      stack: ['SASS', 'TypeScript', 'React'],
      sourceCode: 'https://github.com',
      livePreview: 'https://github.com',
    },
    {
      name: 'Project 3',
      description:
        'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
      stack: ['SASS', 'TypeScript', 'React'],
      sourceCode: 'https://github.com',
      livePreview: 'https://github.com',
    },
  ]
  
  const skills = [
    // skills can be added or removed
    // if there are no skills, Skills section won't show up
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'Redux',
    'SASS',
    'Material UI',
    'Git',
    'CI/CD',
    'Jest',
    'Enzyme',
  ]
  
  const contact = {
    // email is optional - if left empty Contact section won't show up
    email: 'm.alkaff11@gmail.com',
  }
  
  export { header, about, projects, skills, contact }