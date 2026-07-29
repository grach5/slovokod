import {useState} from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import HeroScene3D from '@site/src/components/HeroScene3D';

const CONTACT_EMAIL = 'gra4ik.asatryan@gmail.com';

const FAQ = [
  {q: 'Какой тариф мне подходит?', a: <>Если хотите быстро понять, как работать с ИИ-ассистентом на практике — «База» (5 дней, сайт-визитка). Если нужен полноценный продукт с базой данных, публикацией и портфолио — «Полная» (14 дней). «Максимум» добавляет каталог типов проектов и расширенный банк промптов. Подробное сравнение — на странице «<Link to="/programma">Программа</Link>».</>},
  {q: 'Нужен ли опыт программирования?', a: 'Нет. Курс начинается с нуля: первые дни — только браузер и промпты, терминал появляется только в «Полной» с Дня 5, и тоже объясняется по шагам.'},
  {q: 'Какой ИИ-ассистент нужен?', a: 'Методика применима к разным ассистентам, но материалы курса по умолчанию используют и рекомендуют Claude (Anthropic). Доступ к ассистенту вы получаете и оплачиваете самостоятельно — курс его не предоставляет, убедитесь, что доступ есть, до оплаты.'},
  {q: 'Формат — живые занятия или самостоятельно?', a: 'Полностью самостоятельно и в своём темпе. Доступ к материалам тарифа открывается сразу и целиком после оплаты — нет потоков, расписания и дат старта.'},
  {q: 'Есть ли проверка знаний?', a: 'После каждого дня — самопроверка из 10 вопросов с ответами. Это чек-лист понимания, не экзамен: доступ к следующему дню он не блокирует.'},
  {q: 'Что я получу в конце?', a: <>По итогам «Полной» — опубликованный в интернете продукт с базой данных и оформленную карточку кейса для портфолио, плюс собственную библиотеку шаблонов и промптов из раздела «<Link to="/docs/resources/resursy">Ресурсы</Link>».</>},
  {q: 'Сколько это стоит?', a: '«База» — 20 000 ₽, «Полная» — 35 000 ₽, «Максимум» — 50 000 ₽. Способ оплаты обсуждаем в переписке — формы оплаты на сайте пока нет.'},
  {q: 'Можно вернуть деньги, если не понравится?', a: <>Мы не берём оплату без предварительного разговора, поэтому формального «окна на возврат» нет. Если материалы всё же не подошли — напишите на {CONTACT_EMAIL}, разберём вопрос индивидуально. Подробности — в <Link to="/docs/legal/oferta">оферте (черновик)</Link>.</>},
  {q: 'Как записаться?', a: 'Напишите на почту ниже — в первой строке письма укажите, какой тариф вам интересен (База / Полная / Максимум). Ответим с деталями и обсудим оплату.'},
  {q: 'Кто стоит за курсом?', a: 'Словокод — личный проект одного человека, без ИП или юридического лица на данный момент. Все договорённости — включая оплату и возврат — напрямую, по почте, без посредников и без формального договора.'},
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
      title="Контакты — Словокод"
      description="Как начать: выбор тарифа, частые вопросы, контакты курса Словокод.">
      <main>
        <div className="ac-hero" style={{position: 'relative', overflow: 'hidden'}}>
          <HeroScene3D compact seed={33} />
          <div className="container" style={{position: 'relative', zIndex: 1}}>
            <p className="ac-eyebrow">Контакты</p>
            <h1>Напишите нам</h1>
            <p className="ac-lede">Короткое письмо с выбранным тарифом — этого достаточно, дальше обсудим оплату,
              и доступ к материалам откроется сразу.</p>
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
            <p style={{opacity: 0.8}}>Достаточно пары строк с именем и выбранным тарифом (База / Полная / Максимум) —
              дальше обсудим оплату и откроем доступ.</p>
            <div className="ac-cta-actions">
              <a className="button button--primary button--lg" href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Словокод — вопрос')}`}>Написать</a>
              <CopyEmailButton email={CONTACT_EMAIL} />
              <a className="button button--outline button--lg" href="/#pricing">Посмотреть тарифы</a>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
