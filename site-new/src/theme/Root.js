import React, {useEffect} from 'react';

// Website ID из Crisp: Settings → Website Settings → Setup Instructions.
// Пока тут заглушка — виджет поддержки не загружается, пока вы не впишете свой ID.
const CRISP_WEBSITE_ID = 'ЗАМЕНИТЕ_НА_СВОЙ_CRISP_ID';

export default function Root({children}) {
  useEffect(() => {
    if (!CRISP_WEBSITE_ID || CRISP_WEBSITE_ID === 'ЗАМЕНИТЕ_НА_СВОЙ_CRISP_ID') {
      return;
    }
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = CRISP_WEBSITE_ID;
    const script = document.createElement('script');
    script.src = 'https://client.crisp.chat/l.js';
    script.async = true;
    document.head.appendChild(script);
  }, []);

  return <>{children}</>;
}
