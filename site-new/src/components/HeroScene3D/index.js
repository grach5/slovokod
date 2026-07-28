import {useEffect, useRef} from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import {useColorMode} from '@docusaurus/theme-common';
import styles from './styles.module.css';

function Scene({colorMode}) {
  const canvasRef = useRef(null);
  const wrapRef = useRef(null);
  const reduceMotionRef = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    reduceMotionRef.current = mq.matches;
    const handler = (e) => {
      reduceMotionRef.current = e.matches;
    };
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    if (!canvasRef.current || !wrapRef.current) return undefined;
    let cleanup;
    // three.js is required here (client-only mount effect) so it never
    // touches Docusaurus's server-side static build pass.
    const {mountNetworkScene} = require('./scene');
    const accent = colorMode === 'dark' ? '#d9a441' : '#b3801f';
    const line = colorMode === 'dark' ? '#3a3f4a' : '#c9c2b2';
    cleanup = mountNetworkScene(canvasRef.current, wrapRef.current, {
      accentColor: accent,
      lineColor: line,
      reduceMotion: reduceMotionRef,
    });
    return () => cleanup && cleanup();
  }, [colorMode]);

  return (
    <div className={styles.sceneWrap} ref={wrapRef}>
      <canvas ref={canvasRef} className={styles.canvas} />
    </div>
  );
}

export default function HeroScene3D() {
  const {colorMode} = useColorMode();
  return (
    <div aria-hidden="true" className={styles.outer}>
      <BrowserOnly fallback={null}>{() => <Scene colorMode={colorMode} />}</BrowserOnly>
    </div>
  );
}
