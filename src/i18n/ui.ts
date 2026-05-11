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
    'blog.title': 'Blog',
    'blog.description': 'Stuff that I write about',
    'blog.latestPosts': 'Latest Posts',
    'blog.readTime': 'min read',
    'blog.backToBlog': '← Back to blog',
    'blog.filter': 'Filter',
    'blog.noTags': 'All',
    'projects.title': 'Projects',
    'projects.description': 'Stuff that I have worked on',
    'about.title': 'About',
    'about.description': 'Who I am and what I do',
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
    'blog.title': 'Blog',
    'blog.description': 'Amiről írok',
    'blog.latestPosts': 'Legújabb bejegyzések',
    'blog.readTime': 'perc olvasás',
    'blog.backToBlog': '← Vissza a blogba',
    'blog.filter': 'Szűrő',
    'blog.noTags': 'Mind',
    'projects.title': 'Projektek',
    'projects.description': 'Amin dolgoztam',
    'about.title': 'Rólam',
    'about.description': 'Ki vagyok és mit csinálok',
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