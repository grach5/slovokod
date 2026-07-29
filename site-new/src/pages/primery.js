import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import HeroScene3D from '@site/src/components/HeroScene3D';

// Соответствие меток модулей ("M0", "M2.5"…) их страницам на /programma —
// используется, чтобы метка на карточке примера вела к описанию модуля.
const MODULE_SLUGS = {
  'M0': 'module-0-osnovy-promptinga',
  'M1': 'module-1-claude-code',
  'M2': 'module-2-avtomatizaciya-agenty',
  'M2.5': 'module-2t-tokeny-pamyat-kontekst',
  'M3': 'module-3-dokumenty',
  'M4': 'module-4-analitika-vizualizaciya',
  'M5': 'module-5-veb-issledovaniya',
  'M6': 'module-6-artefakty',
  'M7': 'module-7-api-sdk',
  'M8': 'module-8-integracii',
  'M9': 'module-9-kachestvo-bezopasnost',
};

function QuarterChart() {
  const values = [58, 66, 74, 96];
  const labels = ['Q1', 'Q2', 'Q3', 'Q4'];
  const w = 220, h = 110, barW = 36, gap = 20;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" height={h} role="img" aria-label="Выручка по кварталам, акцент на Q4">
      {values.map((v, i) => {
        const barH = (v / 100) * (h - 24);
        const x = 8 + i * (barW + gap);
        const y = h - 24 - barH;
        const isLast = i === values.length - 1;
        return (
          <g key={labels[i]}>
            <rect x={x} y={y} width={barW} height={barH} rx="3"
              fill={isLast ? 'var(--ifm-color-primary)' : 'var(--ac-border)'} />
            <text x={x + barW / 2} y={h - 8} textAnchor="middle" fontSize="11" fill="currentColor" opacity="0.7">{labels[i]}</text>
          </g>
        );
      })}
    </svg>
  );
}

const EXAMPLES = [
  {tag: 'M0 · Все потоки', title: 'Промпт для анализа', body: (
    <>
      <div className="ac-compare-row"><span className="ac-compare-label bad">До</span>«Проанализируй этот отчёт»</div>
      <div className="ac-compare-row"><span className="ac-compare-label good">После</span>«Проанализируй Q2-отчёт по продажам: выдели 3 главных тренда, сравни с Q1, ответ — буллеты, не длиннее 150 слов»</div>
    </>
  )},
  {tag: 'M1 · Практик / Инженер', title: 'Исправление бага',
    caption: 'Падение с KeyError на несуществующем пользователе — исправлено и покрыто тестом.', body: (
    <div className="ac-compare-row" style={{fontFamily: 'var(--ifm-font-family-monospace)', fontSize: '0.85rem'}}>
      <div>- return db.users[id]</div>
      <div>+ user = db.users.get(id)</div>
      <div>+ if user is None:</div>
      <div>+ &nbsp;&nbsp;raise UserNotFoundError(id)</div>
      <div>+ return user</div>
      <p style={{opacity: 0.7, marginTop: '0.4rem'}}># тест: get_user с несуществующим id больше не падает</p>
    </div>
  )},
  {tag: 'M2 · Практик / Инженер', title: 'Регулярный агент',
    caption: 'Агент сам проверяет источник по расписанию и присылает сводку только при изменениях.', body: (
    <div className="ac-compare-row" style={{fontFamily: 'var(--ifm-font-family-monospace)', fontSize: '0.85rem'}}>
      расписание: пятница 09:00<br/>
      шаги:<br/>
      &nbsp;1. проверить источник X<br/>
      &nbsp;2. если изменения есть → сводка<br/>
      &nbsp;3. если нет → тихо завершиться<br/>
      при сбое источника: повтор через 30 мин, затем алерт
    </div>
  )},
  {tag: 'M2.5 · Практик / Инженер', title: 'Обновление memory-bank',
    caption: 'Claude сам ведёт заметки о проекте между сессиями и обновляет их по запросу.', body: (
    <div className="ac-compare-row">
      «Обнови activeContext.md и progress.md: что сделано, что осталось открытым вопросом,
      что дальше. Файл productContext.md трогай только при новых архитектурных решениях».
    </div>
  )},
  {tag: 'M3 · Все потоки', title: 'Очистка данных',
    caption: 'Так выглядит сырой экспорт из Excel/Google Таблиц с лишними разделителями — и что с ним делает Claude.', body: (
    <>
      <div className="ac-compare-row"><span className="ac-compare-label bad">До</span><span style={{fontFamily: 'var(--ifm-font-family-monospace)', fontSize: '0.85rem'}}>name,, revenue,,<br/>Иванов,,120000,,<br/>Петров,,98000,,</span></div>
      <div className="ac-compare-row"><span className="ac-compare-label good">После</span><span style={{fontFamily: 'var(--ifm-font-family-monospace)', fontSize: '0.85rem'}}>Иванов — 120 000 ₽<br/>Петров — 98 000 ₽</span></div>
    </>
  )},
  {tag: 'M4 · Все потоки', title: 'Дашборд по кварталам',
    caption: 'Столбчатая диаграмма, а не «универсальный» линейный график на все случаи — с акцентом на Q4.', body: (
    <div className="ac-compare-row"><QuarterChart /></div>
  )},
  {tag: 'M5 · Все потоки', title: 'Исследовательский отчёт', body: (
    <div className="ac-compare-row">«Рынок вырос на 12% в 2025 году¹, основной вклад внесли облачные
      сервисы²».<p style={{fontSize: '0.82rem', opacity: 0.7, marginTop: '0.5rem'}}>¹ отраслевой отчёт, 2025 · ² пресс-релиз поставщика, март 2026</p></div>
  )},
  {tag: 'M6 · Практик / Инженер', title: 'Интерактивный тренажёр', body: (
    <div className="ac-compare-row" style={{fontFamily: 'var(--ifm-font-family-monospace)', fontSize: '0.85rem'}}>
      Сумма займа: 500 000 ₽<br/>Ставка: 14%<br/>Срок: 24 мес.<br/>—<br/>Платёж в месяц: 24 006 ₽
    </div>
  )},
  {tag: 'M7 · Инженер', title: 'Экономия на повторных запросах', body: (
    <div className="ac-compare-row">Раздутая системная инструкция, повторяющаяся от запроса к
      запросу, кэшируется — первый вызов полной цены, повторные значительно дешевле и быстрее.</div>
  )},
  {tag: 'M8 · Практик / Инженер', title: 'Сводка в Slack', body: (
    <div className="ac-compare-row">«@Ассистент сделай сводку этого треда» →
      «3 участника согласовали дату релиза (20 августа), остался вопрос миграции базы».</div>
  )},
  {tag: 'M9 · Инженер', title: 'Проверка качества кода', body: (
    <div className="ac-compare-row">Кейсов: 40 · Прошло: 34 · Провал: 6<br/>Класс ошибки: неверная
      обработка часовых поясов (5 из 6)<p style={{opacity: 0.7, marginTop: '0.4rem'}}>→ исправление одного класса ошибок вместо 6 отдельных правок</p></div>
  )},
];

export default function Primery() {
  return (
    <Layout
      title="Примеры результатов — Академия Claude"
      description="Конкретные примеры результатов обучения по каждому модулю программы — от промпта до собственного агента на Claude API.">
      <main>
        <div className="ac-hero" style={{position: 'relative', overflow: 'hidden'}}>
          <HeroScene3D compact seed={22} />
          <div className="container" style={{position: 'relative', zIndex: 1}}>
            <p className="ac-eyebrow">Примеры</p>
            <h1>По одному примеру на каждый модуль</h1>
            <p className="ac-lede">Не пересказ теории, а то, что реально получается на выходе — от переписанного запроса до
              собственной программы, которая напрямую работает с Claude.</p>
            <p style={{fontSize: '0.85rem', opacity: 0.7, marginTop: '0.5rem'}}>
              Впервые слышите про Claude? Это ИИ-ассистент от Anthropic, доступен на claude.ai — что это и как
              записаться к нам, смотрите в <Link to="/kontakty">частых вопросах</Link>.
            </p>
          </div>
        </div>
        <section className="ac-section" style={{paddingBottom: 0}}>
          <div className="container" style={{display: 'flex', flexWrap: 'wrap', gap: '0.4rem 1.6rem', fontSize: '0.82rem', opacity: 0.75, marginBottom: '1.2rem'}}>
            <span>M0–M9 — номера модулей программы (M2.5 — доп. модуль между M2 и M3), метка на карточке ведёт к описанию модуля</span>
            <span>Поток — Старт, Практик или Инженер; чем отличаются — на странице <Link to="/#pricing">тарифов</Link></span>
          </div>
        </section>
        <section className="ac-section" style={{paddingTop: 0}}>
          <div className="container ac-grid cols-3">
            {EXAMPLES.map((ex) => {
              const [modLabel, tracksLabel] = ex.tag.split(' · ');
              const slug = MODULE_SLUGS[modLabel];
              return (
                <article key={ex.title} className="ac-card ac-example-card">
                  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <h3 style={{fontSize: '1.05rem'}}>{ex.title}</h3>
                    <span style={{fontSize: '0.72rem', opacity: 0.6}}>
                      {slug ? <Link to={`/docs/modules/${slug}`}>{modLabel}</Link> : modLabel} · {tracksLabel}
                    </span>
                  </div>
                  {ex.caption && <p style={{fontSize: '0.85rem', opacity: 0.75, margin: 0}}>{ex.caption}</p>}
                  {ex.body}
                </article>
              );
            })}
          </div>
        </section>
        <div className="container">
          <div className="ac-cta">
            <h2>Хотите увидеть план занятий целиком?</h2>
            <p style={{opacity: 0.8}}>У каждого модуля расписаны занятия, темы и критерии проверки — не только итоговый проект.</p>
            <div className="ac-cta-actions">
              <a className="button button--primary button--lg" href="/programma">Смотреть программу</a>
              <a className="button button--outline button--lg" href="/kontakty">Записаться</a>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
