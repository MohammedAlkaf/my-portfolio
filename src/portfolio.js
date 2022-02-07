
const header = {
    // all the properties are optional - can be left empty or deleted
    homepage: 'https://github.com/MohammedAlkaf',
    title: 'Mohammed Al-Kaf',
  }
  
  const about = {
    // all the properties are optional - can be left empty or deleted
    name: 'Mohammed Al-Kaf',
    role: 'Junior Full Stack Developer',
    description:
      `I’ve always sought out new opportunities and challenges that are meaningful to me. I am an electrical engineer and I started my coding journey using C++ as my first programming language. I found my passion in coding where creative ideas come into life.
      As a web developer, I enjoy using my obsessive attention to detail, my unequivocal love for making things, and my mission-driven work ethic to literally change the world. That's why I’m excited to make a big impact at a high growth company.`,
    resume: 'https://documentcloud.adobe.com/link/track?uri=urn:aaid:scds:US:ef860706-0de9-4d1e-a49f-480563a6a41f',
    social: {
      linkedin: 'https://www.linkedin.com/in/mohammed-al-kaf/',
      github: 'https://github.com/MohammedAlkaf',
    },
    photo:"https://i.ibb.co/dfq91KC/IMG-3163-2.jpg"
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
      // livePreview: 'https://github.com/MohammedAlkaf/SportsPickApp',
    },
    {
      name: 'Haya E-Commerce Website',
      photo:[
        'https://i.ibb.co/cFdRQv9/iphone-7-minimal-mockup-free-preview-1.png'
      ],
      description:
        `(Work on Progress) Haya is a MERN stack e-commerece website for shopping with a responsive design for all devices. The user can log in/sign up, check the products available at the store, 
        add procusts to cart and check out and process pyament via Stripe.
        `,
      stack: ['ReactJS', 'JavaScript', 'NodeJS', 'MongoDB', 'ExpressJS', "JWT","Stripe","Redux","Styled-components"],
      sourceCode: 'https://github.com/MohammedAlkaf/SportsPickApp',
      livePreview: 'https://hayawear.netlify.app/',
    },
    {
      name: 'ChatRoom+ App',
      photo:[
        'https://i.ibb.co/gtPMX34/iphone-7-minimal-mockup-free-preview-1.png',
        'https://i.ibb.co/8PMNVWZ/iphone-7-minimal-mockup-free-preview-2.png',
        'https://i.ibb.co/hYYkwr3/iphone-7-minimal-mockup-free-preview-3.png',
        'https://i.ibb.co/2c2pk2G/iphone-7-minimal-mockup-free-preview-4.png',
      ],
      description:
        "ChatRoom+ is a realtime group chat application built with React and Socket.io. Users can login or sign up with a new account. In the app, Socket.io allows bi-directional Secured Realtime communication between the client and the server.",
      stack: ['React', 'Socket.io', 'JavaScript', 'NodeJS', 'MongoDB', 'ExpressJS', "Styled-components"],
      sourceCode: 'https://github.com/MohammedAlkaf/chat-system-using-socket-io',
      // livePreview: 'https://github.com/MohammedAlkaf/SportsPickApp',
    },
    {
      name: 'Critter',
      photo:[
        'https://i.ibb.co/0qXPfXy/critter-demo.gif',
        'https://i.ibb.co/cwRvkTB/Critter1.png',
        'https://i.ibb.co/YWDcwrs/Critter2.png',
        'https://i.ibb.co/ZKCFDwL/Critter3.png'
      ],
      description:
        "Critter is a full-stack web app. It's simillar to twitter. The user can post a new tweet, like and retweet any tweet in the home feed",
      stack: ['React', 'JavaScript', 'NodeJS', 'CSS', "ExpressJS", "Styled-components"],
      sourceCode: 'https://github.com/MohammedAlkaf',
      // livePreview: 'https://github.com/MohammedAlkaf',
    },
    {
      name: 'Hangman Game',
      photo:[
        'https://i.ibb.co/GkZdmC8/hangman-demo.gif',
        'https://i.ibb.co/cCfP3fx/hangman-1.png',
        'https://i.ibb.co/N328MvK/hangman-3.png'
      ],
      description:
        `Hangman is an old school favorite, a word game where the goal is simply to find the missing word or words.
        You will be presented with a number of blank spaces representing the missing letters you need to find.`,
      stack: ['React', 'JavaScript', "CSS", "Styled-components"],
        // sourceCode: 'https://github.com/MohammedAlkaf',
      livePreview: 'https://hangman-game2021.netlify.app',
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
      // livePreview: 'https://github.com/MohammedAlkaf',
    },
    {
      name: 'Fruit Emporium',
      photo:['https://i.ibb.co/8dp9yP3/Eco-System1.png','https://i.ibb.co/1RRnBvS/Eco-System2.png','https://i.ibb.co/bJ71fW6/Eco-System3.png'],
      description:
        'Fruit Emporium is a simple modern food store. The customer can check different types of fruits available in the store and read more info about it and check its price and availability',
      stack: ['React', 'JavaScript', "CSS", "Styled-components"],
      // sourceCode: 'https://github.com/MohammedAlkaf',
      livePreview: 'https://fruit-emporium.netlify.app',
    },
    {
      name: 'Car Dodge Game',
      photo:[
        'https://i.ibb.co/9VDtrGX/Car-Dodge-demo.gif',
        'https://i.ibb.co/RYCfsZX/Car-Dodge1.png',
        'https://i.ibb.co/KcgjQHB/Car-Dodge2.png',
        'https://i.ibb.co/MZSXCPW/Car-Dodge3.png',
        'https://i.ibb.co/JztwTNd/Car-Dodge4.png'
      ],
      description:
        `Car Dodge is built using Object Oriented Programming. In the game, you are the car driver. You can ove left, right, up ad down with the arrows of your keyboard and dodge cars.`,
      stack: ['JavaScript', 'CSS', 'HTML'],
      // sourceCode: 'https://github.com/MohammedAlkaf',
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