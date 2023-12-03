import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'About',
      href: getPermalink('/about'),
    },
    {
      text: 'CV',
      href: '#',
    },
    {
      text: 'Research',
      href: '#',
    },
  ],
  actions: [],
};

export const footerData = {
  links: [

  ],
  secondaryLinks: [
    // { text: 'Terms', href: getPermalink('/terms') },
    // { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/mschaper' },
  ],
  footNote: `
    powered by cloudflare pages :: astro :: astrowind
  `,
};
