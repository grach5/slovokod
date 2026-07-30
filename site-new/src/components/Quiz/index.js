import React, {useState, useRef, useEffect} from 'react';
import styles from './styles.module.css';

const LETTERS = ['А', 'Б', 'В', 'Г'];
const CORRECT_DELAY = 900;
const WRONG_DELAY = 700;

/**
 * Interactive self-check quiz. Click an option: correct advances after a
 * short delay, wrong rotates the question to the back of the queue instead
 * of revealing the right answer — so a wrong guess can't be "corrected" by
 * re-reading the same options, only by moving on and coming back to it.
 */
export default function Quiz({questions}) {
  const total = questions.length;
  const [queue, setQueue] = useState(() => questions.map((_, i) => i));
  const [selected, setSelected] = useState(null);
  const [status, setStatus] = useState('idle');
  const [missedOnce, setMissedOnce] = useState(() => new Set());
  const timeoutRef = useRef(null);

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  const done = queue.length === 0;

  if (done) {
    const firstTryCorrect = total - missedOnce.size;
    return (
      <div className={styles.quizDone}>
        <div className={styles.doneIcon}>✓</div>
        <div>
          <strong>Самопроверка пройдена</strong>
          <p className={styles.doneStat}>{firstTryCorrect} из {total} — с первой попытки</p>
        </div>
      </div>
    );
  }

  const qIndex = queue[0];
  const question = questions[qIndex];
  const answeredCount = total - queue.length;

  function handlePick(optIndex) {
    if (status !== 'idle') return;
    setSelected(optIndex);
    if (optIndex === question.correct) {
      setStatus('correct');
      timeoutRef.current = setTimeout(() => {
        setQueue((q) => q.slice(1));
        setSelected(null);
        setStatus('idle');
      }, CORRECT_DELAY);
    } else {
      setMissedOnce((s) => (s.has(qIndex) ? s : new Set(s).add(qIndex)));
      setStatus('wrong');
      timeoutRef.current = setTimeout(() => {
        setQueue((q) => [...q.slice(1), q[0]]);
        setSelected(null);
        setStatus('idle');
      }, WRONG_DELAY);
    }
  }

  return (
    <div className={styles.quiz}>
      <div className={styles.progressRow}>
        <span className={styles.progressLabel}>Вопрос {answeredCount + 1} из {total}</span>
        <div className={styles.progressBar}>
          <div className={styles.progressFill} style={{width: `${(answeredCount / total) * 100}%`}} />
        </div>
      </div>
      <p className={styles.question}>{question.q}</p>
      <div className={styles.options} role="group" aria-label={`Вопрос ${answeredCount + 1}`}>
        {question.options.map((opt, i) => {
          const isPicked = status !== 'idle' && i === selected;
          const cls = [
            styles.option,
            isPicked && status === 'correct' ? styles.optionCorrect : '',
            isPicked && status === 'wrong' ? styles.optionWrong : '',
          ].filter(Boolean).join(' ');
          return (
            <button
              key={i}
              type="button"
              className={cls}
              disabled={status !== 'idle'}
              onClick={() => handlePick(i)}>
              <span className={styles.optionLetter}>{LETTERS[i]}</span>
              <span className={styles.optionText}>{opt}</span>
              {isPicked && <span className={styles.optionIcon}>{status === 'correct' ? '✓' : '✕'}</span>}
            </button>
          );
        })}
      </div>
      <p className={styles.feedback} aria-live="polite">
        {status === 'correct' && 'Верно →'}
        {status === 'wrong' && 'Не совсем — дальше будет другой вопрос.'}
        {status === 'idle' && ' '}
      </p>
      {status === 'correct' && question.explain && (
        <p className={styles.explain}>{question.explain}</p>
      )}
    </div>
  );
}
