export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6075c4b4689f470bc6f91924',
                  title: 'Sanity Studio',
                  name: 'anton-portfolio-studio',
                  apiId: '146ddf91-d12e-4729-ab00-e5a1c1b0c528'
                },
                {
                  buildHookId: '6075c4b450391209ab9c2e89',
                  title: 'Portfolio Website',
                  name: 'anton-portfolio-web',
                  apiId: '303da2d7-0c86-4b17-8e40-539526f42ddc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/antonholmes/anton-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://anton-portfolio-web.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
