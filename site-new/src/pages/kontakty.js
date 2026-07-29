import {useState} from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import HeroScene3D from '@site/src/components/HeroScene3D';

const CONTACT_EMAIL = 'gra4ik.asatryan@gmail.com';

const FAQ = [
  {q: 'Какой поток мне подходит?', a: <>Если вы не пишете код — «Старт». Если хотите использовать Claude как агента прямо в разработке — например, Claude Code (сам выполняет шаги: ищет, редактирует файлы, запускает команды) — «Практик». Если планируете сами создавать программы, использующие Claude API (способ подключить Claude к своей программе) — «Инженер». Подробное сравнение — на странице «<Link to="/programma">Программа</Link>».</>},
  {q: 'Нужен ли опыт программирования?', a: 'Для потока «Старт» — нет. Для «Практик» и «Инженер» — базовое знакомство с кодом и терминалом (командной строкой); уверенное владение языком программирования требуется только на модуле Claude API/SDK (инструментов для разработчиков) — это последний блок потока «Инженер».'},
  {q: 'Формат — очно, онлайн или запись?', a: 'Гибрид: живые занятия онлайн (в Zoom) плюс материалы в записи для повторения. Ссылку на встречу пришлём при записи, точное расписание фиксируется тогда же.'},
  {q: 'Что я получу в конце?', a: <>Портфолио из мини-проектов — по одному на каждый пройденный модуль, — которое вы коротко покажете группе в конце курса (это не экзамен, а неформальная демонстрация), плюс собственную библиотеку шаблонов и промптов из раздела «<Link to="/docs/resources/resursy">Ресурсы</Link>».</>},
  {q: 'Сколько это стоит?', a: '«Старт» — 9 900 ₽, «Практик» — 24 900 ₽, «Инженер» — 39 900 ₽. Способ оплаты и реквизиты присылаем в ответ на заявку; на «Практике» и «Инженере» доступна рассрочка на 3 месяца — тремя равными платежами напрямую школе, без банка и кредита.'},
  {q: 'Можно вернуть деньги, если не понравится?', a: <>Да. Если после первых двух занятий выбранного потока курс не подойдёт — напишите на {CONTACT_EMAIL} с темой «Возврат», и в течение 3 рабочих дней вернём полную стоимость тем же способом, которым получили оплату.</>},
  {q: 'Как записаться?', a: 'Напишите на почту ниже — в первой строке письма укажите, какой поток вам интересен (Старт / Практик / Инженер). Ответим с деталями и пришлём, как оплатить.'},
  {q: 'Кто стоит за курсом?', a: 'Академия Claude — личный проект одного человека, без ИП или юридического лица. Все договорённости — включая оплату и возврат — напрямую, по почте, без посредников и без формального договора.'},
];

function CopyEmailButton({email}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      // clipboard API недоступен — просто игнорируем
    }
  };

  return (
    <button
      type="button"
      className="button button--outline button--lg"
      onClick={handleCopy}
      aria-label="Скопировать email адрес">
      {copied ? 'Скопировано!' : 'Скопировать адрес'}
    </button>
  );
}

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
            <p className="ac-lede">Claude — ИИ-ассистент от Anthropic для работы с кодом и текстом. Короткое письмо с выбранным потоком — этого достаточно, дальше пришлём, как оплатить, и дату старта.</p>
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
            <p style={{opacity: 0.8}}>Достаточно пары строк с именем и выбранным потоком (Старт / Практик / Инженер) — дальше пришлём, как оплатить, и дату старта.</p>
            <div className="ac-cta-actions">
              <a className="button button--primary button--lg" href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Академия Claude — запись')}`}>Написать</a>
              <CopyEmailButton email={CONTACT_EMAIL} />
              <a className="button button--outline button--lg" href="/#pricing">Посмотреть тарифы</a>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
