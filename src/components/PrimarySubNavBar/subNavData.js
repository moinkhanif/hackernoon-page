const navData = [
  {
    id: 1,
    name: 'Read',
    link: '/tagged',
    subLinks: [
      {
        id: 1,
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
        id: 2,
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
        id: 3,
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
    subLinks: [
      {
        id: 1,
        name: 'Web Development',
        link: 'https://bit.ly/3aOybUa',
        external: true,
        subLinks: [
          {
            id: 1,
            name: 'Become a Cloud Developer',
            link: 'http://bit.ly/3rFSgEM',
            external: true,
          },
          {
            id: 2,
            name: 'Become A Fullstack Developer',
            link: 'https://bit.ly/2Z2V9mB',
            external: true,
          },
          {
            id: 3,
            name: 'Become a Android Developer',
            link: 'https://bit.ly/2Z5P4FY',
            external: true,
          },
        ],
      },
      {
        id: 2,
        name: 'Become A Data Scientist',
        link: 'https://bit.ly/3p6Xtna',
        external: true,
        subLinks: [
          {
            id: 1,
            name: 'What is it?',
            link: 'https://hackernoon.com/what-on-earth-is-data-science-eb1237d8cb37',
          },
        ],
      },
      {
        id: 3,
        name: 'Languages',
        link: 'https://bit.ly/2IEtq3D',
        external: true,
        subLinks: [
          {
            id: 1,
            name: 'Blockchain',
            link: 'https://hackernoon.com/search?query=learn+blockchain',
          },
          {
            id: 2,
            name: 'Go',
            link: 'https://hackernoon.com/search?query=learn%20go',
          },
          {
            id: 3,
            name: 'PHP',
            link: 'https://hackernoon.com/search?query=learn%20php',
          },
        ],
      },
    ],
  },
  {
    id: 6,
    name: 'Advertise',
    link: 'https://sponsor.hackernoon.com/',
    external: true,
    subLinks: [
      {
        id: 1,
        name: 'Post',
        link: 'https://sponsor.hackernoon.com/brand-as-author',
        external: true,
        subLinks: [
          {
            id: 1,
            name: 'Corporate Blog Posts',
            link: 'https://sponsor.hackernoon.com/brand-as-author',
            external: true,
          },
          {
            id: 2,
            name: 'Tech News Release',
            link: 'https://sponsor.hackernoon.com/brand-as-author',
            external: true,
          },
        ],
      },
      {
        id: 2,
        name: 'Place an Ad',
        link: 'https://sponsor.hackernoon.com/',
        external: true,
        subLinks: [
          {
            id: 1,
            name: 'Targeted Niche Marketing',
            link: 'https://sponsor.hackernoon.com/ad-by-tag',
            external: true,
          },
          {
            id: 2,
            name: 'Sitewide Takeover',
            link: 'https://sponsor.hackernoon.com/billboard',
            external: true,
          },
        ],
      },
    ],
  },
  {
    id: 7,
    name: 'About',
    link: 'https://www.about.hackernoon.com/',
    external: true,
    subLinks: [
      {
        id: 1,
        name: 'About',
        link: 'https://about.hackernoon.com/',
        external: true,
        subLinks: [
          {
            id: 1,
            name: 'A Story',
            link: 'https://readwrite.com/2020/06/10/hacker-noon-adds-quantitative-social-proof-and-web-monetization-standards/',
            external: true,
          },
          {
            id: 2,
            name: 'CEO',
            link: 'https://hackernoon.com/@David',
            external: true,
          },
          {
            id: 3,
            name: 'COO',
            link: 'https://hackernoon.com/@linh',
            external: true,
          },
          {
            id: 4,
            name: 'CPO',
            link: 'https://hackernoon.com/@Dane',
            external: true,
          },
        ],
      },
      {
        id: 2,
        name: 'Write',
        link: 'https://auth.hackernoon.com/',
        external: true,
        subLinks: [
          {
            id: 1,
            name: 'Help Section',
            link: 'https://help.hackernoon.com/',
            external: true,
          },
          {
            id: 2,
            name: 'Get Published',
            link: 'https://publish.hackernoon.com/',
            external: true,
          },
        ],
      },
      {
        id: 3,
        name: 'Noonies 2020',
        link: 'https://noonies.tech/',
        external: true,
        subLinks: [
          {
            id: 1,
            name: 'FAQ',
            link: 'https://hackernoon.com/wtf-are-the-noonies-kjh3yv9',
          },
        ],
      },
    ],
  },
  {
    id: 8,
    name: 'Tech Companies',
    link: '/about-tech-company-news-pages-by-hacker-noon-uwu34bh',
    subLinks: [
      {
        id: 1,
        name: 'A to F',
        link: 'https://hackernoon.com/new-feature-alert-913-tech-company-news-pages-on-hacker-noon-th1334q2',
        subLinks: [
          {
            id: 1,
            name: 'Adobe',
            link: 'https://hackernoon.com/company/adobe',
          },
        ],
      },
      {
        id: 2,
        name: 'G to N',
        link: 'https://hackernoon.com/new-feature-alert-913-tech-company-news-pages-on-hacker-noon-th1334q2',
        subLinks: [
          {
            id: 1,
            name: 'Google',
            link: 'https://hackernoon.com/company/google',
          },
        ],
      },
      {
        id: 3,
        name: 'O to Z',
        link: 'https://hackernoon.com/new-feature-alert-913-tech-company-news-pages-on-hacker-noon-th1334q2',
        subLinks: [
          {
            id: 1,
            name: 'Tesla',
            link: 'https://hackernoon.com/company/tesla',
          },
        ],
      },
    ],
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
