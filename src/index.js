import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import CardList from './CardList';
import 'tachyons';
import { robots } from './robots';

ReactDOM.render(
  <React.StrictMode>
    <Fragment>
      <h1 className="tc">Robofriends</h1>
    </Fragment>
    <CardList robots={robots} />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
