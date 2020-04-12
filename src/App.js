import React from 'react';
import { Provider } from 'react-redux';
import store from './store/';

import Sidebar from './components/Sidebar';
import Video from './components/Video';

function App() {
  return (
    <Provider store={store}>
      <Sidebar />
      <Video />
    </Provider>
  );
}

export default App;
