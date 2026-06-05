export const portfolio = {
  name: 'Bollam Laxmi Spandana',
  role: 'AI/ML Researcher | Full Stack Developer | B.Tech CSE Student',
  intro:
    'Computer Science Engineering student focused on building practical AI systems, research-backed machine learning pipelines, and full stack products that solve real human problems.',
  summary:
    'I am a B.Tech CSE student at SR University with strong interests in Artificial Intelligence, Machine Learning, Data Science, Brain-Computer Interfaces, and Full Stack Development. My work combines research curiosity with production-minded engineering across deep learning, web platforms, and assistive technology.',
  assets: {
    profilePhoto: '/assets/images/profile.jpeg',
    nccPhoto: '/assets/images/ncc.jpeg',
    resumePdf: '/assets/documents/resume.pdf',
    nccCertificatePdf: 'https://drive.google.com/file/d/1ockyhjuC_zr38cbD38qaAHiY4Hx1X1HU/view?usp=drivesdk',
  },
  contact: {
    email: 'spandanabollam15@gmail.com',
    phone: '+91 6301347705',
    github: 'https://github.com/laxmispandana15',
    linkedin: 'https://www.linkedin.com/in/laxmi-spandana-bollam-201082290',
  },
  emailjs: {
    serviceId: 'YOUR_EMAILJS_SERVICE_ID',
    templateId: 'YOUR_EMAILJS_TEMPLATE_ID',
    publicKey: 'YOUR_EMAILJS_PUBLIC_KEY',
  },
  education: [
    { title: 'B.Tech CSE', place: 'SR University', period: '2023-2027', detail: 'CGPA: 8.3' },
    { title: 'Intermediate', place: 'SR Junior College', period: '', detail: '93.6%' },
    { title: 'SSC', place: "Fusco's High School", period: '', detail: '10.0 GPA' },
  ],
  skills: [
    { group: 'Programming', items: ['Python', 'Java', 'JavaScript', 'SQL', 'HTML', 'CSS'] },
    { group: 'Machine Learning', items: ['PyTorch', 'Scikit-learn', 'CNN', 'GRU', 'EEG Signal Processing'] },
    { group: 'Web Development', items: ['React.js', 'Node.js', 'Express.js', 'Flask'] },
    { group: 'Data Analytics', items: ['Excel', 'Power BI', 'Tableau', 'Google Sheets'] },
    { group: 'Tools', items: ['Git', 'GitHub', 'GitHub Actions', 'VS Code', 'Google Colab', 'Arduino IDE'] },
  ],
  experience: [
    {
      title: 'Research Intern & Trainee',
      organization: 'NIT Warangal',
      duration: 'May 2025 - Jun 2025',
      bullets: [
        'Built an end-to-end EEG signal classification pipeline.',
        'Worked on feature extraction and CNN-GRU deep learning models.',
        'Developed a real-time assistive communication prototype.',
        'Integrated machine learning models with ESP32 and LCD display modules.',
      ],
    },
  ],
  projects: [
    {
      title: 'BCI-Based Thought-to-Text Communication System for Voiceless Individuals',
      image: '/assets/images/project-bci.svg',
      description:
        'Developed a Brain-Computer Interface system that converts EEG signals into readable text using CNN-GRU deep learning models and ESP32 integration.',
      links: [
        { label: 'Research Paper', url: '#' },
      ],
    },
    {
      title: 'FoodSprint - AI Smart Food Ordering and Diet Recommendation System',
      image: '/assets/images/project-foodsprint.svg',
      description:
        'Developed a Flask-based food delivery platform with authentication, cart management, order tracking, AI diet recommendations, and restaurant discovery using OpenStreetMap APIs.',
      links: [
        { label: 'GitHub Repository', url: 'https://github.com/laxmispandana15/food_sprint' },
        { label: 'Live Demo', url: 'https://food-sprint.onrender.com/' },
      ],
    },
    {
      title: 'Cloud-Based Hotel Booking System',
      image: '/assets/images/project-hotel.svg',
      description:
        'Built a hotel booking platform using React.js, Node.js, and PostgreSQL with role-based authentication, invoicing, and CI/CD deployment.',
      links: [
        { label: 'GitHub Repository', url: 'https://github.com/laxmispandana15/cloud_hotel_booking' },
        { label: 'Live Demo', url: 'https://cloud-hotel-booking.onrender.com/' },
      ],
    },
  ],
  publication: {
    title: 'Brain-Computer Interface Based Thought-to-Text Communication System for Voiceless Individuals',
    conference: 'IEEE ICRCICN 2025',
    links: [
      { label: 'View IEEE Publication', url: 'https://ieeexplore.ieee.org/abstract/document/11364854' },
      { label: 'DOI', url: 'https://doi.org/10.1109/ICRCICN68210.2025.11364854' },
    ],
  },
  achievements: [
    'IEEE Research Publication (ICRCICN 2025)',
    'Research Internship at NIT Warangal',
    'NCC B Certificate Holder',
  ],
  ncc: {
    title: 'NCC B Certificate Holder',
    institution: 'SR University',
    duration: 'Aug 2023 - Feb 2025',
  },
}
