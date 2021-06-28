/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
// import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import {View, ActivityIndicator} from 'react-native';
import {WebView} from 'react-native-webview';

// WebViewで表示させるHTML
const startpage: string = 'https://chromium.github.io/octane/';

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <WebView
          ref={ref => (this.webView = ref)}
          source={{uri: startpage}}
          renderLoading={() => this.loading()}
          startInLoadingState={true}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
