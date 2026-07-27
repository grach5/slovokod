import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

const MODULES = [
  {num: 'M0', slug: 'module-0-osnovy-promptinga', title: 'Основы промптинга', tracks: 'Все потоки',
    desc: 'Как Claude «думает», выбор модели под задачу, анатомия сильного промпта, разбор типичных галлюцинаций.'},
  {num: 'M1', slug: 'module-1-claude-code', title: 'Claude Code — разработка', tracks: 'Практик / Инженер',
    desc: 'Навигация по чужому коду, безопасные правки, тесты, git, code-review, subagents и workflows.'},
  {num: 'M2', slug: 'module-2-avtomatizaciya-agenty', title: 'Автоматизация и агенты', tracks: 'Практик / Инженер',
    desc: 'MCP-серверы, scheduled tasks, /loop, многоагентные workflow — pipeline vs parallel.'},
  {num: 'M2.5', slug: 'module-2t-tokeny-pamyat-kontekst', title: 'Токены, память и контекст', tracks: 'Практик / Инженер',
    desc: 'Паттерн memory-bank, компактный CLAUDE.md, промпт-кэширование, выбор модели по бюджету.'},
  {num: 'M3', slug: 'module-3-dokumenty', title: 'Работа с документами', tracks: 'Все потоки',
    desc: 'Word, Excel, PowerPoint, PDF — от очистки данных до готового отчёта клиенту.'},
  {num: 'M4', slug: 'module-4-analitika-vizualizaciya', title: 'Аналитика и визуализация', tracks: 'Все потоки',
    desc: 'Выбор формы графика, дашборды, публикация артефакта в светлой и тёмной теме.'},
  {num: 'M5', slug: 'module-5-veb-issledovaniya', title: 'Веб-исследования и браузер', tracks: 'Все потоки',
    desc: 'Сбор фактов из интернета, многошаговые исследования, границы автономности агента.'},
  {num: 'M6', slug: 'module-6-artefakty', title: 'Артефакты и мини-приложения', tracks: 'Практик / Инженер',
    desc: 'Публикация интерактивных страниц, диаграммы, runtime-возможности прямо со страницы.'},
  {num: 'M7', slug: 'module-7-api-sdk', title: 'Claude API / SDK для разработчиков', tracks: 'Инженер',
    desc: 'Messages API, tool use, prompt caching, Agent SDK, мультимодальность, выбор модели.'},
  {num: 'M8', slug: 'module-8-integracii', title: 'Интеграции и экосистема', tracks: 'Практик / Инженер',
    desc: 'Claude в Slack, IDE-расширения, MCP-реестр, Desktop/Web/CLI — когда что уместно.'},
  {num: 'M9', slug: 'module-9-kachestvo-bezopasnost', title: 'Проверка качества и безопасность', tracks: 'Инженер',
    desc: 'Eval-наборы, независимая верификация, безопасность многоагентных систем.'},
];

export default function Programma() {
  return (
    <Layout
      title="Программа — Академия Claude"
      description="Полная программа: три потока сложности и одиннадцать модулей — от основ работы с Claude до создания собственных агентов на Claude API.">
      <main>
        <div className="container ac-hero">
          <p className="ac-eyebrow">Программа</p>
          <h1>Одиннадцать модулей, три потока прохождения</h1>
          <p className="ac-lede">Выберите поток под свою роль — модули открываются по порядку, каждый заканчивается проектом в портфолио.</p>
        </div>

        <section className="ac-section">
          <div className="container">
            <span className="ac-eyebrow">01 · Потоки</span>
            <h2>Три уровня сложности</h2>
            <div className="ac-grid cols-3" style={{marginTop: '1.5rem'}}>
              <div className="ac-card ac-track-card">
                <span className="ac-track-eyebrow">Поток 01</span>
                <h3>Старт</h3>
                <p>Для тех, кто не пишет код: менеджеры, авторы, аналитики. Промптинг, документы,
                  аналитика и веб-исследования — без единой строчки кода.</p>
                <p className="ac-track-stat">4 модуля · ≈11 занятий · ≈6 недель</p>
              </div>
              <div className="ac-card ac-track-card">
                <span className="ac-track-eyebrow">Поток 02</span>
                <h3>Практик</h3>
                <p>Для тех, кто хочет внедрить Claude-агентов в рабочий процесс. Плюс Claude Code,
                  автоматизация, экономия токенов, интерактивные приложения, интеграции.</p>
                <p className="ac-track-stat">9 модулей · ≈27 занятий · ≈14 недель</p>
              </div>
              <div className="ac-card ac-track-card">
                <span className="ac-track-eyebrow">Поток 03</span>
                <h3>Инженер</h3>
                <p>Для тех, кто хочет создавать собственные программы и сервисы на Claude API/SDK,
                  и делать это надёжно и безопасно.</p>
                <p className="ac-track-stat">11 модулей · ≈35 занятий · ≈17 недель</p>
              </div>
            </div>
          </div>
        </section>

        <section className="ac-section">
          <div className="container">
            <span className="ac-eyebrow">02 · Формат</span>
            <h2>Как устроено обучение</h2>
            <div className="ac-grid cols-4" style={{marginTop: '1.5rem'}}>
              <div className="ac-card"><span className="ac-eyebrow">Структура занятия</span><p>короткая теория → живая демонстрация → практика с преподавателем → домашний проект</p></div>
              <div className="ac-card"><span className="ac-eyebrow">Домашние проекты</span><p>каждый мини-проект попадает в портфолио студента, а не остаётся черновиком</p></div>
              <div className="ac-card"><span className="ac-eyebrow">Итоговая аттестация</span><p>защита портфолио из мини-проектов перед группой</p></div>
              <div className="ac-card"><span className="ac-eyebrow">Доступ к модулям</span><p>зависит от выбранного потока — Старт, Практик или Инженер</p></div>
            </div>
          </div>
        </section>

        <section className="ac-section">
          <div className="container">
            <span className="ac-eyebrow">03 · M0–M9</span>
            <h2>Модули программы</h2>
            <div className="ac-grid cols-3" style={{marginTop: '1.5rem'}}>
              {MODULES.map((m) => (
                <Link key={m.slug} to={`/docs/modules/${m.slug}`} className="ac-card" style={{textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', gap: '0.6rem'}}>
                  <span style={{fontFamily: 'var(--ifm-heading-font-family)', fontSize: '1.3rem', color: 'var(--ifm-color-primary)'}}>{m.num}</span>
                  <h3 style={{fontSize: '1.08rem'}}>{m.title}</h3>
                  <p style={{fontSize: '0.92rem', opacity: 0.75}}>{m.desc}</p>
                  <span style={{fontSize: '0.74rem', fontWeight: 600, opacity: 0.6, marginTop: 'auto'}}>{m.tracks}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="ac-section">
          <div className="container">
            <span className="ac-eyebrow">04 · Как это устроено</span>
            <h2>Как проходит запись и обучение</h2>
            <ol className="ac-roadmap" style={{marginTop: '1.5rem'}}>
              <li><p>Выбираете поток и оставляете заявку — коротко расскажем, что подходит именно вам.</p></li>
              <li><p>Фиксируем расписание живых занятий и открываем доступ к материалам.</p></li>
              <li><p>Проходите модули по порядку — каждый закрывается проектом в портфолио.</p></li>
              <li><p>Защищаете итоговое портфолио перед группой на итоговой аттестации.</p></li>
            </ol>
          </div>
        </section>

        <div className="container">
          <div className="ac-cta">
            <h2>Готовы посмотреть примеры результатов?</h2>
            <p style={{opacity: 0.8}}>Каждый модуль опирается на конкретные проекты — посмотрите, что именно делают студенты.</p>
            <div className="ac-cta-actions">
              <Link className="button button--primary button--lg" to="/primery">Смотреть примеры</Link>
              <Link className="button button--outline button--lg" to="/kontakty">Записаться</Link>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
