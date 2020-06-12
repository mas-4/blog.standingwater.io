module.exports = {
    siteMetadata: {
        title: `blog.standingwater.io`,
        description: `A blog for musings, progress, and development.`,
        author: `malan88`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-styled-components`,
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /images/
                }
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `posts`,
                path: `${__dirname}/src/posts`
            }
        },
        {
            resolve: 'gatsby-plugin-htaccess',
            options: {
                'https': true,
                'host': 'blog.standingwater.io'
            }
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1920,
                        }
                    },
                    `gatsby-remark-emoji`,
                ]
            }
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/heron.png`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
