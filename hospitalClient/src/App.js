import './App.css';
import Header from './components/Header/Header';
import { Panel } from 'primereact/panel';

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

require('dotenv').config();

function App() {
  return (
    <div className="App">
        <Header></Header>
        <div className="Container">
          <div className="card">
            <Panel header="HAT: Schedule Health Appointments" id="panel_message">
              <h1>Welcome to HAT!</h1>
            </Panel>
          </div>
        </div>
    </div>
    
  );
}

export default App;
