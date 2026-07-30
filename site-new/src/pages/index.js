import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import HeroScene3D from '@site/src/components/HeroScene3D';

const CONTACT_EMAIL = 'gra4ik.asatryan@gmail.com';

function mailto(plan, price) {
  const subject = encodeURIComponent(`Словокод — ${plan}`);
  const body = encodeURIComponent(`Хочу пройти курс «${plan}» (${price}). Расскажите, как оплатить.`);
  return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
}

export default function Home() {
  return (
    <Layout
      title="Доведите идею до продукта с ИИ-ассистентом"
      description="Практический курс: за 5 или 14 дней доведите свою идею до работающего, опубликованного продукта вместе с ИИ-ассистентом (по умолчанию — Claude).">
      <main>
        <div className="ac-hero" style={{position: 'relative', overflow: 'hidden'}}>
          <HeroScene3D />
          <div className="container" style={{position: 'relative', zIndex: 1}}>
          <p className="ac-eyebrow">Без потоков и дат старта</p>
          <h1>От идеи до работающего продукта — со <em>Словокодом</em></h1>
          <p className="ac-lede">
            Разница между «поболтал с ИИ-ассистентом» и «сделал продукт» — не в таланте,
            а в процедуре: как объяснить задачу, разбить её на проверяемые шаги, не потерять
            контроль над контекстом и довести результат до опубликованной ссылки, а не черновика.
            Курс учит этой процедуре на реальных проектах — сайтах и автоматизациях.
          </p>
          <div className="ac-hero-actions">
            <Link className="button button--primary button--lg" to="#pricing">Смотреть тарифы</Link>
            <Link className="button button--outline button--lg" to="/programma">Смотреть программу</Link>
          </div>
          <p style={{marginTop: '1.5rem', fontSize: '0.88rem', opacity: 0.75}}>
            <b>19 дней контента</b> · 2 трека (База + Полная) · бонусный трек вглубь Claude · доступ навсегда
          </p>
          <p style={{marginTop: '0.6rem', fontSize: '0.88rem'}}>
            <Link to="/docs/baza/den-1">Все дни открыты для чтения бесплатно — начните с Дня 1 →</Link>
          </p>
          </div>
        </div>

        <section className="ac-section">
          <div className="container">
            <span className="ac-eyebrow">Простыми словами</span>
            <h2>Чему вы научитесь и что получите на выходе</h2>
            <p style={{maxWidth: '62ch', opacity: 0.8, marginTop: '0.5rem'}}>
              Собрать продукт с ИИ-ассистентом — это не «попросить один раз и получить готовое».
              Это цикл: чётко объяснить задачу → разбить на проверяемые шаги → проверить факт,
              а не ощущение → сохранить рабочую версию. Курс учит именно этому циклу — на сайте
              в «Базе», на полноценном продукте с базой данных и публикацией в «Полной».
            </p>
            <div className="ac-grid cols-4" style={{marginTop: '1.5rem'}}>
              <div className="ac-card">
                <span className="ac-eyebrow">Собирать сайты и автоматизации</span>
                <p>Опишете словами, что нужно, — получите работающий, опубликованный в интернете
                  продукт, даже если раньше никогда не программировали.</p>
              </div>
              <div className="ac-card">
                <span className="ac-eyebrow">Не терять контроль над проектом</span>
                <p>Файл проекта, точки возврата и разбивка на шаги — чтобы правка не ломала то,
                  что уже работало вчера.</p>
              </div>
              <div className="ac-card">
                <span className="ac-eyebrow">Чинить, а не гадать</span>
                <p>Пятишаговая процедура отладки: факты вместо «не работает» — отличает 10 минут
                  починки от вечера, потраченного впустую.</p>
              </div>
              <div className="ac-card">
                <span className="ac-eyebrow">Не хранить пароли в коде</span>
                <p>Ключи, секреты, права доступа к базе — отдельный день курса, потому что именно
                  здесь чаще всего случаются утечки у новичков.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="ac-section">
          <div className="container">
            <div style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem'}}>
              <div><span className="ac-eyebrow">Два трека + бонус</span><h2>Выберите глубину</h2></div>
              <Link to="/programma" style={{fontWeight: 700}}>Вся программа →</Link>
            </div>
            <div className="ac-grid cols-3">
              <div className="ac-card ac-track-card">
                <span className="ac-track-eyebrow">Трек «База»</span>
                <h3>5 дней</h3>
                <p>Только браузер, без терминала и баз данных: с нуля до опубликованного сайта.
                  Освоите главный цикл — задание, шаги, проверка по фактам.</p>
                <p className="ac-track-stat">5 дней · итог — сайт в интернете</p>
              </div>
              <div className="ac-card ac-track-card">
                <span className="ac-track-eyebrow">Трек «Полная»</span>
                <h3>14 дней</h3>
                <p>Всё из «Базы» плюс терминал, репозиторий и точки возврата, база данных, ключи
                  и секреты, отладка по процедуре, агентные режимы и финальный кейс в портфолио.</p>
                <p className="ac-track-stat">14 дней · итог — продукт с базой данных и кейс</p>
              </div>
              <div className="ac-card ac-track-card">
                <span className="ac-track-eyebrow">Бонус</span>
                <h3>Продвинутый трек</h3>
                <p>Для тех, кто прошёл «Полную» и хочет глубже именно в Claude: Claude Code, MCP
                  и агенты, память и токены, Claude API/SDK, интерактивные артефакты.</p>
                <p className="ac-track-stat">11 модулей · входит в тариф «Полная» и «Максимум»</p>
              </div>
            </div>
            <p style={{marginTop: '1rem', fontSize: '0.85rem', opacity: 0.7}}>
              Слова вроде «терминал» или «репозиторий» пугают только пока незнакомы — каждое
              объясняется в курсе один раз, простыми словами, в <Link to="/docs/resources/slovar">Словаре терминов</Link>.
            </p>
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
                <h4>День 2 · «Полная» · Задание до/после</h4>
                <div className="ac-compare-row">
                  <span className="ac-compare-label bad">До</span>
                  «Сделай сайт для записи клиентов»
                </div>
                <div className="ac-compare-row">
                  <span className="ac-compare-label good">После</span>
                  ТЗ из 6 блоков: что это, кто пользуется, что делает по шагам, что сохраняется,
                  ограничения, критерии готовности — каждый пункт да/нет
                </div>
              </div>
              <div className="ac-card ac-example-card">
                <h4>День 11 · «Полная» · Отладка по фактам</h4>
                <div className="ac-compare-row">
                  <span className="ac-compare-label bad">Было</span>
                  «не работает» → ассистент гадает и переписывает рабочий код<br/>
                  <span className="ac-compare-label good">Стало</span>
                  карточка: что делал → что ожидал → что увидел → текст ошибки дословно
                </div>
              </div>
              <div className="ac-card ac-example-card">
                <h4>Продвинутый трек · Проверка кода</h4>
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
              Использование ИИ-ассистентов при сборке продуктов уже стало нормой, но далеко не все
              проверяют результат так, как должны. Мы учим проверять по критериям и фактам —
              а не полагаться на то, что «выглядит рабочим».
            </p>
            <p style={{marginTop: '1.5rem'}}>
              <Link to="/docs/guides/vibecoding" style={{fontWeight: 700}}>Открыть подробное руководство по вайбкодингу →</Link>
            </p>
          </div>
        </section>

        <section className="ac-section">
          <div className="container">
            <span className="ac-eyebrow">Отзывы</span>
            <h2>Курс только запускается</h2>
            <p style={{maxWidth: '62ch', opacity: 0.8, marginTop: '0.5rem'}}>
              Отзывы появятся здесь после первых выпускников — мы не публикуем ничего,
              что не написали реальные люди. Если до покупки есть вопрос — напишите через
              чат в правом нижнем углу или на {CONTACT_EMAIL}, ответим лично.
            </p>
          </div>
        </section>

        <section className="ac-section">
          <div className="container">
            <span className="ac-eyebrow">Тарифы</span>
            <Heading as="h2" id="pricing">Выберите свой трек</Heading>
            <p style={{opacity: 0.8, marginTop: '0.5rem'}}>Все дни курса уже открыты на сайте — читайте и пробуйте задания бесплатно, без
              регистрации. Оплата — это не технический ключ, а то, что делает вас нашим учеником:
              право написать нам с вопросом по материалам (ответ обычно в течение суток) и, в «Максимуме»,
              банк промптов и материалы по работе с заказчиками. Оплата — по договорённости в переписке,
              без формы на сайте.</p>
            <div className="ac-grid cols-3" style={{marginTop: '1.5rem', alignItems: 'stretch'}}>
              <div className="ac-card ac-price-card">
                <h3>База</h3>
                <div className="ac-price-tag">20 000 ₽</div>
                <p className="ac-price-note">разовая оплата</p>
                <ul className="ac-price-features">
                  <li>5 дней, 5 тестов самопроверки</li>
                  <li>Готовый промпт для копирования на каждый день</li>
                  <li>Чек-листы приёмки к каждому дню</li>
                  <li>Доступ к материалам навсегда</li>
                </ul>
                <Link className="button button--outline button--block" to={mailto('База', '20 000 ₽')}>Написать — 20 000 ₽</Link>
              </div>
              <div className="ac-card ac-price-card is-recommended">
                <span className="ac-price-badge">Основной тариф</span>
                <h3>Полная</h3>
                <div className="ac-price-tag">35 000 ₽</div>
                <p className="ac-price-note">разовая оплата</p>
                <ul className="ac-price-features">
                  <li>14 дней, 14 тестов самопроверки</li>
                  <li>Всё из «Базы» + терминал, база данных, ключи, отладка, кейс в портфолио</li>
                  <li>Банк промптов на 60 запросов, каталог 7 типов проектов, чек-листы</li>
                  <li>Продвинутый трек (11 модулей) — в подарок</li>
                </ul>
                <Link className="button button--primary button--block" to={mailto('Полная', '35 000 ₽')}>Написать — 35 000 ₽</Link>
              </div>
              <div className="ac-card ac-price-card">
                <h3>Максимум</h3>
                <div className="ac-price-tag">50 000 ₽</div>
                <p className="ac-price-note">разовая оплата</p>
                <ul className="ac-price-features">
                  <li>Всё из «Полной»</li>
                  <li>Каталог 7 типов проектов — как перенести процедуру на бота, автоматизацию и другое</li>
                  <li>Банк промптов «Работа с заказчиками» (+20, 80 всего): оценка заказа, переговоры, сдача проекта</li>
                  <li>Приоритетный ответ на вопросы по материалам</li>
                </ul>
                <Link className="button button--outline button--block" to={mailto('Максимум', '50 000 ₽')}>Написать — 50 000 ₽</Link>
              </div>
            </div>
            <p style={{textAlign: 'center', marginTop: '1.5rem', fontSize: '0.85rem', opacity: 0.7}}>
              Кнопка откроет письмо в вашей почтовой программе — если она не настроена, напишите
              нам напрямую на {CONTACT_EMAIL}.
            </p>
          </div>
        </section>

        <section className="ac-section">
          <div className="container">
            <span className="ac-eyebrow">Честно, до оплаты</span>
            <h2>Что не входит и кому не подойдёт</h2>
            <div className="ac-grid cols-2" style={{marginTop: '1.5rem'}}>
              <div className="ac-card">
                <h3 style={{fontSize: '1.05rem'}}>Чего в курсе нет</h3>
                <ul style={{opacity: 0.85, paddingLeft: '1.1rem', margin: 0}}>
                  <li>Персональной проверки вашего кода или разбора именно вашего проекта — проверка автоматическая, тестами и чек-листами самопроверки.</li>
                  <li>Личных созвонов и наставника, который смотрит ваш экран.</li>
                  <li>Доступа к ИИ-ассистенту — его нужно иметь до покупки.</li>
                  <li>Гарантии дохода, заказов или трудоустройства.</li>
                </ul>
              </div>
              <div className="ac-card">
                <h3 style={{fontSize: '1.05rem'}}>Кому не подойдёт</h3>
                <ul style={{opacity: 0.85, paddingLeft: '1.1rem', margin: 0}}>
                  <li>Ищете способ заработать без вложения времени — нужно 2–3 часа в день.</li>
                  <li>Хотите стать инженером и писать код руками — это другой курс.</li>
                  <li>Нужен наставник, который правит ваши ошибки лично.</li>
                  <li>Не готовы, что что-то будет ломаться — будет, и половина курса про то, как это чинить.</li>
                </ul>
              </div>
            </div>
            <p style={{marginTop: '1rem', opacity: 0.7, fontSize: '0.85rem'}}>
              Полный список — в разделе 2–3 <Link to="/docs/legal/oferta">оферты (черновик)</Link>.
            </p>
          </div>
        </section>

        <div className="container">
          <div className="ac-guarantee">
            <div className="ac-guarantee-icon">✓</div>
            <div>
              <h3 style={{marginBottom: '0.3rem'}}>Честно про возврат</h3>
              <p style={{opacity: 0.8}}>Мы не берём оплату без предварительного разговора, поэтому формального «окна на
                возврат» нет. Если материалы всё же не подошли — напишите на {' '}
                {CONTACT_EMAIL}, разберём вопрос индивидуально. Подробности — в{' '}
                <Link to="/docs/legal/oferta">оферте (черновик)</Link>.</p>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="ac-cta">
            <h2>Готовы довести идею до продукта?</h2>
            <p style={{opacity: 0.8}}>Каждый день расписан по шагам, с готовыми промптами для копирования и критериями
              приёмки — а не только теорией.</p>
            <div className="ac-cta-actions">
              <Link className="button button--primary button--lg" to="/kontakty">Написать нам</Link>
              <Link className="button button--outline button--lg" to="/programma">Смотреть программу</Link>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
