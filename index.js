import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';

import Tateti from './app/Tateti';
import {gameReducer} from './app/reducers';

let store = createStore(gameReducer);
render(
  <Tateti store={store}/>,
  document.getElementById('app')
);
