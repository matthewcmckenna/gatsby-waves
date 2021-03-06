module.exports = {
  plugins: [
    "gatsby-plugin-theme-ui",
    `gatsby-plugin-sharp`,
    "gatsby-theme-waves",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-theme-blog`,
      options: {
        basePath: `/blog`,
        contentPath: `blog/posts`,
        assetsPath: `blog/assets`,
        mdx: false,
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
        rehypePlugins: [require("rehype-waves")],
      },
    },
    {
      resolve: "gatsby-theme-mdx-deck",
      options: { mdx: false, basePath: "decks" },
    },
  ],
}
