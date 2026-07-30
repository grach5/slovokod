import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import HeroScene3D from '@site/src/components/HeroScene3D';

const BAZA_DAYS = [
  {n: 1, title: 'Как управлять ИИ-ассистентом'},
  {n: 2, title: 'Как объяснить задачу'},
  {n: 3, title: 'Как резать задачу на части'},
  {n: 4, title: 'Публикация в интернете'},
  {n: 5, title: 'Сборка, проверка, первый кейс'},
];

const POLNAYA_DAYS = [
  {n: 1, title: 'Как на самом деле работает ИИ-ассистент'},
  {n: 2, title: 'Как объяснить задачу'},
  {n: 3, title: 'Как резать задачу на части, которые не ломают друг друга'},
  {n: 4, title: 'Управление контекстом'},
  {n: 5, title: 'Терминал, файлы и зависимости'},
  {n: 6, title: 'Точки возврата и репозиторий'},
  {n: 7, title: 'Тот же способ, другой продукт'},
  {n: 8, title: 'Проект выходит в интернет'},
  {n: 9, title: 'Данные, которые никуда не исчезают'},
  {n: 10, title: 'Ключи, пароли и то, что нельзя показывать'},
  {n: 11, title: 'Как чинить, а не гадать'},
  {n: 12, title: 'Чек-лист перед тем, как показать людям'},
  {n: 13, title: 'Автоматизация и агентные режимы'},
  {n: 14, title: 'Сборка, проверка, кейс'},
];

const MODULES = [
  {num: 'M0', slug: 'module-0-osnovy-promptinga', title: 'Основы промптинга',
    desc: 'Как Claude «думает», выбор модели под задачу, анатомия сильного промпта, разбор типичных галлюцинаций (случаев, когда Claude уверенно выдаёт неверный ответ).'},
  {num: 'M1', slug: 'module-1-claude-code', title: 'Claude Code — разработка',
    desc: 'Навигация по чужому коду, безопасные правки, тесты, git, code-review, subagents и workflows.'},
  {num: 'M2', slug: 'module-2-avtomatizaciya-agenty', title: 'Автоматизация и агенты',
    desc: 'MCP-серверы, scheduled tasks, /loop, многоагентные workflow — pipeline vs parallel.'},
  {num: 'M2.5', slug: 'module-2t-tokeny-pamyat-kontekst', title: 'Токены, память и контекст',
    desc: 'Паттерн memory-bank, компактный CLAUDE.md, промпт-кэширование, выбор модели по бюджету.'},
  {num: 'M3', slug: 'module-3-dokumenty', title: 'Работа с документами',
    desc: 'Word, Excel, PowerPoint, PDF — от очистки данных до готового отчёта клиенту.'},
  {num: 'M4', slug: 'module-4-analitika-vizualizaciya', title: 'Аналитика и визуализация',
    desc: 'Выбор формы графика, дашборды, публикация артефакта (готовой веб-страницы или мини-приложения) в светлой и тёмной теме.'},
  {num: 'M5', slug: 'module-5-veb-issledovaniya', title: 'Веб-исследования и браузер',
    desc: 'Сбор фактов из интернета, многошаговые исследования, границы автономности агента.'},
  {num: 'M6', slug: 'module-6-artefakty', title: 'Артефакты и мини-приложения',
    desc: 'Публикация интерактивных страниц, диаграммы, runtime-возможности прямо со страницы.'},
  {num: 'M7', slug: 'module-7-api-sdk', title: 'Claude API / SDK для разработчиков',
    desc: 'Messages API, tool use, prompt caching, Agent SDK, мультимодальность, выбор модели.'},
  {num: 'M8', slug: 'module-8-integracii', title: 'Интеграции и экосистема',
    desc: 'Claude в Slack, IDE-расширения, MCP-реестр, Desktop/Web/CLI — когда что уместно.'},
  {num: 'M9', slug: 'module-9-kachestvo-bezopasnost', title: 'Проверка качества и безопасность',
    desc: 'Eval-наборы, независимая верификация, безопасность многоагентных систем.'},
];

export default function Programma() {
  return (
    <Layout
      title="Программа"
      description="Два трека — «База» (5 дней) и «Полная» (14 дней) — плюс бонусный Продвинутый трек из 11 модулей вглубь Claude.">
      <main>
        <div className="ac-hero" style={{position: 'relative', overflow: 'hidden'}}>
          <HeroScene3D compact seed={11} />
          <div className="container" style={{position: 'relative', zIndex: 1}}>
            <p className="ac-eyebrow">Программа</p>
            <h1>Два трека, 19 дней, один и тот же рабочий цикл</h1>
            <p className="ac-lede">Курс устроен по дням, не по абстрактным темам: каждый день — конкретный шаг к
              работающему продукту, с готовым промптом для копирования и критериями приёмки в конце.</p>
          </div>
        </div>

        <section className="ac-section">
          <div className="container">
            <span className="ac-eyebrow">01 · Треки</span>
            <h2>Выберите глубину</h2>
            <div className="ac-grid cols-3" style={{marginTop: '1.5rem'}}>
              <Link to="/docs/baza/den-1" className="ac-card ac-track-card" style={{textDecoration: 'none', color: 'inherit'}}>
                <span className="ac-track-eyebrow">Трек «База»</span>
                <h3>5 дней</h3>
                <p>Для тех, кто хочет быстро понять, как работать с ИИ-ассистентом на практике: только
                  браузер, без терминала и баз данных. Итог — опубликованный сайт.</p>
                <p className="ac-track-stat">5 дней · сайт в интернете</p>
                <span style={{fontSize: '0.82rem', fontWeight: 600, color: 'var(--ifm-color-primary)'}}>Открыть День 1 →</span>
              </Link>
              <Link to="/docs/polnaya/den-1" className="ac-card ac-track-card" style={{textDecoration: 'none', color: 'inherit'}}>
                <span className="ac-track-eyebrow">Трек «Полная»</span>
                <h3>14 дней</h3>
                <p>Основной трек: терминал, репозиторий и точки возврата, база данных, ключи и секреты,
                  отладка по процедуре, агентные режимы. Итог — продукт с базой данных и кейс.</p>
                <p className="ac-track-stat">14 дней · продукт + кейс в портфолио</p>
                <span style={{fontSize: '0.82rem', fontWeight: 600, color: 'var(--ifm-color-primary)'}}>Открыть День 1 →</span>
              </Link>
              <Link to="/docs/modules/module-0-osnovy-promptinga" className="ac-card ac-track-card" style={{textDecoration: 'none', color: 'inherit'}}>
                <span className="ac-track-eyebrow">Бонус</span>
                <h3>Продвинутый трек</h3>
                <p>Для тех, кто прошёл «Полную» и хочет глубже именно в Claude: Claude Code, MCP и
                  агенты, память и токены, Claude API/SDK, интерактивные артефакты.</p>
                <p className="ac-track-stat">11 модулей · входит в «Полную» и «Максимум»</p>
                <span style={{fontSize: '0.82rem', fontWeight: 600, color: 'var(--ifm-color-primary)'}}>Смотреть модули ↓</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="ac-section">
          <div className="container">
            <span className="ac-eyebrow">02 · Формат</span>
            <h2>Как устроено обучение</h2>
            <p style={{opacity: 0.85, marginTop: '0.5rem'}}>Понадобится собственный доступ к ИИ-ассистенту (методика применима к разным
              ассистентам, в материалах по умолчанию — Claude). Курс такой доступ не предоставляет — убедитесь,
              что он у вас есть, до оплаты.</p>
            <div className="ac-grid cols-4" style={{marginTop: '1.5rem'}}>
              <div className="ac-card"><span className="ac-eyebrow">Структура дня</span><p>зачем это → теория → пошаговая инструкция → готовый промпт для копирования → типичные ошибки → критерии приёмки</p></div>
              <div className="ac-card"><span className="ac-eyebrow">Свой темп</span><p>все дни курса уже открыты на сайте — читайте и проходите в своём порядке, без потоков и дат старта</p></div>
              <div className="ac-card"><span className="ac-eyebrow">Самопроверка</span><p>10 вопросов после каждого дня — это чек-лист понимания, не экзамен, доступ к следующему дню он не блокирует</p></div>
              <div className="ac-card"><span className="ac-eyebrow">Итог</span><p>к концу «Полной» — опубликованный продукт с базой данных и оформленный кейс в портфолио</p></div>
            </div>
            <p style={{marginTop: '1rem', fontSize: '0.85rem', opacity: 0.7}}>
              Незнакомые слова на этой странице («терминал», «репозиторий», MCP и т.п.) объясняются
              в <Link to="/docs/resources/slovar">Словаре терминов</Link> — держите открытым в отдельной вкладке.
            </p>
          </div>
        </section>

        <section className="ac-section">
          <div className="container">
            <span className="ac-eyebrow">03 · Трек «Полная» по дням</span>
            <h2>14 дней от промпта до кейса</h2>
            <ol className="ac-roadmap" style={{marginTop: '1.5rem'}}>
              {POLNAYA_DAYS.map((d) => (
                <li key={d.n}>
                  <p><Link to={`/docs/polnaya/den-${d.n}`}><b>День {d.n}.</b> {d.title}</Link></p>
                </li>
              ))}
            </ol>
            <p style={{marginTop: '1rem', opacity: 0.8}}>Трек «База» — первые 5 дней в облегчённой версии без терминала, репозитория и
              базы данных: <Link to="/docs/baza/den-1">открыть День 1 «Базы» →</Link></p>
            <details style={{marginTop: '1rem'}}>
              <summary style={{cursor: 'pointer', fontWeight: 600}}>Дни трека «База» по отдельности</summary>
              <ol className="ac-roadmap" style={{marginTop: '1rem'}}>
                {BAZA_DAYS.map((d) => (
                  <li key={d.n}>
                    <p><Link to={`/docs/baza/den-${d.n}`}><b>День {d.n}.</b> {d.title}</Link></p>
                  </li>
                ))}
              </ol>
            </details>
          </div>
        </section>

        <section className="ac-section">
          <div className="container">
            <span className="ac-eyebrow">04 · Бонус · 11 модулей</span>
            <h2>Продвинутый трек — глубже в Claude</h2>
            <p style={{opacity: 0.8, marginTop: '0.5rem'}}>Не переписывает основной курс заново — идёт после «Полной» для тех, кто хочет
              специализироваться именно на Claude: терминал-инструменты, агенты, экономика токенов, свой API.</p>
            <div className="ac-grid cols-3" style={{marginTop: '1.5rem'}}>
              {MODULES.map((m) => (
                <Link key={m.slug} to={`/docs/modules/${m.slug}`} className="ac-card" style={{textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', gap: '0.6rem'}}>
                  <span style={{fontFamily: 'var(--ifm-heading-font-family)', fontSize: '1.3rem', color: 'var(--ifm-color-primary)'}}>{m.num}</span>
                  <h3 style={{fontSize: '1.08rem'}}>{m.title}</h3>
                  <p style={{fontSize: '0.92rem', opacity: 0.75}}>{m.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="ac-section">
          <div className="container">
            <span className="ac-eyebrow">05 · Как это устроено</span>
            <h2>Как проходит покупка и обучение</h2>
            <ol className="ac-roadmap" style={{marginTop: '1.5rem'}}>
              <li><p>Все дни уже открыты на сайте — можете начать читать и пробовать задания прямо сейчас, бесплатно.</p></li>
              <li><p>Когда решите продолжать — выбираете тариф и пишете нам, договариваемся об оплате.</p></li>
              <li><p>Оплата даёт право писать нам с вопросами по материалам и (в «Максимуме») банк промптов по работе с заказчиками.</p></li>
              <li><p>К концу «Полной» — опубликованный продукт и оформленная карточка кейса для портфолио.</p></li>
            </ol>
            <p style={{marginTop: '1rem', opacity: 0.8}}>Актуальные цены — на странице <Link to="/#pricing">тарифов</Link>.</p>
          </div>
        </section>

        <div className="container">
          <div className="ac-cta">
            <h2>Готовы посмотреть примеры результатов?</h2>
            <p style={{opacity: 0.8}}>Посмотрите, что именно получается собрать за один день курса.</p>
            <div className="ac-cta-actions">
              <Link className="button button--primary button--lg" to="/primery">Смотреть примеры</Link>
              <Link className="button button--outline button--lg" to="/kontakty">Написать нам</Link>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
