import React, { useEffect } from 'react';

const BotpressChat = () => {
  useEffect(() => {
    const script1 = document.createElement('script');
    script1.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js';
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src =
      'https://mediafiles.botpress.cloud/c5cb154b-0499-47d9-8538-526c1ed6acb5/webchat/config.js';
    script2.defer = true;
    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return <div id="botpress-chat-container" />;
};

export default BotpressChat;
