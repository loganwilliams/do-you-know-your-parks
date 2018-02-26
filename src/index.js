import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ParkGame from './ParkGame';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ParkGame />, document.getElementById('root'));
registerServiceWorker();
