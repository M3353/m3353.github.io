import './Util/root.css';
import './Util/styles.css';

import React from 'react';

import Cursor from './Components/Cursor/Cursor';
import Navigation from './Components/Navigation/Navigation';

function App() {
    return (
      <div>
        <Cursor/>
        <Navigation/>
      </div>
    )
}

export default App;
