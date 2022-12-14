import React from 'react';
import {WebView} from 'react-native-webview';

function PrivacyPage() {
  return (
    <WebView
      source={{
        uri: 'https://agripasta.it/privacy-policy',
      }}
    />
  );
}

export default PrivacyPage;
