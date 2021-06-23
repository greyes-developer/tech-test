import React from 'react';
import {Provider} from 'react-redux';

import {store} from './src/modules/store';
import AppRouting from './src/routes/AppRouting';

const App = () => {
  return (
    <Provider store={store}>
      <AppRouting />
    </Provider>
  );
};

export default App;
