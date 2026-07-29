// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Словокод',
  tagline: 'Доведите свою идею до работающего продукта с ИИ-ассистентом за 14 дней',
  favicon: 'img/favicon.svg',

  future: {
    v4: true,
  },

  url: 'https://grach5.github.io',
  baseUrl: '/slovokod/',

  organizationName: 'grach5',
  projectName: 'slovokod',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: undefined,
          routeBasePath: 'docs',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },
      metadata: [
        {
          name: 'description',
          content:
            'Словокод — практический курс: доведите идею до работающего продукта с ИИ-ассистентом за 14 дней. Независимый образовательный проект, не аффилирован с Anthropic и другими упомянутыми компаниями.',
        },
      ],
      announcementBar: {
        id: 'disclaimer',
        content:
          '🎓 Словокод — независимый образовательный проект. Мы не связаны с Anthropic, GitHub и другими упомянутыми компаниями. Методика применима к разным ИИ-ассистентам; в материалах по умолчанию используется Claude.',
        backgroundColor: '#14161c',
        textColor: '#eef0f4',
        isCloseable: true,
      },
      navbar: {
        title: 'Словокод',
        logo: {
          alt: 'Словокод',
          src: 'img/logo.svg',
        },
        items: [
          {to: '/programma', label: 'Программа', position: 'left'},
          {
            type: 'docSidebar',
            sidebarId: 'bazaSidebar',
            position: 'left',
            label: 'База (5 дней)',
          },
          {
            type: 'docSidebar',
            sidebarId: 'polnayaSidebar',
            position: 'left',
            label: 'Полная (14 дней)',
          },
          {
            type: 'docSidebar',
            sidebarId: 'modulesSidebar',
            position: 'left',
            label: 'Продвинутый трек',
          },
          {
            type: 'docSidebar',
            sidebarId: 'resourcesSidebar',
            position: 'left',
            label: 'Ресурсы',
          },
          {to: '/primery', label: 'Примеры', position: 'left'},
          {to: '/#pricing', label: 'Цены', position: 'left'},
          {to: '/kontakty', label: 'Контакты', position: 'left'},
          {
            href: 'https://github.com/grach5/slovokod',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Обучение',
            items: [
              {label: 'Программа', to: '/programma'},
              {label: 'База (5 дней)', to: '/docs/baza/den-1'},
              {label: 'Полная (14 дней)', to: '/docs/polnaya/den-1'},
              {label: 'Продвинутый трек', to: '/docs/modules/module-0-osnovy-promptinga'},
              {label: 'Ресурсы', to: '/docs/resources/resursy'},
            ],
          },
          {
            title: 'О курсе',
            items: [
              {label: 'Примеры результатов', to: '/primery'},
              {label: 'Контакты и FAQ', to: '/kontakty'},
              {label: 'Оферта (черновик)', to: '/docs/legal/oferta'},
              {label: 'Политика данных (черновик)', to: '/docs/legal/privacy'},
            ],
          },
          {
            title: 'Контакты',
            items: [
              {
                label: 'gra4ik.asatryan@gmail.com',
                href: 'mailto:gra4ik.asatryan@gmail.com',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Словокод · практический курс с ИИ-ассистентом · независимый образовательный проект, не аффилирован с Anthropic.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
