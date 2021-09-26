module.exports = {
  siteMetadata: {
    title: `Solutionⓑ`,
    siteUrl: `https://naver.com`,
    description: `BORAM is worthwhile blog`,
    topics: [],
    menu: [
      {
        name: 'Home',
        path: '/'
      },
      {
        name: 'Programming',
        path: '/page'
      },
      {
        name: 'Book',
        path: '/page'
      },
      {
        name: 'About me',
        path: '/page'
      },
      {
        name: 'Contact me',
        path: '/page'
      },
    ],
    footerMenu: [
      {
        name: 'Example',
        path: '/page'
      },
    ],
    search: true,
    author: {
      name: `BORAM LEE`,
      description: `<strong>Lit B</strong> | 소통하는 UX/UI를 만드는 웹퍼블리셔`,
      social: {
        facebook: ``,
        twitter: ``,
        linkedin: ``,
        instagram: ``,
        youtube: ``,
        github: `https://github.com/255ramilee`,
        twitch: ``,
        notion: `https://www.notion.so/Solution-Blog-29054d6332f34b0ab70fbf6fe04faf1d`
      }
    }
  },
  plugins: [
    {
      resolve: `@nehalist/gatsby-theme-nehalem`,
      options: {
        manifest: {
          name: `nehalem - A Gatsby theme`,
          short_name: `nehalem`,
          start_url: `/`,
          background_color: `#a4cbb8`,
          theme_color: `#a4cbb8`,
          display: `minimal-ui`,
          icon: `${__dirname}/content/assets/images/logo.png`
        },
        name: `images`,
        path: `${__dirname}/content/assets/images`,
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Gowun+Dodum\:400`
          ],
        display: "swap",
      },
    },
  ]
};
