import React from 'react';
import AppNavigator from './navigation/AppNavigator';
import {DripsyProvider, makeTheme} from 'dripsy';

// dripsy
const theme = makeTheme({
  // your theme
});

type MyTheme = typeof theme;

declare module 'dripsy' {
  interface DripsyCustomTheme extends MyTheme {}
}
function App(): React.JSX.Element {
  return (
    <DripsyProvider theme={theme}>
      <AppNavigator />
    </DripsyProvider>
  );
}

export default App;
