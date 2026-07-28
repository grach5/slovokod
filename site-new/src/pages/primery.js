import Layout from '@theme/Layout';
import HeroScene3D from '@site/src/components/HeroScene3D';

const EXAMPLES = [
  {tag: 'M0 · Все потоки', title: 'Промпт для анализа', body: (
    <>
      <div className="ac-compare-row"><span className="ac-compare-label bad">До</span>«Проанализируй этот отчёт»</div>
      <div className="ac-compare-row"><span className="ac-compare-label good">После</span>«Проанализируй Q2-отчёт по продажам: выдели 3 главных тренда, сравни с Q1, ответ — буллеты, не длиннее 150 слов»</div>
    </>
  )},
  {tag: 'M1 · Практик / Инженер', title: 'Исправление бага', body: (
    <div className="ac-compare-row" style={{fontFamily: 'var(--ifm-font-family-monospace)', fontSize: '0.85rem'}}>
      <div>- return db.users[id]</div>
      <div>+ user = db.users.get(id)</div>
      <div>+ if user is None:</div>
      <div>+ &nbsp;&nbsp;raise UserNotFoundError(id)</div>
      <div>+ return user</div>
      <p style={{opacity: 0.7, marginTop: '0.4rem'}}># тест: get_user с несуществующим id больше не падает</p>
    </div>
  )},
  {tag: 'M2 · Практик / Инженер', title: 'Регулярный агент', body: (
    <div className="ac-compare-row" style={{fontFamily: 'var(--ifm-font-family-monospace)', fontSize: '0.85rem'}}>
      расписание: пятница 09:00<br/>
      шаги:<br/>
      &nbsp;1. проверить источник X<br/>
      &nbsp;2. если изменения есть → сводка<br/>
      &nbsp;3. если нет → тихо завершиться<br/>
      при сбое источника: повтор через 30 мин, затем алерт
    </div>
  )},
  {tag: 'M2.5 · Практик / Инженер', title: 'Обновление memory-bank', body: (
    <div className="ac-compare-row">
      «Обнови activeContext.md и progress.md: что сделано, что осталось открытым вопросом,
      что дальше — не переписывая productContext.md без архитектурных решений».
    </div>
  )},
  {tag: 'M3 · Все потоки', title: 'Очистка данных', body: (
    <>
      <div className="ac-compare-row"><span className="ac-compare-label bad">До</span><span style={{fontFamily: 'var(--ifm-font-family-monospace)', fontSize: '0.85rem'}}>name,, revenue,,<br/>Иванов,,120000,,<br/>Петров,,98000,,</span></div>
      <div className="ac-compare-row"><span className="ac-compare-label good">После</span><span style={{fontFamily: 'var(--ifm-font-family-monospace)', fontSize: '0.85rem'}}>Иванов — 120 000 ₽<br/>Петров — 98 000 ₽</span></div>
    </>
  )},
  {tag: 'M4 · Все потоки', title: 'Дашборд по кварталам', body: (
    <div className="ac-compare-row">Столбчатая диаграмма выручки Q1–Q4 с явным акцентом цветом на
      последнем квартале — а не «универсальный» линейный график на все случаи.</div>
  )},
  {tag: 'M5 · Все потоки', title: 'Исследовательский отчёт', body: (
    <div className="ac-compare-row">«Рынок вырос на 12% в 2025 году¹, основной вклад внесли облачные
      сервисы²».<p style={{fontSize: '0.82rem', opacity: 0.7, marginTop: '0.5rem'}}>¹ отраслевой отчёт, 2025 · ² пресс-релиз поставщика, март 2026</p></div>
  )},
  {tag: 'M6 · Практик / Инженер', title: 'Интерактивный тренажёр', body: (
    <div className="ac-compare-row" style={{fontFamily: 'var(--ifm-font-family-monospace)', fontSize: '0.85rem'}}>
      Сумма займа: 500 000 ₽<br/>Ставка: 14%<br/>Срок: 24 мес.<br/>—<br/>Платёж в месяц: 24 180 ₽
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
          </div>
        </div>
        <section className="ac-section">
          <div className="container ac-grid cols-3">
            {EXAMPLES.map((ex) => (
              <article key={ex.title} className="ac-card ac-example-card">
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                  <h3 style={{fontSize: '1.05rem'}}>{ex.title}</h3>
                  <span style={{fontSize: '0.72rem', opacity: 0.6}}>{ex.tag}</span>
                </div>
                {ex.body}
              </article>
            ))}
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
