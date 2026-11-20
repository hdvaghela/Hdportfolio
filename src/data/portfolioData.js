export const personalInfo = {
  name: 'Hardik Vaghela',
  role: 'Full Stack Developer',
  specialty: 'MERN Stack Developer',
  email: 'hdvaghela47@gmail.com',
  phone: '+91 88660 58573',
  location: 'Ahmedabad, Gujarat, India',
  github: 'https://github.com/hdvaghela',
  linkedin: 'https://www.linkedin.com/in/hardik-vaghela-360812264',
}

export const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export const skillGroups = [
  { name: 'Frontend', number: '01', skills: ['HTML5', 'CSS3', 'JavaScript ES6+', 'React.js', 'Tailwind CSS', 'Bootstrap'] },
  { name: 'Backend', number: '02', skills: ['Node.js', 'Express.js', 'REST APIs', 'Python'] },
  { name: 'Database', number: '03', skills: ['MongoDB', 'Mongoose', 'MySQL'] },
  { name: 'Libraries', number: '04', skills: ['Redux Toolkit', 'jQuery', 'NumPy', 'Pandas'] },
  { name: 'Tools', number: '05', skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'AI-Assisted Development'] },
]

export const projects = [
  {
    number: '01',
    name: 'InventoTrack',
    category: 'B2B Inventory Management System',
    description: 'Built a centralized inventory management dashboard for tracking stock levels, sales trends, and supplier orders.',
    technologies: ['React.js', 'Redux Toolkit', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT'],
    features: ['Inventory dashboard', 'Stock tracking', 'Supplier management', 'REST API integration', 'JWT authentication', 'Role-based access'],
    github: 'https://github.com/hdvaghela/InventoTrack/tree/main',
    visual: 'inventory',
  },
  {
    number: '02',
    name: 'EstateView',
    category: 'Real Estate Listing Portal',
    description: 'Developed a responsive property browsing platform for homebuyers and renters with advanced filtering and property visualization.',
    technologies: ['React.js', 'Tailwind CSS', 'REST APIs', 'Google Maps API'],
    features: ['Property listing', 'Price and location filters', 'Image carousels', 'Lazy loading', 'Infinite scrolling', 'Google Maps integration'],
    github: 'https://github.com/hdvaghela/estateview',
    visual: 'estate',
  },
  {
    number: '03',
    name: 'SyncBoard',
    category: 'Team Collaboration & Kanban Tool',
    description: 'Built a collaborative Kanban board with drag-and-drop task management and real-time task synchronization.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io'],
    features: ['Kanban task management', 'Drag-and-drop functionality', 'Ticket assignment', 'Real-time updates', 'Socket.io integration'],
    github: 'https://github.com/hdvaghela/syncboard',
    visual: 'kanban',
  },
]

export const experience = {
  company: 'Amar Infotech Pvt. Ltd.',
  position: 'Full Stack Developer',
  duration: 'January 2025 – Present',
  location: 'Ahmedabad, Gujarat',
  responsibilities: [
    'Develop and maintain web application features using React.js, JavaScript, Node.js, and Express.js.',
    'Build responsive interfaces using Tailwind CSS and Bootstrap.',
    'Develop and integrate RESTful APIs.',
    'Work with MongoDB and Mongoose.',
    'Implement CRUD operations and form validation.',
    'Debug frontend and backend issues.',
    'Collaborate using Git and GitHub.',
    'Use AI-assisted development tools for coding and troubleshooting.',
  ],
}

export const education = {
  degree: 'Bachelor of Engineering',
  university: 'Gujarat Technological University',
  year: '2023',
}
