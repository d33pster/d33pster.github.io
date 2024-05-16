// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'd33pster', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['d33pster/detecteff', 'd33pster/pasta-man'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      // header: 'My Projects',
      // // To hide the `External Projects` section, keep it empty.
      // projects: [
      //   {
      //     title: 'Project Name',
      //     description:
      //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      //     imageUrl:
      //       'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
      //     link: 'https://example.com',
      //   },
      //   {
      //     title: 'Project Name',
      //     description:
      //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      //     imageUrl:
      //       'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
      //     link: 'https://example.com',
      //   },
      // ],
    },
  },
  seo: {
    title: 'Portfolio of Soumyo Deep Gupta',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'soumyodeepgupta',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: 'blipdipp',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: 'd33pster',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://d33pster.github.io',
    phone: '',
    email: 'deep.main.ac@gmail.com',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'Rust',
    'C',
    'Java',
    'Git/Github CLI',
    'Troubleshooting',
    'Rasa',
  ],
  experiences: [
    {
      company: 'Voltfraction pvt. ltd.',
      position: 'Discord Server Mod/League Operations',
      from: 'September 2020',
      to: 'March 2021',
      companyLink: 'https://www.linkedin.com/company/voltfraction/',
    },
    // {
    //   company: 'Company Name',
    //   position: 'Position',
    //   from: 'July 2019',
    //   to: 'August 2021',
    //   companyLink: 'https://example.com',
    // },
  ],
  certifications: [
    {
      name: 'Introduction to Git and Github',
      body: 'Google - Coursera',
      year: 'April 2023',
      link: 'https://www.coursera.org/account/accomplishments/certificate/6PQ53RVRYHB4',
    },
    {
      name: 'Using Python to interact with the Operating System',
      body: 'Google - Coursera',
      year: 'April 2023',
      link: 'https://www.coursera.org/account/accomplishments/certificate/8A3JHGML77WQ',
    },
    {
      name: 'IT Security: Defense against the digital dark arts',
      body: 'Google - Coursera',
      year: 'July 2021',
      link: 'https://www.coursera.org/account/accomplishments/certificate/GNMHMZ2E4W9B',
    },
    {
      name: 'Google Cloud Platform',
      body: 'Google - Coursera',
      year: 'April 2023',
      link: 'https://www.coursera.org/account/accomplishments/certificate/6PQ53RVRYHB4',
    },
    {
      name: 'Introduction to Git and Github',
      body: 'Geeks for Geeks',
      year: 'October 2023',
      link: 'https://drive.google.com/file/d/1x5DzeXkh_zLVPtKPHZ6MIJdAAyo1iHhP/view',
    },
    {
      name: 'Database Design',
      body: 'Oracle Academy',
      year: 'November 2023',
      link: 'https://drive.google.com/file/d/1sHzgARAQ7uCcj7A6JQDLHPuVTnvWB7ze/view',
    },
    {
      name: 'Introduction to Networking and Storage',
      body: 'IBM Skills Network',
      year: 'November 2022',
      link: 'https://www.coursera.org/account/accomplishments/certificate/FAN7DY533S6N',
    },
    {
      name: 'Cybersecurity and Internet of Things',
      body: 'Kennesaw State University - Coursera',
      year: 'July 2021',
      link: 'https://www.coursera.org/account/accomplishments/certificate/N8MU5A6X8QNF',
    },
    {
      name: 'Cybersecurity and Internet of Things',
      body: 'Kennesaw State University - Coursera',
      year: 'July 2021',
      link: 'https://www.coursera.org/account/accomplishments/certificate/N8MU5A6X8QNF',
    },
  ],
  educations: [
    {
      institution: 'Vellore Institute of Technology - Chennai Campus',
      degree: 'MTech',
      from: '2023',
      to: '2025',
    },
    {
      institution: 'DIT University, Dehradun',
      degree: 'BTech',
      from: '2019',
      to: '2023',
    },
  ],
  publications: [
    {
      title: 'Warlock: Countering Ransomware and Data Leaks (Pending)',
      conferenceName: '2024 IEEE International Conference on Contemporary Computing and Communications (InC4)',
      journalName: '',
      authors: 'Soumyo Deep Gupta, Rajesh Kumar',
      link: '',
      description:
        'Counter against Ransomware and Data Leaks using waRLOCK, a software solution that employs reverse approach to finding ransomware and a transformation technique to prevent dataleak.',
    },
    {
      title: 'Forest Fire Detection using Deep Learning Techniques',
      conferenceName: '2023 2nd International Conference on Vision Towards Emerging Trends in Communication and Networking (ViTECoN)',
      journalName: '',
      authors: 'Soumyo Deep Gupta, Yash Kothari, Rashika Singh, Ishaan Dawar',
      link: 'https://ieeexplore.ieee.org/document/10157262',
      description:
        '',
    },
    {
      title: 'Deep learning based Detection of Coronavirus (COVID-19) using Chest X-ray images',
      conferenceName: '2023 7th International Conference on Trends in Electronics and Informatics (ICEI)',
      journalName: '',
      authors: 'Soumyo Deep Gupta, Yash Kothari, Rashika Singh, Ritika Raj, Ishaan Dawar',
      link: 'https://ieeexplore.ieee.org/document/10125881',
      description:
        '',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'd33pster', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made by <a 
      class="text-primary" href="https://github.com/d33pster"
      target="_blank"
      rel="noreferrer"
    >d33pster</a>`,

  enablePWA: true,
};

export default CONFIG;
