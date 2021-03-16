const navData = [
  {
    id: 1,
    name: 'Read',
    link: '/tagged',
    subLinks: [
      {
        name: 'Tech',
        link: '/tagged/tech',
        subLinks: [
          {
            id: 1,
            name: 'AI',
            link: '/tagged/ai',
          },
          {
            id: 2,
            name: 'Automation',
            link: '/tagged/automation',
          },
          {
            id: 3,
            name: 'Business',
            link: '/tagged/business',
          },
          {
            id: 4,
            name: 'Data',
            link: '/tagged/data',
          },
          {
            id: 5,
            name: 'Data Science',
            link: '/tagged/data-science',
          },
          {
            id: 6,
            name: 'Deep Fakes',
            link: '/tagged/deep-fakes',
          },
        ],
      },
      {
        name: 'Software',
        link: '/tagged/software-development',
        subLinks: [
          {
            id: 1,
            name: 'Agile',
            link: '/tagged/agile',
          },
        ],
      },
      {
        name: 'Decentralization',
        link: '/tagged/decentralization',
        subLinks: [
          {
            id: 1,
            name: 'Altcoins',
            link: '/tagged/altcoins',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: 'Top Stories',
    link: '/tagged/hackernoon-top-story',
  },
  {
    id: 3,
    name: 'Write',
    link: 'https://publish.hackernoon.com/',
    external: true,
  },
  {
    id: 4,
    name: 'Listen',
    link: '/tagged/hackernoon-podcast',
  },
  {
    id: 5,
    name: 'Learn',
    link: 'http://bit.ly/3rG0tZy',
    external: true,
  },
  {
    id: 6,
    name: 'Advertise',
    link: 'https://sponsor.hackernoon.com/',
    external: true,
    subLinks: [],
  },
  {
    id: 7,
    name: 'About',
    link: 'https://www.about.hackernoon.com/',
    external: true,
    subLinks: [],
  },
  {
    id: 8,
    name: 'Tech Companies',
    link: '/about-tech-company-news-pages-by-hacker-noon-uwu34bh',
    subLinks: [],
  },
  {
    id: 9,
    name: 'Careers',
    link: 'https://careers.hackernoon.com/',
    external: true,
  },
  {
    id: 10,
    name: 'Slogging',
    link: 'https://slogging.com/',
    external: true,
  },
];

export default navData;
