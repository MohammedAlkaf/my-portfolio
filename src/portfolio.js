
const header = {
    // all the properties are optional - can be left empty or deleted
    homepage: 'https://github.com/MohammedAlkaf',
    title: 'MA.',
  }
  
  const about = {
    // all the properties are optional - can be left empty or deleted
    name: 'Mohammed Al-Kaf',
    role: 'Junior Full Stack Developer',
    description:
      "I’ve always sought out new opportunities and challenges that are meaningful to me. I am an electrical engineer and I started my coding journey using C++ as my first programming language. I found my passion in coding where creative ideas come into life.  As a web developer, I enjoy using my obsessive attention to detail, my unequivocal love for making things, and my mission-driven work ethic to literally change the world. That's why I’m excited to make a big impact at a high growth company.",
    resume: 'https://documentcloud.adobe.com/link/track?uri=urn:aaid:scds:US:faf47488-4c65-4945-9332-929551c9defc',
    social: {
      linkedin: 'https://www.linkedin.com/in/mohammed-al-kaf/',
      github: 'https://github.com/MohammedAlkaf',
    },
    photo:"https://i.ibb.co/HNJnJNS/CBE19-C54-E33-E-486-D-BC2-F-3-D38-B5-CAA849.jpg"
  }
  
  const projects = [
    // projects can be added an removed
    // if there are no projects, Projects section won't show up
    {
      name: 'SportsPick App',
      photo:[
        'https://i.ibb.co/myLmfb5/preview-1.png',
        'https://i.ibb.co/L06Qtcs/preview-2.png',
        'https://i.ibb.co/kySXcpj/preview-3.png',
        'https://i.ibb.co/2FLkNSg/preview-4.png',
        'https://i.ibb.co/rb0hc5M/preview-5.png',
        'https://i.ibb.co/z79ySTy/preview-6.png',
        'https://i.ibb.co/D8XW1ZP/preview-7.png',
        'https://i.ibb.co/Mp1r8gz/preview-8.png',
        'https://i.ibb.co/G0jGVk7/preview-9.png'
      ],
      description:
        "SportsPick is a full-stack mobile application. It's a social platform where users can join nearby sport activities and invite other users to join their activities. ",
      stack: ['React', 'JavaScript', 'NodeJS', 'MongoDB', 'ExpressJS', "Styled-components"],
      sourceCode: 'https://github.com/MohammedAlkaf/SportsPickApp',
      livePreview: 'https://github.com/MohammedAlkaf/SportsPickApp',
    },
    {
      name: 'Critter',
      photo:[
        'https://i.ibb.co/cwRvkTB/Critter1.png',
        'https://i.ibb.co/YWDcwrs/Critter2.png',
        'https://i.ibb.co/ZKCFDwL/Critter3.png'
      ],
      description:
        "Critter is a full-stack web app. It's simillar to twitter. The user can post a new tweet, like and retweet any tweet in the home feed",
      stack: ['React', 'JavaScript', 'NodeJS', 'CSS', "ExpressJS", "Styled-components"],
      sourceCode: 'https://github.com/MohammedAlkaf',
      livePreview: 'https://github.com/MohammedAlkaf',
    },
    {
      name: 'SlingAir',
      photo:[
        'https://i.ibb.co/pdxYg4J/Sling-Air2.gif',
        'https://i.ibb.co/JmmPYkq/Sling-Air1.png',
        'https://i.ibb.co/nD5gFgH/Sling-Air3.png'],
      description:
        'SlingAir is full-stack flight booking app. It allows current user to make a flight reservation, modify and, retrieve an existing reservation',
      stack: ['React', 'JavaScript', 'NodeJS', "MongoDB", "ExpressJS", "Styled-components"],
      sourceCode: 'https://github.com/MohammedAlkaf',
      livePreview: 'https://github.com/MohammedAlkaf',
    },
    {
      name: 'Fruit Emporium',
      photo:['https://i.ibb.co/8dp9yP3/Eco-System1.png','https://i.ibb.co/1RRnBvS/Eco-System2.png','https://i.ibb.co/bJ71fW6/Eco-System3.png'],
      description:
        'Fruit Emporium is a simple modern food store. The customer can check different types of fruits available in the store and read more info about it and check its price and availability',
      stack: ['React', 'JavaScript', "CSS", "Styled-components"],
      sourceCode: 'https://github.com/MohammedAlkaf',
      livePreview: 'https://github.com/MohammedAlkaf',
    },
    {
      name: 'Car Dodge Game',
      photo:[
        'https://i.ibb.co/RYCfsZX/Car-Dodge1.png',
        'https://i.ibb.co/KcgjQHB/Car-Dodge2.png',
        'https://i.ibb.co/MZSXCPW/Car-Dodge3.png',
        'https://i.ibb.co/JztwTNd/Car-Dodge4.png'
      ],
      description:
        `Car Dodge is built using Object Oriented Programming. In the game, you are the car driver. You can ove left, right, up ad down with the arrows of your keyboard and dodge cars.`,
      stack: ['JavaScript', 'CSS', 'HTML'],
      sourceCode: 'https://github.com/MohammedAlkaf',
      livePreview: 'https://car-dodge-game.netlify.app/',
    },
  ]
  
  const skills = [
    // skills can be added or removed
    // if there are no skills, Skills section won't show up
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    "NodeJS",
    "Styled-components",
    "C++",
    'Material UI',
    'Git',
    'MongoDB',
    "Firebase",

  ]
  
  const contact = {
    // email is optional - if left empty Contact section won't show up
    email: 'm.alkaff11@gmail.com',
  }
  
  export { header, about, projects, skills, contact }