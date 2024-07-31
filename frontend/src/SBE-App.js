import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Blocks from './pages/Blocks';
import Transactions from './pages/Transactions';
import Addresses from './pages/Addresses';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/blocks/:blockId" component={Blocks} />
          <Route path="/transactions/:txId" component={Transactions} />
          <Route path="/addresses/:address" component={Addresses} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
    
