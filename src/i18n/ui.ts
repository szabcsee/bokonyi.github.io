export const languages = {
  en: 'English',
  hu: 'Magyar',
} as const;

export const defaultLang = 'en';

export type Lang = keyof typeof languages;

export const ui = {
  en: {
    'nav.blog': 'Blog',
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'home.hero.greeting': 'Hi, I’m Szabi.',
    'home.hero.tagline': 'Open notebook — code, design, automation, and whatever lands in between.',
    'home.tinker.heading': 'Things I do',
    'home.tinker.designWeb': 'Design Web',
    'home.tinker.designPaper': 'Design Paper',
    'home.tinker.website': 'Website',
    'home.tinker.app': 'App',
    'home.tinker.automate': 'Automate stuff',
    'home.tinker.print3d': '3D Printing',
    'home.tinker.drone': 'Fly a Drone',
    'home.tinker.ai': 'Build with AI',
    'blog.title': 'Blog',
    'blog.description': 'Stuff that I write about',
    'blog.latestPosts': 'Latest Posts',
    'blog.readTime': 'min read',
    'blog.backToBlog': '← Back to blog',
    'blog.filter': 'Filter',
    'blog.noTags': 'All',
    'projects.title': 'Projects',
    'projects.description': 'Stuff that I have worked on',
    'projects.stats': 'Stats',
    'projects.latest': 'Latest Projects',
    'projects.count.one': 'Project',
    'projects.count.other': 'Projects',
    'projects.info': 'Info',
    'projects.backToProjects': '← Back to projects',
    'about.title': 'About',
    'about.description': 'Who I am and what I do',
    'post.toc': 'Table of contents',
    'common.backToBlog': '← Back to blog',
    'common.loading': 'Loading...',
    'common.noResults': 'No results found',
    'common.tags': 'Tags:',
    'common.createdAt': 'Created',
  },
  hu: {
    'nav.blog': 'Blog',
    'nav.projects': 'Projektek',
    'nav.about': 'Rólam',
    'home.hero.greeting': 'Szia, Szabi vagyok.',
    'home.hero.tagline': 'Nyitott jegyzetfüzet — kód, design, automatizálás, és minden, ami közte van.',
    'home.tinker.heading': 'Amit csinálok',
    'home.tinker.designWeb': 'Webdesign',
    'home.tinker.designPaper': 'Print design',
    'home.tinker.website': 'Weboldal',
    'home.tinker.app': 'Alkalmazás',
    'home.tinker.automate': 'Automatizálás',
    'home.tinker.print3d': '3D nyomtatás',
    'home.tinker.drone': 'Drónozás',
    'home.tinker.ai': 'Építés AI-jal',
    'blog.title': 'Blog',
    'blog.description': 'Amiről írok',
    'blog.latestPosts': 'Legújabb bejegyzések',
    'blog.readTime': 'perc olvasás',
    'blog.backToBlog': '← Vissza a blogba',
    'blog.filter': 'Szűrő',
    'blog.noTags': 'Mind',
    'projects.title': 'Projektek',
    'projects.description': 'Amin dolgoztam',
    'projects.stats': 'Statisztika',
    'projects.latest': 'Legújabb projektek',
    'projects.count.one': 'projekt',
    'projects.count.other': 'projekt',
    'projects.info': 'Infó',
    'projects.backToProjects': '← Vissza a projektekhez',
    'about.title': 'Rólam',
    'about.description': 'Ki vagyok és mit csinálok',
    'post.toc': 'Tartalomjegyzék',
    'common.backToBlog': '← Vissza a blogba',
    'common.loading': 'Betöltés...',
    'common.noResults': 'Nincs találat',
    'common.tags': 'Címkék:',
    'common.createdAt': 'Létrehozva',
  },
} as const;

export function getLangFromUrl(url: URL): Lang {
  const segments = url.pathname.split('/').filter(Boolean);
  const firstSegment = segments[0] as Lang;
  if (firstSegment in languages) return firstSegment;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof typeof ui[typeof defaultLang]): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

export function getLocaleFromLang(lang: Lang): string {
  const localeMap: Record<Lang, string> = {
    en: 'en_US',
    hu: 'hu_HU',
  };
  return localeMap[lang];
}