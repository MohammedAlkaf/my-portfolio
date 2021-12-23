
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
      photo:'https://i.ibb.co/pPZZqmg/Car-Dodge-Game.png',
      description:
        `This game is called Car Dodge. It's buit using Object Oriented Programming. In the game, you play as a car driver. The only thing you can do is move left or right with the arrows of your keyboard and dodge cars`,
      stack: ['JavaScript', 'CSS', 'HTML'],
      sourceCode: 'https://github.com',
      livePreview: 'https://car-dodge-game.netlify.app/',
    },
    {
      name: 'Critter',
      photo:'https://i.ibb.co/rbn8NRC/Twitter-Clone-Project.png',
      description:
        "Critter is a full-stack web app. It's simillar to twitter. The user can post a new tweet, like and retweet any tweet in the home feed",
      stack: ['React', 'JavaScript', 'NodeJs', 'CSS'],
      sourceCode: 'https://github.com',
      livePreview: 'https://github.com',
    },
    {
      name: 'SlingAir',
      photo:'https://i.ibb.co/ZBNRbVX/Sling-Air-Project.png',
      description:
        'SlingAir is full-stack flight booking app. It allows current user to make a flight reservation, modify and, retrieve an existing reservation',
      stack: ['React', 'JavaScript', 'NodeJS', 'MongoDB', 'ExpressJS', "CSS"],
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