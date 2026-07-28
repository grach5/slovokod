import Layout from '@theme/Layout';
import HeroScene3D from '@site/src/components/HeroScene3D';

const CONTACT_EMAIL = 'gra4ik.asatryan@gmail.com';

const FAQ = [
  {q: 'Какой поток мне подходит?', a: 'Если вы не пишете код — «Старт». Если хотите внедрить Claude-агентов в свою разработку — «Практик». Если планируете создавать собственные программы на Claude API — «Инженер». Подробное сравнение — на странице «Программа».'},
  {q: 'Нужен ли опыт программирования?', a: 'Для потока «Старт» — нет. Для «Практик» и «Инженер» — базовое знакомство с кодом и терминалом; уверенное владение языком программирования требуется только на модуле Claude API/SDK — это последний блок потока «Инженер».'},
  {q: 'Формат — очно, онлайн или запись?', a: 'Гибрид: живые занятия с преподавателем плюс материалы в записи для повторения. Точное расписание фиксируется при записи.'},
  {q: 'Что я получу в конце?', a: 'Портфолио из мини-проектов — по одному на каждый пройденный модуль — и защиту этого портфолио перед группой на итоговой аттестации, плюс собственную библиотеку шаблонов и промптов из раздела «Ресурсы».'},
  {q: 'Сколько это стоит?', a: '«Старт» — 9 900 ₽, «Практик» — 24 900 ₽, «Инженер» — 39 900 ₽. Разовая оплата, на «Практике» и «Инженере» доступна рассрочка на 3 месяца.'},
  {q: 'Можно вернуть деньги, если не понравится?', a: 'Да. Если после первых двух занятий выбранного потока курс не подойдёт — возвращаем полную стоимость без вопросов.'},
  {q: 'Как записаться?', a: 'Напишите на почту ниже с пометкой, какой поток вам интересен — ответим с деталями и реквизитами.'},
];

export default function Kontakty() {
  return (
    <Layout
      title="Контакты — Академия Claude"
      description="Как записаться на курс профессиональной работы с Claude: выбор потока, частые вопросы, контакты.">
      <main>
        <div className="ac-hero" style={{position: 'relative', overflow: 'hidden'}}>
          <HeroScene3D compact seed={33} />
          <div className="container" style={{position: 'relative', zIndex: 1}}>
            <p className="ac-eyebrow">Контакты</p>
            <h1>Запишитесь на поток</h1>
            <p className="ac-lede">Короткое письмо с выбранным потоком — этого достаточно, чтобы получить реквизиты и дату старта.</p>
          </div>
        </div>
        <section className="ac-section">
          <div className="container" style={{maxWidth: '760px'}}>
            <span className="ac-eyebrow">FAQ</span>
            <h2>Частые вопросы</h2>
            {FAQ.map((item) => (
              <div key={item.q} className="ac-faq-item">
                <h3>{item.q}</h3>
                <p style={{opacity: 0.8}}>{item.a}</p>
              </div>
            ))}
          </div>
        </section>
        <div className="container">
          <div className="ac-cta">
            <h2>{CONTACT_EMAIL}</h2>
            <p style={{opacity: 0.8}}>Достаточно пары строк с именем и выбранным потоком — дальше пришлём реквизиты и дату старта.</p>
            <div className="ac-cta-actions">
              <a className="button button--primary button--lg" href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Академия Claude — запись')}`}>Написать</a>
              <a className="button button--outline button--lg" href="/#pricing">Ещё раз посмотреть тарифы</a>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
