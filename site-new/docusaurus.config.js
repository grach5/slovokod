// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Академия Claude',
  tagline: 'Профессиональная школа работы с Claude — от первого промпта до продакшн-агентов',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://example.com',
  baseUrl: '/',

  organizationName: 'academy-claude',
  projectName: 'academy-claude-school',

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
      image: 'img/social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      metadata: [
        {
          name: 'description',
          content:
            'Академия Claude — практический курс профессиональной работы с Claude (Anthropic): промптинг, Claude Code, агенты, документы, аналитика, API/SDK. Независимый образовательный проект, не аффилирован с Anthropic.',
        },
      ],
      announcementBar: {
        id: 'disclaimer',
        content:
          '🎓 Академия Claude — независимый образовательный проект. Мы не являемся Anthropic и не аффилированы с компанией; название Claude используется описательно, для обозначения предмета обучения.',
        backgroundColor: '#14161c',
        textColor: '#eef0f4',
        isCloseable: true,
      },
      navbar: {
        title: 'Академия Claude',
        logo: {
          alt: 'Академия Claude',
          src: 'img/logo.svg',
        },
        items: [
          {to: '/programma', label: 'Программа', position: 'left'},
          {
            type: 'docSidebar',
            sidebarId: 'modulesSidebar',
            position: 'left',
            label: 'Модули',
          },
          {
            type: 'docSidebar',
            sidebarId: 'resourcesSidebar',
            position: 'left',
            label: 'Ресурсы',
          },
          {to: '/docs/guides/vibecoding', label: 'Вайбкодинг', position: 'left'},
          {to: '/primery', label: 'Примеры', position: 'left'},
          {to: '/#pricing', label: 'Цены', position: 'left'},
          {to: '/kontakty', label: 'Контакты', position: 'left'},
          {
            href: 'https://github.com/',
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
              {label: 'Модули курса', to: '/docs/modules/module-0-osnovy-promptinga'},
              {label: 'Ресурсы', to: '/docs/resources/resursy'},
              {label: 'Вайбкодинг', to: '/docs/guides/vibecoding'},
            ],
          },
          {
            title: 'О школе',
            items: [
              {label: 'Примеры результатов', to: '/primery'},
              {label: 'Контакты и FAQ', to: '/kontakty'},
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
        copyright: `© ${new Date().getFullYear()} Академия Claude · курс профессиональной работы с Claude · независимый образовательный проект, не аффилирован с Anthropic.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
