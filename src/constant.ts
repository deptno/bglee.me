export const const_site_url = 'https://bglee.me'
export const const_site_title = 'Bonggyun Lee'
export const const_site_description = `fullstack enginner / ts, node, next.js, graphql, aws(especially dynamodb, serverless), terraform`
export const seo = {
  title      : const_site_title,
  description: const_site_description,
  canonical  : const_site_url,
  openGraph  : {
    url        : const_site_url,
    title      : const_site_title,
    description: const_site_description,
    images     : [
      {
        url   : `https://avatars1.githubusercontent.com/u/1223020?s=460&v=4`,
        width : 460,
        height: 460,
        alt   : const_site_url,
      },
    ],
    site_name  : const_site_title,
  }
}
