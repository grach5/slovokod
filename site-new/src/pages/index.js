import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

const CONTACT_EMAIL = 'gra4ik.asatryan@gmail.com';

function mailto(plan, price) {
  const subject = encodeURIComponent(`Академия Claude — ${plan}`);
  const body = encodeURIComponent(`Хочу записаться на поток «${plan}» (${price}).`);
  return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
}

export default function Home() {
  return (
    <Layout
      title="Академия Claude — курс профессиональной работы с Claude"
      description="Курс профессиональной работы с Claude (Anthropic): от первого промпта до продакшн-агентов. Десять с половиной модулей, три потока, проектный формат.">
      <main>
        <div className="container ac-hero">
          <p className="ac-eyebrow">Открываем набор</p>
          <h1>Профессиональная работа с <em>Claude</em>: от идеи до готового результата</h1>
          <p className="ac-lede">
            Разница между «просто пользуюсь ИИ» и профессионалом — не в том, кто использует Claude,
            а в дисциплине. Курс учит писать и чинить код вместе с Claude, вести автоматизацию,
            собирать документы, дашборды и собственные агенты на Claude API — и доводить результат
            до рабочего состояния, а не оставлять черновиком.
          </p>
          <div className="ac-hero-actions">
            <Link className="button button--primary button--lg" to="#pricing">Смотреть тарифы</Link>
            <Link className="button button--outline button--lg" to="/programma">Смотреть программу</Link>
          </div>
          <p style={{marginTop: '1.5rem', fontSize: '0.88rem', opacity: 0.75}}>
            <b>11 модулей</b> · <b>3 потока</b> · проектный формат · портфолио на выходе
          </p>
        </div>

        <section className="ac-section">
          <div className="container">
            <span className="ac-eyebrow">Простыми словами</span>
            <h2>Чему вы научитесь и что получите на выходе</h2>
            <p style={{maxWidth: '62ch', opacity: 0.8, marginTop: '0.5rem'}}>
              Профессиональная работа с Claude — это когда вы чётко объясняете, что нужно сделать,
              а Claude пишет код и собирает результат. Вы отвечаете за идею и проверку, а не
              печатаете код вручную с нуля.
            </p>
            <div className="ac-grid cols-4" style={{marginTop: '1.5rem'}}>
              <div className="ac-card">
                <span className="ac-eyebrow">Делать сайты и программы</span>
                <p>Опишете словами, что нужно — получите работающий сайт, приложение или программу,
                  даже если раньше никогда не программировали.</p>
              </div>
              <div className="ac-card">
                <span className="ac-eyebrow">Экономить часы на рутине</span>
                <p>Документы, таблицы, отчёты и переписка — Claude берёт на себя черновую работу, вы
                  проверяете и дорабатываете.</p>
              </div>
              <div className="ac-card">
                <span className="ac-eyebrow">Находить и чинить ошибки</span>
                <p>Разбираться, что пошло не так в коде, и уверенно это исправлять — вместе с Claude,
                  а не наугад.</p>
              </div>
              <div className="ac-card">
                <span className="ac-eyebrow">Экономить токены и деньги</span>
                <p>Отдельный модуль про память и контекст — навык, который отличает любителя от
                  профессионала на практике и в счёте за API.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="ac-section">
          <div className="container">
            <div style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem'}}>
              <div><span className="ac-eyebrow">Три потока</span><h2>Выберите путь под свою роль</h2></div>
              <Link to="/programma" style={{fontWeight: 700}}>Вся программа →</Link>
            </div>
            <div className="ac-grid cols-3">
              <div className="ac-card ac-track-card">
                <span className="ac-track-eyebrow">Поток 01</span>
                <h3>Старт</h3>
                <p>Без единой строчки кода: научитесь правильно формулировать запросы к Claude,
                  готовить документы и отчёты, находить нужную информацию в интернете.</p>
                <p className="ac-track-stat">4 модуля · ≈6 недель</p>
              </div>
              <div className="ac-card ac-track-card">
                <span className="ac-track-eyebrow">Поток 02</span>
                <h3>Практик</h3>
                <p>Научитесь писать и исправлять код вместе с Claude Code, автоматизировать рутинные
                  задачи, создавать простые сайты и приложения.</p>
                <p className="ac-track-stat">9 модулей · ≈14 недель</p>
              </div>
              <div className="ac-card ac-track-card">
                <span className="ac-track-eyebrow">Поток 03</span>
                <h3>Инженер</h3>
                <p>Всё из «Практика» плюс создание собственных программ на Claude API/SDK и умение
                  делать это надёжно и безопасно.</p>
                <p className="ac-track-stat">11 модулей · ≈17 недель</p>
              </div>
            </div>
          </div>
        </section>

        <section className="ac-section">
          <div className="container">
            <div style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem'}}>
              <div><span className="ac-eyebrow">Не обещания — примеры</span><h2>Чему вы научитесь на практике</h2></div>
              <Link to="/primery" style={{fontWeight: 700}}>Все примеры →</Link>
            </div>
            <div className="ac-grid cols-3">
              <div className="ac-card ac-example-card">
                <h4>M0 · Промпт до/после</h4>
                <div className="ac-compare-row">
                  <span className="ac-compare-label bad">До</span>
                  «Напиши письмо клиенту про задержку»
                </div>
                <div className="ac-compare-row">
                  <span className="ac-compare-label good">После</span>
                  «Письмо клиенту Ивану: заказ задержан на 3 дня, тон извиняющийся, без обещания
                  компенсации, 4-5 предложений»
                </div>
              </div>
              <div className="ac-card ac-example-card">
                <h4>M1 · Правка бага</h4>
                <div className="ac-compare-row">
                  <code>- total = price * qty</code><br/>
                  <code>+ total = round(price * qty, 2)</code>
                  <p style={{fontSize: '0.82rem', opacity: 0.7, marginTop: '0.4rem'}}># тест: округление до копеек при дробной цене</p>
                </div>
              </div>
              <div className="ac-card ac-example-card">
                <h4>M9 · Проверка качества кода от Claude</h4>
                <div className="ac-compare-row">
                  Кейсов: 40 · Прошло: 34 · Провал: 6<br/>
                  Класс ошибки: неверная обработка часовых поясов (5 из 6)
                  <p style={{fontSize: '0.82rem', opacity: 0.7, marginTop: '0.4rem'}}>→ исправление одного класса ошибок вместо 6 отдельных правок</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ac-section">
          <div className="container">
            <span className="ac-eyebrow">Не «на глазок»</span>
            <h2>Учим делать это по-настоящему хорошо</h2>
            <p style={{maxWidth: '62ch', opacity: 0.8, marginTop: '0.5rem'}}>
              Использование Claude при написании кода уже стало нормой, но далеко не все проверяют
              результат так, как должны. Разница между любителем и профессионалом — не в том, что
              код пишет Claude, а в том, как потом проверяется результат.
            </p>
            <p style={{marginTop: '1.5rem'}}>
              <Link to="/docs/guides/vibecoding" style={{fontWeight: 700}}>Открыть подробное руководство по вайбкодингу →</Link>
            </p>
          </div>
        </section>

        <section className="ac-section" id="pricing">
          <div className="container">
            <span className="ac-eyebrow">Тарифы набора</span>
            <h2>Выберите свой поток</h2>
            <p style={{opacity: 0.8, marginTop: '0.5rem'}}>Разовая оплата, доступ к материалам остаётся у вас навсегда.</p>
            <div className="ac-grid cols-3" style={{marginTop: '1.5rem', alignItems: 'stretch'}}>
              <div className="ac-card ac-price-card">
                <h3>Старт</h3>
                <div className="ac-price-tag">9 900 ₽</div>
                <p className="ac-price-note">разовая оплата · без рассрочки</p>
                <ul className="ac-price-features">
                  <li>4 модуля, ≈11 занятий</li>
                  <li>Промптинг, документы, аналитика, исследования</li>
                  <li>4 проекта в портфолио</li>
                  <li>Доступ к материалам навсегда</li>
                </ul>
                <Link className="button button--outline button--block" to={mailto('Старт', '9 900 ₽')}>Записаться — 9 900 ₽</Link>
              </div>
              <div className="ac-card ac-price-card is-recommended">
                <span className="ac-price-badge">Популярный выбор</span>
                <h3>Практик</h3>
                <div className="ac-price-tag">24 900 ₽</div>
                <p className="ac-price-note">оплата целиком или рассрочка на 3 месяца</p>
                <ul className="ac-price-features">
                  <li>9 модулей, ≈27 занятий</li>
                  <li>Всё из «Старта» + Claude Code, автоматизация, память и токены, интеграции</li>
                  <li>9 проектов в портфолио</li>
                  <li>Разбор кода в формате код-ревью</li>
                </ul>
                <Link className="button button--primary button--block" to={mailto('Практик', '24 900 ₽')}>Записаться — 24 900 ₽</Link>
              </div>
              <div className="ac-card ac-price-card">
                <h3>Инженер</h3>
                <div className="ac-price-tag">39 900 ₽</div>
                <p className="ac-price-note">оплата целиком или рассрочка на 3 месяца</p>
                <ul className="ac-price-features">
                  <li>11 модулей, ≈35 занятий</li>
                  <li>Всё из «Практика» + создание собственных агентов на Claude API/SDK</li>
                  <li>11 проектов в портфолио</li>
                  <li>Собственное приложение как финальный проект</li>
                </ul>
                <Link className="button button--outline button--block" to={mailto('Инженер', '39 900 ₽')}>Записаться — 39 900 ₽</Link>
              </div>
            </div>
            <p style={{textAlign: 'center', marginTop: '1.5rem', fontSize: '0.85rem', opacity: 0.7}}>
              Это цены текущего набора — финальная стоимость и рассрочка фиксируются при записи.
            </p>
          </div>
        </section>

        <div className="container">
          <div className="ac-guarantee">
            <div className="ac-guarantee-icon">✓</div>
            <div>
              <h3 style={{marginBottom: '0.3rem'}}>Гарантия первых двух занятий</h3>
              <p style={{opacity: 0.8}}>Если после первых двух занятий поймёте, что курс не подходит — вернём полную
                стоимость, без вопросов и объяснений.</p>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="ac-cta">
            <h2>Обсудим первый поток?</h2>
            <p style={{opacity: 0.8}}>Детали каждого модуля уже расписаны по занятиям, проектам и критериям проверки.</p>
            <div className="ac-cta-actions">
              <Link className="button button--primary button--lg" to="/kontakty">Записаться</Link>
              <Link className="button button--outline button--lg" to="/programma">Смотреть программу</Link>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
